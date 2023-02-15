<template>
  <h1>{{ title }}</h1>
  <div class="card">
   <div style="width:400px;height:130px;margin-top:20px;border-style: dotted;" >
   <br>
    <span>Firstname: {{firstName}}</span> <br>
    <span>email: {{email}}</span> <br>
    <span>Password: {{password}}</span> <br>

    </div><br><br>
     <label> Enter Firstname </label><br>
     <input type="text" v-model="search" style="font-size:20px;border-radius:10px;" placeholder=" Firstname ..."> <br> <br>
     <label> Enter email </label><br>
     <input type="text" v-model="search" style="font-size:20px;border-radius:10px;" placeholder=" Lastname ..."> <br> <br>
     <label> Enter password </label><br>
     <input type="text" v-model="search" style="font-size:20px;border-radius:10px;" placeholder=" Lastname ..."> <br> <br>
     <br> <br> <br>
     <button class="submit-button" @click="addUser">Add User</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            users: [],
            firstName:"",
            email:"",
            password:"",
        }
    },
    async mounted() {
    const response = await axios.get("../../api/routes/login");
    this.users = response.data;
  },
  methods: {
    async addUser(e) {
      e.preventDefault();
      console.log("Skjer det noe her mon tro");
      const response = await axios.post("../../api/routes/login", {
        firstName: this.firstName,
        email: this.email,
        password: this.password
      });
      this.users.push(response.data);
      this.firstName = "";
      this.email = "";
      this.password = "";
    },
    async removeTodo(item, i) {
      await axios.delete("api/todoList/" + item._id);
      this.todos.splice(i, 1);
    },
  }

}
</script>

<style>

</style>