<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-avatar size="150" class="mx-auto mb-3">
          <img
            style="width: 150px; height: 150px"
            src="../assets/profile.png"
          />
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8">
        <h1 class="text-center mb-3">
          {{ userData.firstName }} {{ userData.lastName }}
        </h1>
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>
                <v-icon left>mdi-email</v-icon>
                <span>Email</span>
              </v-card-title>
              <v-card-text>
                {{ userData.email }}
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>
                <v-icon left>mdi-phone</v-icon>
                <span>Phone</span>
              </v-card-title>
              <v-card-text>
                {{ userData.phone }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <v-card>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab class="v-tabs__item" :value="1">Annonser</v-tab>
      <v-tab class="v-tabs__item" :value="2">Historikk</v-tab>
      <v-tab class="v-tabs__item" :value="3">VetIkke</v-tab>
    </v-tabs>

    <v-tab-item :key="1" value="1">
      <h1 v-if="tab === 1">Hello</h1>
    </v-tab-item>
    <v-tab-item :key="2" value="2">
      <h1 v-if="tab === 2">Hade</h1>
    </v-tab-item>
    <v-tab-item :key="3" value="3">
      <h1 v-if="tab === 3">Per</h1>
    </v-tab-item>
  </v-card>
</template>

<script setup>
import axios from "axios";
import { userStore } from "@/stores/user";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const user = userStore();
const userData = user.getUser;
const tools = ref({});
const route = useRoute();
const data = () => ({
  tab: 1,
});
console.log(data);

onMounted(() => {
  axios({
    method: "GET",
    url: `http://localhost:5050/api/tool/getTool/filter/lenderEmail/match/${user.getUser.email}`,
  })
    .then((response) => {
      console.log(response.data);
      tools.value = response.data.tool;
      console.log(tools.value.name);
    })
    .catch((error) => {
      console.error(error);
    });
});
const currentRoute = route;
console.log(currentRoute);
</script>

<style>
h1 {
  font-size: 32px;
  font-weight: bold;
}

v-card {
  margin-bottom: 20px;
}

.v-tabs__item {
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
