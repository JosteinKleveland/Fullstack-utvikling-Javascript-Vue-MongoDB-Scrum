<template>
  <v-sheet width="300" class="mx-auto mt-10">
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="firstName"
        :rules="[(v) => !!v || 'Field is required']"
        label="First Name"
        type="text"
        id="firstName"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :rules="[(v) => !!v || 'Field is required']"
        label="Last Name"
        type="text"
        id="lastName"
      ></v-text-field>
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
      <v-text-field
        v-model="phone"
        :rules="[(v) => !!v || 'Field is required']"
        label="Phone"
        type="tel"
        id="phone"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Login</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "@/router";
import swal from "sweetalert2";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const phone = ref("");

const submitForm = () => {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
  };

  const axiosConfig = {
    method: "post",
    url: "http://localhost:5050/api/user/signUp",
    data: formData,
  };

  axios(axiosConfig)
    .then((response) => {
      if (response.data.success) {
        console.log("Response: ", response.data);
        swal.fire({
          icon: "success",
          title: "Congratulation",
          text: "You have successfully signed up!",
          width: "400px",
          heightAuto: "100px",
        });
        router.push({ name: "home" });
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};
</script>
