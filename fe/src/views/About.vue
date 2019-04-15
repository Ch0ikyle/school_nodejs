<template>
  <v-container grid-list-md text-xs-center>
   <v-layout row wrap>
     <v-flex xs12>

      <v-textarea
      v-model="text"
      ></v-textarea>
     </v-flex xs12>
    </v-layout row wrap>
  </v-container grid-list-md text-xs-center>
</template>

<<script>
export default {
  data(){
    return {
      text : 'debug'
    }
  },
  mounted(){
    const a = {a:1, b:2 }
    this.text = JSON.stringify(this.$vuetify.breakpoint)
  }
}
</script>