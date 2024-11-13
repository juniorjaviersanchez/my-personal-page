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
                <v-card-title class="mb-5">
                  <p class="text-subtitle-1 font-weight-black">
                    Sobre mí
                  </p>
                  <v-sheet
                    tile
                    height="4"
                    :width="isHovering ? 70 : 40"
                    color="primary"
                  ></v-sheet>
                </v-card-title>
    
                <v-card-text class="text-justify">
                  ¡Hola! Soy Javier Sánchez, desarrollador web apasionado por la programación y la creación de soluciones innovadoras. Disfruto enseñando, compartiendo conocimientos y explorando el mundo de las tecnologías digitales.
                </v-card-text>
                <v-card-text class="text-justify">
                  A lo largo de mi carrera, he tenido la oportunidad de trabajar en distintos proyectos y empresas en Colombia y Perú:
                  <ul class="ml-1 mt-2" style="list-style-type: none;">
                    <li><v-chip>📍 COLOMBIA</v-chip> <br> Actualmente, desempeño el cargo de MD. FULLSTACK DEVELOPER en SUPLOS, donde he desarrollado varios módulos, incluyendo:</li>
                    <li>
                      <ul class="ml-1" style="list-style-type: none;">
                        <li class="mt-1"><v-icon icon="mdi-vuetify"></v-icon> Módulos: Proveedores, Ofertas y Solfin.</li>
                        <li><v-icon icon="mdi-vuetify"></v-icon>Funciones: Desarrollo de migraciones, factories, seeders, modelos, controladores y endpoints; creación de tests y pruebas unitarias con phpUnit; asignación de roles y permisos; creación de scripts de sincronización y tareas programadas (crons) en Linux; automatización de correos; pruebas de API con POSTMAN; generación de reportes en Excel y PDF con filtros; gestión de subida de archivos con AWS; implementación de la metodología Araru; y desarrollo de API RUES.</li>
                      </ul>
                    </li>
                    <li class="mt-5"><v-chip>📍 Perú</v-chip></li>
                    <li>
                      <ul class="ml-1" style="list-style-type: none;">
                        <li><v-icon icon="mdi-vuetify"></v-icon>En Satélite Perú, desarrollé software para la administración de soluciones de localización y monitoreo integral de vehículos, flotas, activos y personas. También trabajé como desarrollador en DEVC Tecnologías, la Municipalidad de Chiclayo, e Hidronorte SRL. Además, colaboré en el CPIS de la Universidad Nacional Pedro Ruiz Gallo y en el área de soporte técnico de Tecnologías de la Información en el Hospital Regional de Lambayeque.</li>
                      </ul>
                    </li>
                  </ul>
                </v-card-text>
                <v-card-text class="text-justify">
                  Me motiva estar al día con las nuevas tecnologías y ayudar a los demás a aprovechar al máximo el poder de internet.
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
                <v-card-text>
                  <p class="text-subtitle-1 font-weight-black">
                    Habilidades
                  </p>
                </v-card-text>

                <v-card-text>
                  <v-list-item>
                    <p class="text-caption">
                      FRONT-END [Html5, Css3, Javascript, Ajax, Tailwindcss,Vue, vuetify]
                    </p>
                    <template v-slot:append>
                      <v-icon
                        color="success"
                        icon="mdi-check-circle"
                        size="large"
                      ></v-icon>
                    </template>
                  </v-list-item>
                  <v-progress-linear
                    model-value="100"
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
                      <v-icon
                        color="success"
                        icon="mdi-check-circle"
                        size="large"
                      ></v-icon>
                    </template>
                  </v-list-item>
                  <v-progress-linear
                    model-value="100"
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
                      <v-icon
                        color="success"
                        icon="mdi-check-circle"
                        size="large"
                      ></v-icon>
                    </template>
                  </v-list-item>
                  <v-progress-linear
                    model-value="100"
                    color="light-blue"
                    height="10"
                    striped
                  ></v-progress-linear>
                </v-card-text>

                <v-card-title>
                  <v-row>
                    <v-col cols="12" sm="12" md="7">
                      <v-card-text>
                        <div class="text-subtitle-1 font-weight-black ms-1 mb-2">
                          Más Información
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
          message: `Ingeniero de Sistemas`,
          color: 'deep-purple-lighten-1',
        },
        {
          icon: 'mdi-briefcase-account',
          message: `Hablo español e inglés técnico`,
          color: 'deep-purple-lighten-1',
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