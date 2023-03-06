<template>
  <!-- Sort container -->

  <v-row v-if="!lgAndUp">
    <v-col :cols="12">
      <v-container class="test">
        <v-row>
          <v-col>
            <v-text-field
              class="search-bar"
              :loading="loading"
              density="compact"
              variant="solo"
              label="Search Tools"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:append-inner="onClick"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>

  <!-- Tool container -->
  <v-row>
    <v-col
      :cols="lgAndUp ? 10 : 12"
      :sm="lgAndUp ? 9 : 12"
      :md="lgAndUp ? 9 : 12"
      :lg="lgAndUp ? 10 : 12"
      :xl="lgAndUp ? 10 : 12"
    >
      <v-container>
        <v-row>
          <v-col v-for="tool in tools" :key="tool.id">
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
                    color="primary"
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
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { routerLink } from "vue-router";
const router = useRouter();

console.log(router, routerLink);
export default {
  name: "HomeView",
  props: {
    lgAndUp: Boolean,
  },
  data() {
    return {
      tools: [],
    };
  },
  computed: {
    leftColWidth() {
      return this.lgAndUp ? 2 : 12;
    },
    leftColXs() {
      return this.lgAndUp ? 5 : 12;
    },
    leftColSm() {
      return this.lgAndUp ? 3 : 12;
    },
    leftColMd() {
      return this.lgAndUp ? 3 : 12;
    },
    leftColLg() {
      return this.lgAndUp ? 2 : 12;
    },
    leftColXl() {
      return this.lgAndUp ? 2 : 12;
    },
    rightColWidth() {
      return this.lgAndUp ? 10 : 12;
    },
    rightColXs() {
      return this.lgAndUp ? 7 : 12;
    },
    rightColSm() {
      return this.lgAndUp ? 9 : 12;
    },
    rightColMd() {
      return this.lgAndUp ? 9 : 12;
    },
    rightColLg() {
      return this.lgAndUp ? 10 : 12;
    },
    rightColXl() {
      return this.lgAndUp ? 10 : 12;
    },
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
.v-container {
  border: 2px solid;
}

.search-bar {
  width: 300px;
  margin-left: 60px;
}

.checkbox {
  margin-left: 10px;
}
</style>
