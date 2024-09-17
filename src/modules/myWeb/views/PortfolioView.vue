<template>
  <v-lazy
    :min-height="200"
    :options="{'threshold':0.5}"
    transition="fade-transition"
  >
    <v-container>
      <v-row no-gutters class="mb-10">
        <v-col cols="12" class="text-center">
          <h1 class="pa-2 mt-2">
            PORTAFOLIO
          </h1>
          <p class="text-medium-emphasis">
            "Si buscas resultados distintos no hagas siempre lo mismo" Albert Einstein
          </p>
          <v-sheet
              tile
              height="4"
              width="40"
              color="primary"
              class="mx-auto"
            ></v-sheet>
        </v-col>
      </v-row>

      <v-row no-gutters>

        <v-col cols="12" sm="12" md="4" class="text-center mb-4" v-for="(project, index) in projects" :key="index">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="ma-2"
              max-width="344"
              v-bind="props"
            >
              <v-img
                :src="project.image"
                height="200px"
                cover
                :elevation="isHovering ? 10 : 2"
                :variant="[isHovering ? 'tonal' : 'outlined']"
              >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-deep-purple-lighten-3 v-card--reveal text-h2 "
                  style="height: 100%;"
                >
                  <v-card-text>
                    {{ project.description  }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-img>

              <v-card-title>
                {{ project.title }}
              </v-card-title>
  
              <v-card-text>

                <v-btn
                  rounded="pill"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                  v-for="(tag, tagIndex) in project.tags"
                  :key="tagIndex"
                >
                {{ tag }}
                </v-btn> 
            
                <v-btn
                  rounded="pill"
                  color="primary"
                  size="small"
                  :href="project.url"
                  target="_blank"
                >
                  Ver 
                  <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        
      </v-row>
    </v-container>

  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Conversor de moneda',
          description: 'Este proyecto utiliza Vue.js para construir la interfaz de usuario, Vuetify para los componentes estilizados, y Axios para realizar peticiones a una API de tasas de cambio. Además, SweetAlert2 se emplea para mostrar alertas personalizadas.',
          image: require("@/assets/img/portfolio/project-currency-converter.webp"),
          url: 'https://javier-project-n1.netlify.app/',
          tags: ['Vue', 'Vuetify', 'Axios', '2024'],
        },
        {
          title: 'Piedra, papel o tijera',
          description: 'Este proyecto utiliza Vue.js para construir la interfaz de usuario, Vuetify para los componentes estilizados. Es un juego interactivo de Piedra, Papel o Tijera, donde los usuarios pueden competir contra la computadora.',
          image: require("@/assets/img/portfolio/rock-scissors-paper.webp"),
          url: 'https://javier-project-n2.netlify.app/',
          tags: ['Vue', 'Vuetify', '2024'],
        },
        {
          title: '¿Quién es este pokémon?',
          description: 'Un juego donde podrás demostrar todo lo que sabes de pockemon.',
          image: require("@/assets/img/portfolio/quien-es-ese-pokemon-vue.webp"),
          url: 'https://game-vue-quien-es-ese-pokemon.netlify.app/',
          tags: ['HTML', 'CSS', '2024'],
        },
        {
          title: 'Spartan Beer',
          description: 'Una página de venta de cerveza artesanal 100% peruana.',
          image: require("@/assets/img/portfolio/spartanbeer.webp"),
          url: '',
          tags: ['HTML', 'CSS', '2023'],
        },
        {
          title: 'Ceconp',
          description: 'Una página informativa de abogados.',
          image: require("@/assets/img/portfolio/porject_ceconp.webp"),
          url: 'https://ceconp.com/',
          tags: ['HTML', 'CSS', '2022'],
        },
        {
          title: 'CPIS - FICSA',
          description: 'Un sistema de mátricula, pagos y contabilidad de cursos.',
          image: require("@/assets/img/portfolio/cpis-sistema.webp"),
          url: 'https://cpisficsa.com/',
          tags: ['Laravel', 'CSS', 'TailwindCSS', '2022'],
        },
      ]
    };
  }
}
</script>

<style scoped>

</style>