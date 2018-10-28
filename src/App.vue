<template>
  <v-app id="app">
    <slideshow :images="images" />
    <navi/>
    <hello-world/>
  </v-app>
</template>

<script>
import Slideshow from './components/Slideshow'
import Navi from './components/Navi'
import HelloWorld from './components/HelloWorld'

  export default {
    name: "App",
    components:{
      Slideshow,
      Navi,
      HelloWorld
    },
    data: () => ({
      title: "Softesting.pl",
      images: [
                      {
                          "url" : "https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/3b301989a9240a2e26f13a30190bb150.png"
                      }
                  ]
    }),
    props: {
      source: String
    }
  };
</script>

