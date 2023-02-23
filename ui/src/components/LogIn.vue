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
        :rules="[(v) => (v && 0 !== v.length >= 10) || 'Minimun length of 8']"
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
import router from "@/router";
import Swal from "sweetalert2";

const email = ref("");
const password = ref("");

const submitForm = () => {
  const formData = {
    email: email.value,
    password: password.value,
  };

  const axiosConfig = {
    method: "post",
    url: "http://localhost:5050/api/user/signIn",
    data: formData,
  };

  axios(axiosConfig)
    .then((response) => {
      if (response.data.success) {
        console.log("Response: ", response.data.user._id);
        router.push({ name: "homeLogin", params: {"_id":response.data.user._id }});
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message,
        });
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User not found",
        width: "300px",
        heightAuto: "70px",
      });
    });
};
</script>

<style scoped></style>
