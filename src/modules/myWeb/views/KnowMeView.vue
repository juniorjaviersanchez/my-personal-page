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
            CONÓCEME
          </h1>

          <v-sheet
              tile
              height="4"
              width="40"
              color="primary"
              class="mx-auto"
            ></v-sheet>
        </v-col>
      </v-row>

      <v-card >
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="6" class=" mb-4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="ma-2"
                v-bind="props"
                variant="flat"
              >
                <v-card-title>
                  <v-row>
                    <v-col cols="12" sm="12" md="7">
                      <v-card-text>
                        <div class="text-subtitle-1 font-weight-black ms-1 mb-2">
                          JUNIOR JAVIER SANCHEZ
                        </div>

                        <v-timeline density="compact" align="start">
                          <v-timeline-item
                            v-for="item in datos"
                            :key="item.time"
                            :dot-color="item.color"
                            :icon="item.icon"
                            size="x-small"
                          >
                            <div class="mb-1">
                              <div class="font-weight-normal">
                                {{ item.message }}
                              </div>
                            </div>
                          </v-timeline-item>
                        </v-timeline>
                      </v-card-text>

                    </v-col>
                    <v-col cols="12" sm="12" md="5" class="d-flex align-center justify-center">
                      <v-card
                        class="rounded-circle mb-5"
                        color="primary"
                        :variant="isHovering ? 'tonal' : 'outlined'"
                        :elevation="isHovering ? 10 : 2">
                        <v-img
                          :width="300"
                          aspect-ratio="16/9"
                          cover
                          src="@/assets/img/second/testimonial-2.webp"
                        ></v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-title>
    
                <v-card-text>
                  <p class="text-subtitle-1 font-weight-black">
                    Habilidades
                  </p>
                </v-card-text>

                <v-card-text>
                  <v-list-item>
                    <p class="text-caption">
                      FRONT-END [Html5, Css3, Javascript, Ajax, Tailwindcss,Vue]
                    </p>
                    <template v-slot:append>
                      <v-badge
                        color="green"
                        content="80%"
                        inline
                      ></v-badge>
                    </template>
                  </v-list-item>
                  <v-progress-linear
                    model-value="80"
                    color="light-blue"
                    height="10"
                    striped
                  ></v-progress-linear>
                </v-card-text>

                <v-card-text>
                  <v-list-item>
                    <p class="text-caption">
                      BACK-END [PHP, Laravel, Java, Spring boot]
                    </p>
                    <template v-slot:append>
                      <v-badge
                        color="green"
                        content="95%"
                        inline
                      ></v-badge>
                    </template>
                  </v-list-item>
                  <v-progress-linear
                    model-value="95"
                    color="light-blue"
                    height="10"
                    striped
                  ></v-progress-linear>
                </v-card-text>

                <v-card-text>
                  <v-list-item>
                    <p class="text-caption">
                      Base de Datos [MySQL - PostgreSQL]
                    </p>
                    <template v-slot:append>
                      <v-badge
                        color="green"
                        content="95%"
                        inline
                      ></v-badge>
                    </template>
                  </v-list-item>
                  <v-progress-linear
                    model-value="95"
                    color="light-blue"
                    height="10"
                    striped
                  ></v-progress-linear>
                </v-card-text>


              </v-card>
            </v-hover>
          </v-col>

          <v-col cols="12" sm="12" md="6" class=" mb-4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="ma-2"
                v-bind="props"
                variant="flat"
              >
                <v-card-title class="mb-5">
                  <p class="text-subtitle-1 font-weight-black">
                    Sobre mi
                  </p>
                  <v-sheet
                    tile
                    height="4"
                    :width="isHovering ? 70 : 40"
                    color="primary"
                  ></v-sheet>
                </v-card-title>
    
                <v-card-text>
                  Hola, soy Javier Sánchez desarrollador Web, me encanta programar, crear cosas, enseñar a los demás y todo lo relacionado con Internet y las nuevas tecnologías.
                </v-card-text>
                <v-card-text>
                  Tengo experiencia en diferentes campos como Desarrollador de software en SUPLOS(Colombia), Satélite Perú, la municipalidad de Chiclayo, en Hidronorte SRL y otras empresas. También en soporte técnico en el área de Tecnología de Información del Hospital regional de Lambayeque, en la Universidad Nacional Pedro Ruiz Gallo.
                </v-card-text>

                <v-card-text>
                  <v-icon icon="mdi-vuetify"></v-icon>
                  Ingeniero de Sistemas
                </v-card-text>
                <v-card-text>
                  <v-icon icon="mdi-vuetify"></v-icon>
                  Hablo el idioma español e inglés(Técnico)
                </v-card-text>

              </v-card>
            </v-hover>
          </v-col>
  
        </v-row>
      </v-card>


    </v-container>

  </v-lazy>
</template>

<script>
export default {
    data: () => ({
      datos: [
        {
          icon: 'mdi-briefcase-account',
          message: `Desarrollador FULLSTACK`,
          color: 'deep-purple-lighten-1',
        },
        {
          icon: 'mdi-cellphone',
          message: '+51 927594391',
          color: 'green',
        },
        {
          icon: 'mdi-email',
          message: 'Juniorjaviersanchezz@gmail.com',
          color: 'deep-purple-lighten-1',
        },
      ],
    }),
  }
</script>

<style scoped>

</style>