<template>
    
    <v-toolbar :elevation="8" :color="colorGenral" class="add-fixed" >
        <v-app-bar-nav-icon
            @click.stop="drawer = !drawer" />
        
        <v-spacer></v-spacer>
        <v-btn :elevation="4" icon="mdi-home-circle-outline" color="primary" :to="{name: 'home'}"> </v-btn>
        <v-spacer></v-spacer>

        <v-btn icon="mdi-whatsapp" color="success" href="https://wa.link/3qy8q1" target="_blank"> </v-btn>
    </v-toolbar>

    <v-navigation-drawer
        v-model="drawer"
        :color="colorGenral"
      >

        <v-card
            :color="colorGenral"
            class="mx-auto text-center"
            max-width="344"
            :to="{name: 'home-my-web'}"
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
            <router-link class="is-active" :to="{name: 'home-my-web'}">
                <v-list-item active-color="primary" prepend-icon="mdi-view-dashboard" title="Inicio" value="home-my-web"> </v-list-item>
            </router-link>
            <router-link class="is-active" :to="{name: 'know-me-my-web'}">
                <v-list-item active-color="primary" prepend-icon="mdi-account-heart" title="Conóceme" value="know-me-my-web" />
            </router-link>
            <router-link class="is-active" :to="{name: 'service-my-web'}">
                <v-list-item active-color="primary" prepend-icon="mdi-wrench" title="Servicios" value="service-my-web" />
            </router-link>
            <router-link class="is-active" :to="{name: 'portfolio-my-web'}">
                <v-list-item active-color="primary" prepend-icon="mdi-briefcase-outline" title="Portafolio" value="portfolio-my-web" />
            </router-link>
            <router-link class="is-active" :to="{name: 'certificate-my-web'}">
                <v-list-item active-color="primary" prepend-icon="mdi-certificate-outline" title="Certificados" value="certificate-my-web" />
            </router-link>
            <router-link class="is-active" :to="{name: 'contact-my-web'}">
                <v-list-item active-color="primary" prepend-icon="mdi-email-edit-outline" title="Contáctame" value="contact-my-web" />
            </router-link>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
            return {
                drawer: null,
                colorGenral: 'white'
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