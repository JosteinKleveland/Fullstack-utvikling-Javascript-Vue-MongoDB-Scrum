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
        max-size="50"
        label="Upload picture"
        prepend-icon="mdi-camera"
        id="imageField"
      ></v-file-input>
      <v-btn type="submit" block class="mt-2">Register</v-btn>
    </v-form>
  </v-sheet>
  <img :src="buffer">
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
//const selectedFile = ref("");

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
  const reader = new FileReader();
  let imageUrl;
  // Set up onload callback to handle file contents
  reader.onload = function(event) {
    imageUrl = event.target.result;
    const formData = {
    name: toolField.value,
    price: priceField.value,
    category: categoryField.value,
    description: descriptionField.value,
    image: imageUrl,
    lenderEmail: user.getUser.email,

  };
  console.log(formData);
  console.log(document.getElementById("imageField").files[0].name);
  const axiosConfig = {
    method: "post",
    url: "http://localhost:5050/api/tool/regTool",
    data: formData,
    //ChatGPT sa at når vi sender ulike typer data må vi vise til dette i headeren
    /*headers: {
      'Content-Type': 'multipart/form-data' 
    }*/
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

  // Read file as ArrayBuffer (which can be converted to a Buffer object if needed)
  reader.readAsDataURL(document.getElementById("imageField").files[0]);
};
</script>

