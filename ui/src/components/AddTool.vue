<template>
    <form action="">
      <input type="text" id="toolField">Tool name<br>
      <input type="text" id="priceField">Price<br>
      <input type="text" id="categoryField">Category/Type<br>
      <input type="text" id="descriptionField">Description<br>
      <input type="submit">
    </form>
   </template>
   
   <script>
   export default {
     name: 'AddTool',
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