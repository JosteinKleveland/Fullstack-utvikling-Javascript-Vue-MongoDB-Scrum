<template>
  <v-sheet width="300" class="mx-auto mt-10">
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="toolField"
        :rules="[(v) => !!v || 'Field is required']"
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
        :rules="[(v) => !!v || 'Field is required']"
        label="Category"
        type="text"
        id="categoryField"
      ></v-text-field>
      <v-text-field
        v-model="descriptionField"
        :rules="[(v) => !!v || 'Field is required']"
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
import { userStore } from "@/stores/user";



const user = userStore();
const toolField = ref("");
const priceField = ref("");
const categoryField = ref("");
const descriptionField = ref("");
const imageField = ref("");

// const imageAsString = fs.readFile(imageField.value);
// const binaryData = Buffer.from(imageAsString);

// const reader = new FileReader();
// reader.readAsArrayBuffer(imageField.value);
// const binaryData = reader.onload = () => {
//   return reader.result;
// };



// const bufferedData = new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = () => reject(new Error('Error reading file.'));
//         reader.readAsBinaryString(new Blob([imageField.value]));
//       });

const submitForm = () => {
  const formData = {
    name: toolField.value,
    price: priceField.value,
    category: categoryField.value,
    description: descriptionField.value,
    image: imageField.value,
    lenderEmail: user.getUser.email,

  };
  console.log(imageField.value);
  console.log(formData);
  console.log(user.getUser.email);


  const axiosConfig = {
    method: "post",
    url: "http://localhost:5050/api/tool/regTool",
    data: formData,
    //ChatGPT sa at når vi sender ulike typer data må vi vise til dette i headeren
    headers: {
      'Content-Type': 'multipart/form-data' 
    }
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

