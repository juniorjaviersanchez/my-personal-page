<template>
  <PageMainComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import PageMainComponent from '../components/PageMainComponent.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    PageMainComponent,
  },
});
</script>
