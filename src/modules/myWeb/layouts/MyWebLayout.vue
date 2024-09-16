<template>
    
    <!---<v-progress-circular indeterminate></v-progress-circular> -->

    <NavbarComponent />
    <div>
        <router-view />
    </div>
</template>
  
<script>
  
    import { defineAsyncComponent } from 'vue';

    export default {
        name: 'MyWebLayout',
        components: {
            NavbarComponent: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/myWeb/components/NavbarComponent.vue'))
        },
        mounted() {
            document.title = 'Welcome | Javier'
        }
    }

</script>

<style>

</style>


