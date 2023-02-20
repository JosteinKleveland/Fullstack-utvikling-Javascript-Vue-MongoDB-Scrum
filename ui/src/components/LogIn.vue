<template>
  <v-sheet width="300" class="mx-auto mt-10">
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="email"
        :rules="[(v) => !!v || 'Field is required']"
        label="Email"
        type="email"
        id="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[(v) => !!v || 'Field is required']"
        label="Password"
        type="password"
        id="password"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Login</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");

const submitForm = () => {
  const formData = {
    email: email.value,
    password: password.value,
  };

  const axiosConfig = {
    method: "post",
    url: "http://localhost:5050/api/user/signUp",
    data: formData,
  };

  axios(axiosConfig)
    .then((response) => {
      console.log("Response: ", response.data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};
</script>
