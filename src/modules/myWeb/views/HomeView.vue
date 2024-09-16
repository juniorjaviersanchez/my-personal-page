<template>
  <v-lazy
    :min-height="200"
    :options="{'threshold':0.5}"
    transition="fade-transition"
  >
    <div class="background-image text-white d-flex align-center justify-center">
        <v-container >
          <v-row class="text-center">
            <v-col>
              <div class="margin-50">
                <div class="text-h3 font-weight-bold">
                  Soy Junior Javier Sánchez
                </div>
                <div class="animated-text text-h6"> 
                  {{ animatedText }}|<v-icon size="x-small" class="pb-1" icon="mdi-pencil-outline"></v-icon>
                </div>
              </div>
              <v-btn
                    rounded="pill"
                    color="primary"
                    :to="{name: 'know-me-my-web'}"
                    class="mt-15"
                >
                    Más información
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
      words: ['DESARROLADOR WEB' , 'FRONTEND', 'BACKEND', 'FULLSTACK'],
      animatedText: ""
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
  }
}
</script>

<style scoped>
  .background-image {
    background-image: url('@/assets/img/second/intro-bg.webp');
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
  .margin-50{
    margin-bottom: 250px;
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