<template>
  <div style="transform: rotate(-20deg);" class="pt-15">
    <v-progress-linear
      indeterminate
      color="yellow-darken-2"
    ></v-progress-linear>
    <br>
    <v-progress-linear
      indeterminate
      color="green"
    ></v-progress-linear>
    <br>
    <v-progress-linear
      indeterminate
      color="teal"
    ></v-progress-linear>
    <br>
    <v-progress-linear
      indeterminate
      color="cyan"
    ></v-progress-linear>
  </div>
  <v-container style="padding-top: 40px;">
    <v-row justify="space-around">
      <v-col>
      </v-col>
      <v-col class="py-10">
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Un minuto a la vez ...
            </div>
  
            <v-timeline density="compact" align="start">
              <v-timeline-item
                dot-color="deep-purple-lighten-1"
                icon="mdi-account-star"
                fill-dot
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <v-btn
                      variant="outlined"
                      color="primary"
                      :to="{name: 'home-my-web'}"
                    >
                      Página principal
                      <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item
                dot-color="deep-purple-lighten-1"
                icon="mdi-currency-usd"
                fill-dot
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <v-btn
                      variant="outlined"
                      color="primary"
                      :to="{name: 'home-finance'}"
                    >
                      Finanzas
                      <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-col>
        <v-col>
        </v-col>
    </v-row>
  </v-container>
  <div style="transform: rotate(20deg);">
    <v-progress-linear
      indeterminate
      reverse
      color="yellow-darken-2"
    ></v-progress-linear>
    <br>
    <v-progress-linear
      indeterminate
      reverse
      color="green"
    ></v-progress-linear>
    <br>
    <v-progress-linear
      indeterminate
      reverse
      color="teal"
    ></v-progress-linear>
    <br>
    <v-progress-linear
      indeterminate
      reverse
      color="cyan"
    ></v-progress-linear>
  </div>
</template>

<script>

export default {
  name: 'HomeWeb'
}
</script>
