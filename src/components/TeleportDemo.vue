<template>
  <div>
    <teleport to="body">
      <p>{{name}}</p>
    </teleport>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const name = ref('111');

    return {
      name,
    };
  },
});
</script>
