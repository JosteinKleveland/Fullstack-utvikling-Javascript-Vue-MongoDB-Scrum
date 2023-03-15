<template>
  <v-container>
    <v-row>
      <!-- Sort container -->
      <v-col :cols="12" :sm="3" class="d-flex justify-sm-end flex-grow-1">
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                class="search-bar flex-grow-1"
                density="compact"
                variant="solo"
                label="Search Tools"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                @click:append-inner="onClick"
              ></v-text-field>
              <v-row class="checkbox-row">
                <v-col class="checkbox-col" cols="6" sm="12" md="12" lg="12">
                  <v-radio-group v-model="selectedCategory">
                    <v-radio
                      v-for="(category, index) in categories"
                      :key="index"
                      :label="category.name"
                      :value="category.name"
                      @click="deselectRadio"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Sort price high-low, low-high -->
          <v-row>
            <v-col>
              <v-select
                class="priceSort"
                clearable
                label="Sort By Price"
                :items="['High-Low', 'Low-High']"
                variant="solo"
                v-model="selectedSortOption"
                @update:model-value="getSortedTools"
              ></v-select>
            </v-col>
          </v-row>
          <!-- Price sort by input -->
          <v-row>
            <v-col cols="6" sm="6" class="sortInput">
              <v-text-field
                label="From Kr"
                v-model="positiveNumber"
                type="number"
                :rules="positiveNumberRules"
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="6" class="sortInput">
              <v-text-field
                label="To Kr"
                v-model="anyNumber"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn color="primary" @click="sortNumbers" class="sortButton"
                >Sort</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-divider vertical></v-divider>

      <!-- Tool container -->
      <v-col :cols="12" :sm="9" class="flex-grow-1">
        <v-container>
          <v-row>
            <v-col
              v-for="tool in tools"
              :key="tool.id"
              cols="12"
              xs="12"
              sm="6"
              md="4"
              lg="4"
              xl="4"
            >
              <v-card>
                <v-img :src="tool.image" height="200"></v-img>
                <v-card-title>{{ tool.name }}</v-card-title>
                <v-card-text>{{ tool.description }}</v-card-text>
                <v-card-actions>
                  <RouterLink
                    :to="`/toolDetails/${tool._id}`"
                    style="text-decoration: none"
                  >
                    <v-btn
                      color="#FF5F00"
                      @click="router.push(`/toolDetails/${tool._id}`)"
                      text
                      >Detaljer</v-btn
                    >
                  </RouterLink>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
const router = useRouter();

console.log(router, RouterLink);
export default {
  name: "HomeView",
  data() {
    return {
      tools: [],
      selectedCategory: "",
      positiveNumber: 0,
      anyNumber: 0,
      selectedSortOption: null,
      positiveNumberRules: [
        (v) => !!v || "Positive number is required",
        (v) => v >= 0 || "Positive number cannot be negative",
      ],
      categories: [
        { name: "Hagearbeid", id: 1 },
        { name: "Kjøkkenredskaper", id: 2 },
        { name: "Rengjøring", id: 3 },
        { name: "Baderom", id: 4 },
        { name: "Garasjen", id: 5 },
        { name: "Bil", id: 6 },
      ],
    };
  },
  computed: {
    filteredTools() {
      return this.tools.filter(
        (tool) => tool.category === this.selectedCategory
      );
    },
  },
  methods: {
    sortNumbers() {
      // Add your sorting logic here
      console.log("Sorting numbers");
    },

    fetchTools() {
      // Get the selected category name
      const selectedCategory = this.categories.find(
        (c) => c.id === this.selectedCategory
      )?.name;
      // Call the API endpoint to fetch the tools with the selected category name
      axios
        .get(
          `http://localhost:5050/api/tool/getTool/filter/category/match/${selectedCategory}`
        )
        .then((response) => {
          console.log(response.data);
          this.tools = response.data.tools;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },

    fetchAllTools() {
      axios({
        method: "GET",
        url: "http://localhost:5050/api/tool/getTool/available",
      }).then(
        (response) => {
          console.log(response.data);
          this.tools = response.data.tools;
        },
        (error) => {
          console.error(error.message);
        }
      );
    },

    deselectRadio() {
      if (this.selectedCategory) {
        this.selectedCategory = "";
        this.fetchAllTools();
      }
    },
    getSortedTools() {
      if (this.selectedSortOption == "Low-High") {
        // Sort the tools by price from low to high
        axios
          .get(
            `http://localhost:5050/api/tool/getTool/filter/price/priceLowToHigh`
          )
          .then((response) => {
            this.tools = response.data.tools;
          })
          .catch((error) => {
            console.error(error);
          });
      } else if (this.selectedSortOption == "High-Low") {
        // Sort the tools by price from high to low
        axios
          .get(
            `http://localhost:5050/api/tool/getTool/filter/price/priceHighToLow`
          )
          .then((response) => {
            this.tools = response.data.tools;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },

  mounted() {
    this.fetchTools();
    this.fetchAllTools();
  },

  watch: {
    selectedCategory(newVal) {
      axios({
        method: "GET",
        url: `http://localhost:5050/api/tool/getTool/filter/category/match/${newVal}`,
      }).then(
        (response) => {
          console.log(response.data);
          this.tools = response.data.tools;
        },
        (error) => {
          console.error(error.message);
        }
      );
    },
  },
};
</script>

<style scoped>
.checkbox-row {
  margin-top: 20px;
}

.checkbox-col {
  padding: 0 !important;
  margin: 0 !important;
}

.v-checkbox {
  height: 50px;
}

.priceSort {
  margin-top: 20px;
}

.sortInput {
  margin-top: 5px !important;
  padding: 5px;
  height: 70px;
}
</style>
