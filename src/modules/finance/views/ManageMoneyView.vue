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
            ADMINISTRAR DINERO
          </h1>
          <p class="text-medium-emphasis">
            "Divide y vencerás"
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

      <v-card >
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="12" class=" mb-4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="ma-2"
                v-bind="props"
                variant="flat"
              >
                <v-card  
                  width="300"
                  class="mx-auto px-2 py-2"
                  variant="flat">
                  <v-form ref="form" lazy-validation>
                    <v-text-field
                        :counter="6"
                        :maxlength="6"
                        :rules="validations.fieldNumber"
                        class="mb-5"
                        color="primary"
                        label="Salario bruto"
                        v-model.number="salario"
                        variant="outlined"
                        ></v-text-field>

                    <v-row>
                      <v-col>
                        <v-text-field
                            :counter="2"
                            :maxlength="2"
                            :rules="[...validations.fieldNumber, ...validations.fieldNumberDate]"
                            class="mb-5"
                            color="primary"
                            label="Días laborables"
                            v-model.number="diasTrabajadas"
                            variant="outlined"
                            ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                            :counter="2"
                            :maxlength="2"
                            :rules="[...validations.fieldNumber, ...validations.fieldNumberHour]"
                            class="mb-5"
                            color="primary"
                            label="Horas/Día"
                            v-model.number="horasPorDia"
                            variant="outlined"
                            ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-text-field
                        :counter="4"
                        :maxlength="4"
                        :rules="[...validations.fieldNumber, ...validations.numberLess100]"
                        class="mb-5"
                        color="primary"
                        label="AFP(%)"
                        v-model.number="afpPorcentaje"
                        variant="outlined"
                        ></v-text-field>
                    
                    <v-text-field
                        :counter="4"
                        :maxlength="4"
                        :rules="[...validations.fieldNumber, ...validations.numberLess100]"
                        class="mb-5"
                        color="primary"
                        label="Seguro(%)"
                        v-model.number="seguroPorcentaje"
                        variant="outlined"
                        ></v-text-field>
  
                    <div class="d-flex flex-row-reverse mb-6">
                      <v-btn
                          class="me-1"
                          type="submit"
                          rounded="xl"
                          variant="outlined"
                          color="primary"
                          @click.prevent="validate()"
                          >
                          Calcular
                      </v-btn>
                    </div>
                  </v-form>
                </v-card>

                <v-card>
                  <v-row>
                    <v-col>
                      <div class="text-center py-4 px-1">
                        <v-chip
                          class="ma-2"
                          color="blue-grey-darken-2"
                          text-color="white"
                          append-icon="mdi-cash-multiple"
                        >
                          Salario neto:  S/{{ salarioNeto }}
                        </v-chip>
  
                        <v-chip
                          class="ma-2"
                          color="blue-grey-darken-2"
                          text-color="white"
                          append-icon="mdi-bank"
                        >
                          AFP:  S/{{ afpSoles }}
                        </v-chip>
  
                        <v-chip
                          class="ma-2"
                          color="blue-grey-darken-2"
                          text-color="white"
                          append-icon="mdi-doctor"
                        >
                          Seguro:  S/{{ seguroSoles }}
                        </v-chip>

                        <v-chip
                          class="ma-2"
                          color="blue-grey-darken-2"
                          text-color="white"
                          append-icon="mdi-calendar-range"
                        >
                          Por día:  S/{{ diaTrabajadaSoles }}
                        </v-chip>

                        <v-chip
                          class="ma-2"
                          color="blue-grey-darken-2"
                          text-color="white"
                          append-icon="mdi-timer-sand"
                        >
                          Por hora:  S/{{ horaPorDiaSoles }}
                        </v-chip>
                      </div>
                    </v-col>
                  </v-row>
                  <v-alert
                    border="start"
                    variant="tonal"
                    closable
                    close-label="Close Alert"
                    color="blue"
                    type="info"
                    text="Los resultados se calcularán con e Salario neto"
                  ></v-alert>
                </v-card>
                
                <div v-if="datos.ahorro.monto !== 0">
                  <p class="text-center text-h6 font-weight-bold pt-10"> División de ingreso neto </p>
                  <v-card-text v-for="({name, monto, porcentaje, color, gasto1, gasto2}, index) in datos" :key="index">
                    <v-list-item>
                      <p class="text-caption">
                        {{ name  }} ({{ porcentaje  }}%) 
                      </p>
                      <template v-slot:append>
                        <v-badge
                          :color="isHovering ? 'green' : 'green-darken-2'"
                          :content="castMoney(monto)"
                          inline
                        ></v-badge>
                      </template>
                    </v-list-item>
                    <v-progress-linear
                      :model-value="porcentaje"
                      :color="color"
                      height="10"
                      striped
                    ></v-progress-linear>
  
                   
                    <v-card v-if="index == 'gastos'">
                      <v-card-text>
                        <v-list-item>
                          <p class="text-caption">
                            Pagar deudas (60%)
                          </p>
                          <template v-slot:append>
                            <v-badge
                              color="green"
                              :content="castMoney(gasto1)"
                              inline
                            ></v-badge>
                          </template>
                        </v-list-item>
                        <v-progress-linear
                          :model-value="60"
                          color="deep-orange"
                          height="10"
                          striped
                        ></v-progress-linear>
                      </v-card-text>
                      <v-card-text>
                        <v-list-item>
                          <p class="text-caption">
                            Lo que quieras (40%)
                          </p>
                          <template v-slot:append>
                            <v-badge
                              color="green"
                              :content="castMoney(gasto2)"
                              inline
                            ></v-badge>
                          </template>
                        </v-list-item>
                        <v-progress-linear
                          :model-value="40"
                          color="deep-orange"
                          height="10"
                          striped
                        ></v-progress-linear>
                      </v-card-text>
                    </v-card>
                    
                  </v-card-text>
                </div>

              </v-card>
            </v-hover>
          </v-col>
          
          <v-col>
            <v-card-text v-if="datos.ahorro.monto !== 0" >
              <ChartComponent 
                title="Gráfica por meses"
                :data="data" 
                :options="options"/>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

    </v-container>

  </v-lazy>
</template>

<script>
import { mapState } from 'vuex'
import { defineAsyncComponent } from 'vue';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const $toast = useToast();

export default {
    data() {
      return {
        datos: {
          ahorro: {
            name: 'Ahorro',
            monto: 0,
            porcentaje: 30,
            color:'light-blue'
          },
          gastos : {
            name: 'Gastos',
            monto: 0,
            porcentaje: 60,
            color:'deep-orange',
            gasto1: 0,
            gasto2: 0
          },
          inversiones: {
            name: 'Inversiones',
            monto: 0,
            porcentaje: 10,
            color:'purple'
          },
        },
        salario: '',
        salarioNeto: 0,
        diasTrabajadas : 23,
        diaTrabajadaSoles: 0,
        horasPorDia: 8,
        horaPorDiaSoles: 0,
        afpPorcentaje: 10,
        afpSoles: 0,
        seguroPorcentaje: 1.9,
        seguroSoles: 0,
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'diciembre'],
          datasets: [
            { 
              label: 'Ahorro',
              backgroundColor: '#03a9f4',
              data: [],
              keyPrimary:'ahorro' 
            },
            { 
              label: 'Gastos',
              backgroundColor: '#ff5722',
              data: [],
              keyPrimary:'gastos'
            },
            { 
              label: 'Inversiones',
              backgroundColor: '#9c27b0',
              data: [],
              keyPrimary:'inversiones' 
            }
          ]
        },
        options: {
          responsive: true
        }
      }
    },
    computed: {
      ...mapState('financeStore', ['validations', 'isLoading'])
    },
    methods: {
      async validate(){
          let {valid} = await this.$refs.form.validate()
          if( parseFloat(this.afpPorcentaje) + parseFloat(this.seguroPorcentaje) >= 100 ){
            $toast.info('Suma de porcentaje AFP y Seguro, debe ser menor a 100%.');
            return
          }
          
          if(valid){
            // Calculate Sueldo neto, AFP y Seguro
            this.afpSoles = (this.salario * (this.afpPorcentaje / 100)).toFixed(2)
            this.seguroSoles = (this.salario * (this.seguroPorcentaje / 100)).toFixed(2)
            this.salarioNeto = (this.salario - ( parseFloat(this.afpSoles) + parseFloat(this.seguroSoles)) ).toFixed(2)

            // Calcular días y horas en soles
            this.diaTrabajadaSoles = (this.salario / this.diasTrabajadas).toFixed(2)
            this.horaPorDiaSoles = (this.diaTrabajadaSoles / this.horasPorDia).toFixed(2)
            
            // Calculate revenue split
            this.datos.ahorro.monto = (this.salarioNeto * (this.datos.ahorro.porcentaje / 100)).toFixed(2)

            this.datos.gastos.monto = (this.salarioNeto * (this.datos.gastos.porcentaje / 100)).toFixed(2)
            this.datos.gastos.gasto1 = (this.datos.gastos.monto * (60 / 100)).toFixed(2)
            this.datos.gastos.gasto2 = (this.datos.gastos.monto * (40 / 100)).toFixed(2)

            this.datos.inversiones.monto = (this.salarioNeto * (this.datos.inversiones.porcentaje / 100)).toFixed(2)


            // Graphic format
            let arrResponse = []
            for(let clave in this.datos){
              for (let i = 1; i <= 12; i++) {
                arrResponse.push(i * this. datos[clave].monto)
              }

              const response = this.data.datasets.find(function(item) {
                return item.keyPrimary === clave;
              });

              response.data = arrResponse;

              arrResponse = []
            }
          }
      },
      resetForm(){
          this.salarioNeto = ''
      },
      castMoney(money){
        return "S/"+ money
      }
    },
    components: {
      ChartComponent: defineAsyncComponent( () => import('./../components/ChartComponent.vue' ) )
    }
  }
</script>

<style scoped>

</style>