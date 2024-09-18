<template>
    <div v-if="loading" class="d-flex justify-center align-center fill-height">
        <div class="mx-auto text-center">
            <v-progress-linear
              indeterminate
              :width="15"
              color="primary"
              size="50"
            ></v-progress-linear>
            <v-img
                src="@/assets/img/first/javier-logo-color.png"
                width="200"
                height="100"
                cover
                class="mx-auto"
            ></v-img>
            <v-progress-linear
              indeterminate
              :width="15"
              color="primary"
              size="50"
            ></v-progress-linear>
        </div>
    </div>

    <template v-else>
        <NavbarComponent />
        <div>
            <router-view />
        </div>
    </template>
</template>
  
<script>
  
    import { defineAsyncComponent } from 'vue';

    export default {
        name: 'MyWebLayout',
        data() {
            return {
                loading: true,
            };
        },
        components: {
            NavbarComponent: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/myWeb/components/NavbarComponent.vue'))
        },
        mounted() {
            document.title = 'Welcome | Javier';
            this.loading = false; 
        }
    }

</script>

<style>

</style>


