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
        name: 'FinanceLayout',
        components: {
            NavbarComponent: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/finance/components/NavbarComponent.vue'))
        },
        mounted() {
            document.title = 'Welcome | Finanzas'
        }
    }

</script>

<style>

</style>


