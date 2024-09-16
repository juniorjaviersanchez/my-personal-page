<template>
    
    <v-toolbar :color="colorGenralNav" class="add-fixed" >
        <v-app-bar-nav-icon
            @click.stop="drawer = !drawer" />
        <v-spacer></v-spacer>
        <v-btn :elevation="4" icon="mdi-home-circle-outline" color="primary" :to="{name: 'home'}"> </v-btn>
        <!-- <v-spacer></v-spacer>
        <v-btn icon="mdi-whatsapp" color="success" href="https://wa.link/3qy8q1" target="_blank"> </v-btn> -->
    </v-toolbar>

    <v-navigation-drawer
        v-model="drawer"
        :color="colorGenral"
      >

        <v-card
            :color="colorGenral"
            class="mx-auto text-center"
            max-width="344"
            :to="{name: 'home-finance'}"
        >
            <v-img
            src="@/assets/img/first/javier-logo-color.png"
            max-width="150"
            max-height="100"
            cover
            class="mx-auto"
            ></v-img>
        </v-card>
       

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <router-link class="is-active" :to="{name: 'home-finance'}">
                <v-list-item class="text-white" prepend-icon="mdi-view-dashboard" title="Inicio" value="home-finance"> </v-list-item>
            </router-link>
            <router-link class="is-active" :to="{name: 'manage-money-finance'}">
                <v-list-item class="text-white" prepend-icon="mdi-currency-usd" title="Administrar dinero" value="manage-money-finance"> </v-list-item>
            </router-link>
            <router-link class="is-active" :to="{name: 'manage-buy-finance'}">
                <v-list-item class="text-white" prepend-icon="mdi-clock-check-outline" title="Duración de compras" value="manage-buy-finance"> </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
            return {
                drawer: null,
                colorGenral: 'blue-grey-lighten-2',
                colorGenralNav: 'white'
            }
    }
}
</script>

<style scoped>
    .is-active {
        color: rgb(25, 25, 25);
        text-decoration: none; 
    }

    .add-fixed {
        top : 0;
        position: sticky !important;
        z-index: 1;
    }
</style>