<template>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{title}}</span>
        <span class="font-weight-light body-2">{{subtitle}}</span>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="www.softesting.pl" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    <ul>
        <li>list</li>
        <h2>test</h2>
    </ul>
</template>
<script>
export default {
    name: "Navi"
};
  data () {
    return {
      title: "Vuetify",
      subtitle: "MATERIAL DESIGN"
    }
  }
</script>