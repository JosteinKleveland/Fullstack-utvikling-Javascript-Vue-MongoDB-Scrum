<template>
  <v-sheet width="300" class="mx-auto mt-10">
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="toolField"
        :rules="[(v) => !!v || 'Field is required',
                 (v) => (v && v.length > 1) || 'Name must be at least 2 characters',
                 (v) => (v && v.length < 33) || 'Name must be less than 33 characters']"
        label="Tool Name"
        type="text"
        id="toolField"
        required
      ></v-text-field>
      <v-text-field
        v-model="priceField"
        :rules="[(v) => !!v || 'Field is required']"
        label="Price"
        type="number"
        id="priceField"
      ></v-text-field>
      <v-text-field
        v-model="categoryField"
        :rules="[(v) => !!v || 'Field is required',
                 (v) => (v && v.length > 1) || 'Category must be at least 2 characters',
                 (v) => (v && v.length < 33) || 'Category must be less than 33 characters']"
        label="Category"
        type="text"
        id="categoryField"
      ></v-text-field>
      <v-text-field
        v-model="descriptionField"
        :rules="[(v) => !!v || 'Field is required',
                 (v) => (v && v.length > 1) || 'Description must be at least 2 characters',
                 (v) => (v && v.length < 101) || 'Description must be less than 33 characters']"
        label="Description"
        type="text"
        id="descriptionField"
      ></v-text-field>
      <v-file-input
        label="Upload picture"
        id="imageField"
        prepend-icon="mdi-camera"
      ></v-file-input>
      <v-btn type="submit" block class="mt-2">Register</v-btn>
    </v-form>
  </v-sheet>
</template>


<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "@/router";
import swal from "sweetalert2";

const toolField = ref("");
const priceField = ref("");
const categoryField = ref("");
const descriptionField = ref("");
const imageField = ref("");

const submitForm = () => {
  const formData = {
    toolField: toolField.value,
    priceField: priceField.value,
    categoryField: categoryField.value,
    descriptionField: descriptionField.value,
    imageField: imageField.value,
  };

  const axiosConfig = {
    method: "post",
    url: "http://localhost:5050/api/user/regTool",
    data: formData,
  };

  axios(axiosConfig)
    .then((response) => {
      if (response.data.success) {
        console.log("Response: ", response.data);
        swal.fire({
          icon: "success",
          title: "Congratulation",
          text: "You have successfully registered your tool!",
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

