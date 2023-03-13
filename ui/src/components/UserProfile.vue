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
    <v-tabs v-model="tab">
      <v-tab class="v-tabs__item" :value="1">Annonser</v-tab>
      <v-tab class="v-tabs__item" :value="2">Historikk</v-tab>
      <v-tab class="v-tabs__item" :value="3">Vurderinger</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 6" :key="n" :value="n">
        <v-container fluid>
          <v-row>
            <v-col v-for="i in 3" :key="i" cols="4" md="3"> </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import { userStore } from "@/stores/user";
const user = userStore();
const userData = user.getUser;
console.log(userData);
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
