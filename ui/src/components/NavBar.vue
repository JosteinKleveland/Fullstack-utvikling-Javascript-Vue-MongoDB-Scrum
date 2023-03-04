<template>
  <div>
    <v-toolbar color="#ADD8E6">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Tool Time</v-toolbar-title>

      <v-spacer></v-spacer>
      <RouterLink to="/" style="text-decoration: none">
        <v-btn id="test" flat value="home" color="black">Home</v-btn>
      </RouterLink>
      <RouterLink to="/signin" style="text-decoration: none">
        <v-btn flat value="signin" color="black">Sign In</v-btn>
      </RouterLink>
      <RouterLink to="/signup" style="text-decoration: none">
        <v-btn flat value="signup" color="black">Sign Up</v-btn>
      </RouterLink>
      <RouterLink to="/regTool" style="text-decoration: none">
        <v-btn flat value="regTool" color="black">Register Tool</v-btn>
      </RouterLink>
    </v-toolbar>
  </div>
</template>

<script setup></script>

<style scoped></style>
