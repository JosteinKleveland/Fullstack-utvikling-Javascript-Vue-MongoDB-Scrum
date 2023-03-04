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
    
      <v-btn type="submit" block class="mt-2">Register</v-btn>
    </v-form>
  </v-sheet>
</template>

