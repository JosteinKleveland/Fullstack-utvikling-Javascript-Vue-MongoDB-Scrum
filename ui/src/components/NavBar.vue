<template>
  <div>
    <v-toolbar color="#ADD8E6">
      <v-toolbar-title>Tool Time</v-toolbar-title>

      <v-spacer></v-spacer>
      <RouterLink to="/" style="text-decoration: none">
        <v-btn id="test" flat value="home" color="black">Home</v-btn>
      </RouterLink>
      <RouterLink to="/signin" style="text-decoration: none">
        <v-btn v-if="!user.getLoggedIn" flat value="signin" color="black"
          >Sign In</v-btn
        >
      </RouterLink>
      <RouterLink to="/signup" style="text-decoration: none">
        <v-btn v-if="!user.getLoggedIn" flat value="signup" color="black"
          >Sign Up</v-btn
        >
      </RouterLink>
      <RouterLink to="/profile" style="text-decoration: none">
        <v-btn v-if="user.getLoggedIn" flat value="signup" color="black"
          >Profile</v-btn
        >
      </RouterLink>
      <RouterLink to="/regTool" style="text-decoration: none">
        <v-btn flat value="regTool" color="black">Register Tool</v-btn>
      </RouterLink>
      <RouterLink to="/" style="text-decoration: none">
        <v-btn
          flat
          value="logOut"
          color="black"
          v-if="user.getLoggedIn"
          @click="user.$reset()"
          >Log Out</v-btn
        ></RouterLink
      >
    </v-toolbar>
  </div>
</template>

<script setup>
import { userStore } from "@/stores/user";
const user = userStore();
</script>

<style scoped></style>
