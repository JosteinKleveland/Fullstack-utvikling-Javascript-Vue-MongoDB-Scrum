<template>
  <v-card v-if="tool">
  <v-container>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
          <v-img class="ml_auto" :src="tool.imgUrl" maxheight="20vh"></v-img>
        </v-sheet>
      </v-col>
      <v-col
        cols="4"
        offset="4"
      >
        <v-sheet class="pa-2 ma-2">
        <h2>{{tool.name}}</h2>
        </v-sheet>
        <v-sheet class=" ma-2"><p1 class="font-weight-bold">Beskrivelse:</p1></v-sheet>
        <v-sheet class=" ma-2" >{{tool.description}}</v-sheet>
        <v-sheet class="ma-2"><v-btn color="#ADD8E6" class="mt-4">LÅN</v-btn></v-sheet>
      </v-col>
      <v-sheet class="pa-2 ma-2">
        <v-card-item>Pris: {{tool.price}}kr</v-card-item>
      </v-sheet>
    </v-row>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        cols="3"
        offset="3"
      >
      <v-card-text>
      <h3>Utleier:</h3>
      </v-card-text>
      <v-card-subtitle class="pt-1">
                {{tool.lenderEmail}}
              </v-card-subtitle>
      </v-col>
    </v-row>
  </v-container>
    </v-card>
  </template>
  
  <script>
  import axios from 'axios';
 import {useRoute} from 'vue-router';


export default {
  data() {
    return {
      tool: []
    };
  },
  mounted() {
    const route = useRoute();
    console.log(route.params);
    axios({ method: "GET", "url": "http://localhost:5050/api/tool/getTool/id/"+route.params._id }).then(response => {
    console.log(response.data);
    this.tool = response.data.tool
    console.log(this.tool.name)
  }, error => {
    console.error(error); 
  })

  }
};
  </script>