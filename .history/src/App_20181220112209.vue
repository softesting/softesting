<template>
  <v-app light>




    <v-content>
      <Navi />
      <HelloWorld/>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Navi from './components/Navi'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navi
  },

}
</script>
<style lang="scss" scoped>

</style>

