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
        <v-col cols="12" sm="12" md="4" class="text-center mb-4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="ma-2"
              max-width="344"
              v-bind="props"
            >
              <v-img
                src="@/assets/img/portfolio/quien-es-ese-pokemon-vue.webp"
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
                    Un juego donde podrás demostrar todo lo que sabes de pockemon.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-img>

              <v-card-title>
                ¿Quién es este pokémon?
              </v-card-title>
  
              <v-card-text>
                <v-btn
                  rounded="pill"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                >
                  Vue
                </v-btn> 
                <v-btn
                  rounded="pill"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                >
                  2023
                </v-btn> 
                <v-btn
                  rounded="pill"
                  color="primary"
                  size="small"
                  href="https://game-vue-quien-es-ese-pokemon.netlify.app/"
                  target="_blank"
                >
                  Ver 
                  <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                </v-btn>
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
              <v-img
                src="@/assets/img/portfolio/spartanbeer.webp"
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
                    Una página de venta de cerveza artesanal 100% peruana.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-img>

              <v-card-title>
                Spartan Beer
              </v-card-title>
  
              <v-card-text>
                <v-btn
                  rounded="pill"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                >
                  HTML, CSS
                </v-btn> 
                <v-btn
                  rounded="pill"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                >
                  2023
                </v-btn> 
                <v-btn
                  rounded="pill"
                  color="primary"
                  href="https://www.spartanbeer.pe/"
                  target="_blank"
                  size="small"
                >
                  Ver
                  <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                </v-btn>
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
              <v-img
                src="@/assets/img/portfolio/porject_ceconp.webp"
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
                    Una página informativa de abogados.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-img>

              <v-card-title>
                Ceconp
              </v-card-title>
  
              <v-card-text>
                <v-btn
                  rounded="pill"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                >
                  HTML, CSS
                </v-btn> 
                <v-btn
                  rounded="pill"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                >
                  2022
                </v-btn> 
                <v-btn
                  rounded="pill"
                  color="primary"
                  size="small"
                  href="https://ceconp.com/"
                  target="_blank"
                >
                  Ver
                  <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                </v-btn>
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
              <v-img
                src="@/assets/img/portfolio/cpis-sistema.webp"
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
                    Un sistema de mátricula, pagos y contabilidad de cursos.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-img>

              <v-card-title>
                CPIS - FICSA
              </v-card-title>
  
              <v-card-text>
                <v-btn
                  rounded="pill"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                >
                  Laravel
                </v-btn> 
                <v-btn
                  rounded="pill"
                  variant="outlined"
                  color="primary"
                  size="x-small"
                >
                  2022
                </v-btn> 
                <v-btn
                  rounded="pill"
                  color="primary"
                  size="small"
                  href="https://cpisficsa.com/"
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

}
</script>

<style scoped>

</style>