<template>
  <div>{{msg}}</div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

const AsyncCom = defineComponent({
  setup() {
    console.log('setup');
    const msg = ref('good');
    onMounted(() => {
      console.log('mounted');
    });
    return {
      msg,
    };
  },
});
export default AsyncCom;
</script>
