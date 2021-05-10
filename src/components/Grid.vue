<template>
  <div class="container">
    <div class="box1">1</div>
    <div class="box2">2</div>
    <div class="box3">3</div>
    <div class="box4">4</div>
    <div class="box5">5</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { sort } from '../util';

export default defineComponent({
  setup() {
    const arr = [5, 7, 2, 3, 1, 6, 2];
    sort(arr);
    console.log(arr);
    // Promise.resolve().then(() => {
    //   console.log(0);
    //   return Promise.resolve(4);
    // }).then((res) => {
    //   console.log(res);
    // });

    // Promise.resolve().then(() => {
    //   console.log(1);
    // }).then(() => {
    //   console.log(2);
    // }).then(() => {
    //   console.log(3);
    // })
    //   .then(() => {
    //     console.log(5);
    //   })
    //   .then(() => {
    //     console.log(6);
    //   });
  },
});
</script>
<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(3, 1fr); */
    grid-auto-rows: 100px;
    background: rgb(214, 99, 99);
    column-gap: 2em;
    /* grid-auto-rows: minmax(100px, auto); */
  }
  .box1 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .box2 {
    grid-column-start: 1;
    grid-row-start: 2;
    grid-row-end: 5;
  }
</style>
