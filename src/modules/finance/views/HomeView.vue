<template>
  <v-lazy
    :min-height="200"
    :options="{'threshold':0.5}"
    transition="fade-transition"
  >
    <div class="background-image d-flex align-center justify-center">
        <v-container >
          <v-row class="text-center">
            <v-col>
              <div class="margin-b-30">
                <div class="text-h3 font-weight-bold">
                  VIDA FINANCIERA
                </div>
                <div class="animated-text text-h6"> 
                  {{ animatedText }}|<v-icon size="x-small" class="pb-1" icon="mdi-pencil-outline"></v-icon>
                </div>
                <v-card-text class="my-2">
                  En este módulo hemos elaborado aplicaciones con la finalidad de desarrollar capacidades financieras que te permitan tomar decisiones. <br> Espero te ayuden 
                  <v-icon icon="mdi-thumb-up" color="green-lighten-3"></v-icon>
                </v-card-text>
                <div class="text-center">
                  <v-progress-circular
                    :rotate="360"
                    :size="110"
                    :width="10"
                    :model-value="value"
                    color="light-green-darken-1"
                  >
                    {{ value }} <br>
                    Ahorro
                  </v-progress-circular>
  
                  <v-progress-circular
                    :rotate="-90"
                    :size="110"
                    :width="10"
                    :model-value="value"
                    color="yellow-darken-2"
                    class="mx-1"
                  >
                    {{ value }} <br>
                    Inversiones
                  </v-progress-circular>
  
                  <v-progress-circular
                    :rotate="90"
                    :size="110"
                    :width="10"
                    :model-value="value"
                    color="light-blue-darken-1"
                  >
                    {{ value }} <br>
                    Metas
                  </v-progress-circular>
                </div>
              </div>
              <v-btn
                    rounded="pill"
                    color="primary"
                    :to="{name: 'manage-money-finance'}"
                    class="mt-15 margin-b-30"
                >
                    Empieza ahora 
                    <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                </v-btn>
            </v-col>
          </v-row>
        </v-container>
    </div>

  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      words: ['FINANZAS' , 'ADMINISTRACIÓN', 'EDUCACIÓN', 'FUTURO'],
      animatedText: "",
      interval: {},
      value: 0,
    }
  },
  mounted() {
    let i = 0;
    let indexWord = 0;
    let currentWord = this.words[indexWord];
    setInterval(() => {
      this.animatedText += currentWord[i];
      i++;
      if(this.animatedText.length > i){
        this.animatedText = ''
        i = 0
        indexWord++
        currentWord = this.words[indexWord];

        if(this.words.length - 1 <= indexWord){
          indexWord = -1
        }
      }
    }, 300);

    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)

  },
  beforeUnmount () {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
  .background-image {
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-size: cover;
    background-position: center center;
    height: 100vh;
    filter: brightness(0.9);
  }

  .align-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .margin-b-30{
    margin-bottom: 30px;
  }

  .animated-text {
    animation: escribiendo 0.3s steps(40) infinite;
  }

  @keyframes escribiendo {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
</style>