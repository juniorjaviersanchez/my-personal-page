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
            SERVICIOS
          </h1>
          <p class="text-medium-emphasis">
            "Si tu negocio no está en internet no existe" Bill Gates
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
        <v-col cols="12" sm="12" md="4" class="text-center mb-4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="ma-2"
              max-width="344"
              v-bind="props"
            >
             <v-card
                class="pa-6 rounded-circle d-inline-block my-5"
                bg-color="red-lighten-1"
                transition="scroll-x-transition"
                color="primary"
                :variant="isHovering ? 'tonal' : 'outlined'"
                :elevation="isHovering ? 10 : 2">
                <v-icon size="100" icon="mdi-xml"></v-icon>
              </v-card>

              <v-card-title>
                DESARROLLO WEB
              </v-card-title>
  
              <v-card-text>
                Construye una sólida presencia online con una aplicación web automatizando procesos para llegar al éxito.
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="12" md="4" class="text-center mb-4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="ma-2"
              max-width="344"
              v-bind="props"
            >
             <v-card
                class="pa-6 rounded-circle d-inline-block my-5"
                bg-color="red-lighten-1"
                transition="scroll-x-transition"
                color="primary"
                :variant="isHovering ? 'tonal' : 'outlined'"
                :elevation="isHovering ? 10 : 2">
                <v-icon size="100" icon="mdi-laptop"></v-icon>
              </v-card>

              <v-card-title>
                DISEÑO WEB
              </v-card-title>
  
              <v-card-text>
                Páginas totalmente únicas y atractivas que se adaptan al tipo del diseño de negocio o marca personal.
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="12" md="4" class="text-center mb-4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="ma-2"
              max-width="344"
              v-bind="props"
            >
             <v-card
                class="pa-6 rounded-circle d-inline-block my-5"
                bg-color="red-lighten-1"
                transition="scroll-x-transition"
                color="primary"
                :variant="isHovering ? 'tonal' : 'outlined'"
                :elevation="isHovering ? 10 : 2">
                <v-icon size="100" icon="mdi-cellphone"></v-icon>
              </v-card>

              <v-card-title>
                DISEÑO RESPONSIVO
              </v-card-title>
  
              <v-card-text>
                Tu sitio lucirá genial en cualquier dispositivo móvil, tablets o computadora. Yo te ayudare en el proceso.
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

}
</script>

<style scoped>

</style>