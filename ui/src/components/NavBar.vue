<template>
  <div>
    <v-toolbar color="#FF5F00">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <RouterLink to="/" style="text-decoration: none"> 
        <v-toolbar-title style="color: black">Tool Time</v-toolbar-title>
      </RouterLink>

      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" color="black">Dark/Light Mode</v-btn>
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

<script>

import { useTheme } from 'vuetify'

export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => { 
        theme.global.name.value = theme.global.current.value.dark ? 'puLightMode' : 'puDarkMode'
      }
    }
  }
}
</script>

<style scoped></style>
