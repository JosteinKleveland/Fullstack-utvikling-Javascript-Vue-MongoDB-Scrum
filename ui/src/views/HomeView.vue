<template>
  <v-container>
    <v-row>
      <v-col v-for="tool in tools" :key="tool.id" cols="12" xs="12" sm="6" md="4" lg="4" xl="4">
        <v-card>
          <v-img :src="tool.imgUrl" height="200"></v-img>
          <v-card-title>{{ tool.name }}</v-card-title>
          <v-card-text>{{ tool.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" text>Details</v-btn>
            <v-btn color="secondary" text>Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

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
  }
};
</script>