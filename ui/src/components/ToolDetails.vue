<template>
    <v-card v-if="tool">
              <v-img
                :src="tool.imgUrl"
                height="20vh"
                cover
              ></v-img>
          
              <v-card-title>
                {{ tool.name }}
              </v-card-title>
              <v-card-subtitle class="pt-1">
                {{tool.lenderEmail}}
              </v-card-subtitle>
              <v-card-subtitle class="pt-4">
                {{ tool.price }}kr
              </v-card-subtitle>
              <v-card-text>
                {{ tool.description }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="orange-lighten-2"
                  variant="text"
                >Explore
                </v-btn>
          
                <v-spacer></v-spacer>
          
                <v-btn
                  :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="show = !show"
                ></v-btn>
              </v-card-actions>
          
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
          
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
    <v-card v-else>
      <v-card-text>Loading...</v-card-text>
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