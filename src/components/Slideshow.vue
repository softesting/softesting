<template>

<v-icon v-text="'$vuetify.icons.arrow-left'"></v-icon>

</template>
<script>
import Slide from "./Slide"

export default {
    name: "Slideshow",
    props: {
        images: Array
    },
    computed: {
      platform () {
        return '$vuetify.icons.' + this.user.platform
      }
    }
};
</script>

<style scoped>

    .slides-wraper
    {
        min-height: 300px;
        position: relative;
    }

    .slides-prev,
    .slides-next{
        position: absolute;
        top: 50%;

        transform: translateY(-50%)
    }
    .slides-prev{
        left: 0;
    }
    .slides-next{
        right: 0;
    }

</style>
