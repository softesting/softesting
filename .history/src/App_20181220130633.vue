<template>
  <v-app light>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{title}}</span>
        <span class="font-weight-light body-2">{{subtitle}}</span>

      </v-toolbar-title>
      <v-spacer></v-spacer>

            <Navi />
    </v-toolbar>

    <v-content>

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
  data () {
    return {
      title: "Vuetify",
      subtitle: "MATERIAL DESIGN"
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

