<template>
 <form action="">
   <input type="text">First name<br>
   <input type="text">Last name<br>
   <input type="text">Email<br>
   <input type="text">Phone-number<br>
   <input type="text">Password<br>
   <input type="submit">
 </form>
</template>

<script>
export default {
  name: 'LogIn',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
