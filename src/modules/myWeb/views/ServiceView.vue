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
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                cover
              >
                <v-card-title>APLICACIONES WEB</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                "Impulsa tu negocio con aplicaciones web <br>personalizadas y de alto rendimiento"
              </v-card-subtitle>

              <v-card-text>
                <div>Desarrollo aplicaciones web adaptadas a tus necesidades, diseñadas para brindar una experiencia de usuario inigualable. Desde soluciones interactivas hasta plataformas seguras y escalables, mis aplicaciones están optimizadas para funcionar perfectamente en cualquier navegador y dispositivo. ¡Transforma tu visión en una realidad digital!</div>
              </v-card-text>

              <v-card-text>
                <v-btn
                      rounded="pill"
                      color="primary"
                      :to="{name: 'contact-my-web'}"
                      class="mt-1"
                  >
                    Contáctame
                      <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                  </v-btn>
              </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" class="text-center mb-4">
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              cover
            >
              <v-card-title>PÁGINAS WEB</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              "Haz que tu marca brille en Internet con <br> una página web impactante y funcional"
            </v-card-subtitle>

            <v-card-text>
              <div>Diseño y desarrollo de sitios web que no solo capturan la esencia de tu negocio, sino que también aseguran una experiencia excepcional para tus visitantes. Desde un diseño atractivo hasta una optimización impecable para SEO y dispositivos móviles, hago que tu página sea el escaparate ideal para captar clientes.</div>
            </v-card-text>

            <v-card-text>
              <v-btn
                    rounded="pill"
                    color="primary"
                    :to="{name: 'contact-my-web'}"
                    class="mt-1"
                >
                  Contáctame
                    <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" class="text-center mb-4">
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              cover
            >
              <v-card-title>APIs</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              "Conecta tu negocio con el mundo mediante <br> APIs  seguras y de alto rendimiento"
            </v-card-subtitle>

            <v-card-text>
              <div>Desarrollo APIs robustas y bien documentadas que permiten integrar aplicaciones, automatizar procesos y conectar tus sistemas de manera eficiente y segura. Abre nuevas posibilidades de negocio con una API diseñada para crecer contigo.</div>
            </v-card-text>

            <v-card-text>
              <v-btn
                    rounded="pill"
                    color="primary"
                    :to="{name: 'contact-my-web'}"
                    class="mt-1"
                >
                  Contáctame
                    <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="4" class="text-center mb-4">
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              cover
            >
              <v-card-title>ASESORÍA TECNOLÓGICA</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              "Acompañamiento y estrategia digital <br> para alcanzar tus objetivos"
            </v-card-subtitle>

            <v-card-text>
              <div>Te ofrezco un servicio de consultoría personalizado, orientado a comprender tus necesidades y guiarte en la elección de tecnologías, estrategias y planes de desarrollo que mejor se adapten a tu negocio. Desde la planificación de proyectos hasta la selección de herramientas, estoy aquí para ayudarte a maximizar el valor de tus inversiones digitales.</div>
            </v-card-text>

            <v-card-text>
              <v-btn
                    rounded="pill"
                    color="primary"
                    :to="{name: 'contact-my-web'}"
                    class="mt-1"
                >
                  Contáctame
                    <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                </v-btn>
            </v-card-text>
          </v-card>
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