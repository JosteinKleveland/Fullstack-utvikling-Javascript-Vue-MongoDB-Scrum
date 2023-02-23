<template>
  <v-container>
    <v-row>
      <v-col v-for="tool in tools" :key="tool.id" cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
        <v-card>
          <v-img :src="tool.imgUrl" height="200"></v-img>
          <v-card-title>{{ tool.name }}</v-card-title>
          <v-card-text>{{ tool.description }}</v-card-text>
          <v-card-actions>
            <RouterLink :to="`/toolDetails/${tool._id}`" style="text-decoration: none">
            <v-btn color="primary" @click="routeToDetails" text>Detaljer</v-btn>
            </RouterLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import {useRouter} from 'vue-router';
import {routerLink} from 'vue-router';
const router = useRouter();
console.log(router, routerLink);

export default {
  data() {
    return {
      tools: []
    };
  },
  mounted() {
    axios({ method: "GET", "url": "http://localhost:5050/api/tool/getTool/all" }).then(response => {
    console.log(response.data);
    this.tools = response.data.tools
    console.log(this.tools.tool.name)
  }, error => {
    console.error(error);
  });
  },
};
</script>