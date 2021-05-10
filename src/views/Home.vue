<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <component :is="curCom"></component> -->
    <div>
      <async-com v-if="curCom === 'AsyncCom'"></async-com>
      <grid v-if="curCom === 'AsyncGrid'"></grid>
    </div>
    <!-- <div v-if="curCom === 'AsyncGrid'">
      <async-grid></async-grid>
    </div> -->
    <button @click="handleClick('AsyncGrid')">grid</button>
    <button @click.prevent="handleClick('AsyncCom')">async-com</button>
    <input type="radio" @click.self.prevent="">
    <!-- <grid></grid> -->
    <!-- <async-com></async-com> -->
    <teleport-demo></teleport-demo>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Grid from '@/components/Grid.vue';
import TeleportDemo from '@/components/TeleportDemo.vue';
import { defineAsyncComponent } from 'vue';

@Options({
  components: {
    HelloWorld,
    Grid,
    AsyncGrid: defineAsyncComponent(() => import('../components/Grid.vue')),
    AsyncCom: defineAsyncComponent(() => import('../components/AsyncCom.vue')),
    TeleportDemo,
  },
})
export default class Home extends Vue {
  curCom = '';

  handleClick(cur: string) {
    this.curCom = cur;
  }
}
</script>
