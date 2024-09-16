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
            CERTIFICADOS
          </h1>
          <p class="text-medium-emphasis">
            "Sé el cambio que quieres ver en el mundo" Mahatma Gandhi
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
        <ItemCertificateComponent
          v-for="({id, title, url, img}) in certificates"
          :key="id"
          :title="title" 
          :url="url"
          :img="castPath(img)"/>
      </v-row>
    </v-container>

  </v-lazy>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    name: 'CertificateView',
    data() {
            return {
                certificates: [
                  {'id': 1, 'title': 'Curso Básico de JavaScript', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/1814-basico-javascript/diploma/detalle/', 'img' : 'curso_basico_de_javascript_junior_javier_sanchez.png'} ,
                  {'id': 2, 'title': 'Curso de PHP: Arreglos, Funciones y Estructuras de Control', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2794-php-arreglos-funciones/diploma/detalle/', 'img' : 'curso_php_arreglos_funciones_estructuras_junior_javier_sanchez.png'},
                  {'id': 3, 'title': 'Curso Práctico de SQL ', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2059-practico-sql/diploma/detalle/', 'img' : 'curso_practico_sql_junior_javier_sanchez.png'},
                  {'id': 4, 'title': 'Curso Básico de PHP: Instalación, Fundamentos y Operadores', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2646-php/diploma/detalle/', 'img' : 'curso_php_instalacion_fundamentos_operadores_sanchez.png'},
                  {'id': 5, 'title': 'Curso Práctico de PHP', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2516-php-practico/diploma/detalle/', 'img' : 'curso_practico_php_junior_javier_sanchez.png'},
                  {'id': 6, 'title': 'Curso de Backend con Node.js: API REST con Express.js', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2485-backend-nodejs/diploma/detalle/', 'img' : 'curso_backend_con_node_js_api_rest_express_junior_javier_sanchez.png'},
                  {'id': 7, 'title': 'Curso de Fundamentos de Angular', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2478-angular/diploma/detalle/', 'img' : 'curso_fundamentos_angular_junior_javier_sanchez.png'},
                  {'id': 8, 'title': 'Curso de Introducción a Educación Financiera', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2166-intro-finanzas/diploma/detalle/', 'img' : 'curso_educacion_financiera_junior_javier_sanchez.png'},
                  {'id': 9, 'title': 'Curso de Introducción a la Terminal y Línea de Comandos', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2292-terminal/diploma/detalle/', 'img' : 'curso_terminales_linea_comandos_junior_javier_sanchez.png'},
                  {'id': 10, 'title': 'Curso de API REST con Larave', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2185-laravel-api/diploma/detalle/', 'img' : 'curso_api_rest_con_laravel_junior_javier_sanchez.png'},
                  {'id': 11, 'title': 'Curso de PHP con Composer', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2024-php-composer/diploma/detalle/', 'img' : 'curso_php_con_composer_junior_javier_sanchez.png'},
                  {'id': 12, 'title': 'Curso de Java SE Orientado a Objetos', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/1629-java-oop/diploma/detalle/', 'img' : 'curso_java_orientado_objetos_junior_javier_sanchez.png'},
                  {'id': 13, 'title': 'Curso de Fundamentos de Electricidad y Electrónica', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/1609-electronica/diploma/detalle/', 'img' : 'curso_electricidad_y_electronica_junior_javier_sanchez.png'},
                  {'id': 14, 'title': 'Curso de Introducción a Java SE', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/1631-java-basico/diploma/detalle/', 'img' : 'curso_java_se_junior_javier_sanchez.png'},
                  {'id': 15, 'title': 'Curso de E-Commerce para Implementar Pagos Electrónicos', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2217-pagos-electronicos/diploma/detalle/', 'img' : 'curso_pagos_electronicos_para_tu_negocio_junior_javier_sanchez.png'},
                  {'id': 16, 'title': 'Curso de Python Intermedio: Comprehensions, Lambdas y Manejo de Errores', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2255-python-intermedio/diploma/detalle/', 'img' : 'curso_comprehensions_lambdas_manejo_de_errores_junior_javier_sanchez.png'},
                  {'id': 17, 'title': 'Curso de Análisis de Negocios para Ciencia de Datos', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2069-negocios-data-science/diploma/detalle/', 'img' : 'curso_analisis_de_negocios_para_ciencia_datos_junior_javier_sanchez.png'},
                  {'id': 18, 'title': 'Curso de Diseño Web con CSS Grid y Flexbox', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2229-flexbox-css-grid/diploma/detalle/', 'img' : 'curso_diseno_web_con_css_grid_y_flexbox_junior_javier_sanchez.png'},
                  {'id': 19, 'title': 'Curso de Estrategias para Aprender en Línea Efectivamente', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/1608-aprender-2019/diploma/detalle/', 'img' : 'curso_aprender_en_linea_efectivamente_junior_javier_sanchez.png'},
                  {'id': 20, 'title': 'Curso de Fundamentos de Matemáticas', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/1393-fundamentos-matematicas/diploma/detalle/', 'img' : 'curso_fundamentos_matematicos_junior_javier_sanchez.png'},
                  {'id': 21, 'title': 'Curso de Introducción a Laravel 8', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/2182-intro-laravel/diploma/detalle/', 'img' : 'curso_introduccion_a_laravel_junior_javier_sanchez.png'},
                  {'id': 22, 'title': 'Curso de Introducción a los Algoritmos de Ordenamiento', 'url': 'https://platzi.com/p/juniorjaviersanchez/curso/1832-ordenamiento/diploma/detalle/', 'img' : 'curso_algoritmos_de_ordenamiento_junior_javier_sanchez.png'}
                ]
            }
    },
    components: {
        ItemCertificateComponent: defineAsyncComponent(() => import(/* webpackChunkName: "ItemCertificateComponent" */ '@/modules/myWeb/components/ItemCertificateComponent.vue'))
    },
    methods: {
      castPath(url){
        return require(`@/assets/img/certificate/${url}`)
      }
    }
}
</script>

<style scoped>

</style>