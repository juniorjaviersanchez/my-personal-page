<template>
    <v-col cols="12" sm="12" md="4" class="text-center mb-4">
        <v-hover v-slot="{ isHovering, props }">
            <v-card
                class="ma-2"
                max-width="344"
                v-bind="props"
            >
                <v-img
                :src="img"
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
                        {{ title }}
                    </v-card-text>
                    </div>
                </v-expand-transition>
                </v-img>

                <v-card-text> 
                <v-btn
                    rounded="pill"
                    color="primary"
                    size="small"
                    :href="url"
                    target="_blank"
                >
                    Ver 
                    <v-icon icon="mdi-cursor-default-click-outline"></v-icon>
                </v-btn>
                </v-card-text>
            </v-card>
        </v-hover>
    </v-col>




</template>

<script>
export default {
    props: {
        title:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        },
        img:{
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>