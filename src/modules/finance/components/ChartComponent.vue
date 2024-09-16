<template>
    <div class="py-4">
        <p class="text-center text-h6 font-weight-bold">{{ title }}</p>
        <Bar :data="chartData" :options="options" />
    </div>
</template>

<script >
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    data() {
            return {
                chartData : this.data
            }
    },
    props: {
        title: {
            type: String,
            default: 'Gráfica'
        },
        data: {
            type : Object, 
            required: true
        },
        options:{
            type: Object,
            default: () => {}
        }
    },
    components: {
        Bar
    },
    watch: {
        data: {
            handler(){
                this.chartData = {
                        labels: [...this.data.labels],
                        datasets: [
                            ...this.data.datasets
                        ]
                    }
            },
            deep: true
        }
    }

}
</script>

<style>

</style>