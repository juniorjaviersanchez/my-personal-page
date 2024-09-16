<template>

    <div v-if="isLoading" class="text-center pt-10">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>

  
    <v-lazy
      v-else
      :min-height="200"
      :options="{'threshold':0.5}"
      transition="fade-transition"
    >
      <v-container>
        <v-row no-gutters class="mb-10">
          <v-col cols="12" class="text-center">
            <h1 class="pa-2 mt-2">
              COTÁCTAME 
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
                      Dale, empecemos el proyecto !!!
                    </p>
                    <v-sheet
                      tile
                      height="4"
                      :width="isHovering ? 230 : 80"
                      color="primary"
                    ></v-sheet>
                  </v-card-title>

                    <v-form ref="form" lazy-validation>
                      <v-text-field
                          :counter="20"
                          :maxlength="20"
                          :rules="validations.fieldTrim"
                          class="mb-5"
                          color="primary"
                          label="Nombres"
                          v-model="name"
                          variant="outlined"
                          ></v-text-field>

                      <v-text-field
                          :counter="9"
                          :maxlength="9"
                          :rules="validations.fieldNumber"
                          class="mb-5"
                          color="primary"
                          label="Teléfono"
                          v-model.number="phone"
                          variant="outlined"
                          ></v-text-field>

                      <v-text-field
                          :counter="60"
                          :maxlength="60"
                          :rules="validations.emailRules"
                          class="mb-6"
                          color="primary"
                          label="E-mail"
                          placeholder="prueba@gmail.com"
                          type="email"
                          v-model="email"
                          variant="outlined"
                          ></v-text-field>
                        
                      <v-textarea 
                        :counter="200"
                        :maxlength="200"
                        :rules="validations.fieldTrim"
                        class="mb-5"
                        color="primary"
                        label="Mensaje"
                        v-model="message"
                        variant="outlined"
                        ></v-textarea>

                      <div class="d-flex flex-row-reverse mb-6">
                        <v-btn
                            rounded="xl"
                            variant="outlined"
                            color="red"
                            @click="resetForm"
                            >
                            Limpiar
                        </v-btn>
                        <v-btn
                            class="me-1"
                            type="submit"
                            rounded="xl"
                            variant="outlined"
                            color="primary"
                            @click.prevent="validate()"
                            >
                            Enviar
                        </v-btn>
                      </div>
                    </v-form>

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
                      Estemos en contacto
                    </p>
                    <v-sheet
                      tile
                      height="4"
                      :width="isHovering ? 140 : 80"
                      color="primary"
                    ></v-sheet>
                  </v-card-title>
      
                  <v-card-text>
                    Soy un desarrollador de software con cuatro años de experiencia en aplicaciones web. Busco colaborar en una posición como programador donde pueda demostrar mis habilidades
                  </v-card-text>

                  <div class="text-center">
                      <v-card
                        class="pa-2 rounded-circle d-inline-block my-4 mx-1"
                        href="https://pe.linkedin.com/in/junior-javier-s%C3%A1nchez-1556521a3?trk=people-guest_people_search-card"
                        target="_blank"
                        bg-color="red-lighten-1"
                        transition="scroll-x-transition"
                        color="primary"
                        variant="outlined"
                        elevation="5">
                        <v-icon  icon="mdi-linkedin"></v-icon>
                      </v-card>
                      <v-card
                        class="pa-2 rounded-circle d-inline-block my-4 mx-1"
                        href="https://www.instagram.com/juniorjavier_san/"
                        target="_blank"
                        bg-color="red-lighten-1"
                        transition="scroll-x-transition"
                        color="primary"
                        variant="outlined"
                        elevation="5">
                        <v-icon  icon="mdi-instagram"></v-icon>
                      </v-card>
                      <v-card
                        class="pa-2 rounded-circle d-inline-block my-4 mx-1"
                        href="https://www.facebook.com/profile.php?id=100006920680461&_rdc=2&_rdr"
                        target="_blank"
                        bg-color="red-lighten-1"
                        transition="scroll-x-transition"
                        color="primary"
                        variant="outlined"
                        elevation="5">
                        <v-icon  icon="mdi-facebook"></v-icon>
                      </v-card>
                     
                  </div>

                </v-card>
              </v-hover>
            </v-col>
    
          </v-row>
        </v-card>
  
  
      </v-container>
  

    </v-lazy>
  </template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data: () => ({
        name: '',
        email: '',
        message: '',
        phone: ''
    }),
    computed: {
      ...mapState('myWebStore', ['validations', 'isLoading'])
    },
    methods: {
      ...mapActions('myWebStore', ['sendEmail']),
      async validate(){
          let {valid} = await this.$refs.form.validate()
          if(valid){
              const templateParams = {
                  emailjs_name: this.name,
                  emailjs_email: this.email,
                  emailjs_message: this.message,
                  emailjs_phone: this.phone
              };

              let resultado = await this.sendEmail(templateParams)
              if(resultado){
                this.resetForm()
              }
              
          }
      },
      resetForm(){
          this.name = ''
          this.email = ''
          this.message = ''
          this.phone = ''
      }
    }
  }
</script>

<style>

</style>



    