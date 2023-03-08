<template>
  <v-container>
    <v-row>
      <!-- Sort container -->
      <v-col :cols="12" :sm="3" class="d-flex justify-sm-end flex-grow-1">
        <v-container>
          <!-- Sort container content -->
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
                  <v-checkbox label="Checkbox 1"></v-checkbox>
                </v-col>
                <v-col class="checkbox-col" cols="6" sm="12" md="12" lg="12">
                  <v-checkbox label="Checkbox 2"></v-checkbox>
                </v-col>
                <v-col class="checkbox-col" cols="6" sm="12" md="12" lg="12">
                  <v-checkbox label="Checkbox 3"></v-checkbox>
                </v-col>
                <v-col class="checkbox-col" cols="6" sm="12" md="12" lg="12">
                  <v-checkbox label="Checkbox 4"></v-checkbox>
                </v-col>
                <v-col class="checkbox-col" cols="6" sm="12" md="12" lg="12">
                  <v-checkbox label="Checkbox 5"></v-checkbox>
                </v-col>
                <v-col class="checkbox-col" cols="6" sm="12" md="12" lg="12">
                  <v-checkbox label="Checkbox 6"></v-checkbox>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-divider vertical></v-divider>
      <!-- Tool container -->
      <v-col :cols="12" :sm="9" class="flex-grow-1">
        <v-container>
          <!-- Tool container content -->
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
                <v-img :src="tool.imgUrl" height="200"></v-img>
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
import { routerLink } from "vue-router";
const router = useRouter();

console.log(router, routerLink);
export default {
  name: "HomeView",
  data() {
    return {
      tools: [],
    };
  },

  mounted() {
    axios({
      method: "GET",
      url: "http://localhost:5050/api/tool/getTool/all",
    }).then(
      (response) => {
        console.log(response.data);
        this.tools = response.data.tools;
        console.log(this.tools.tool.name);
      },
      (error) => {
        console.error(error);
      }
    );
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
</style>
