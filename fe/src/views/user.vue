<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="u in users">
        {{u.name}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            users : []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/api/user').then((r) => {
            this.users = r.data.users
            console.log(r)
        }).catch((e) => {
            console.error(e.message)
        })
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
