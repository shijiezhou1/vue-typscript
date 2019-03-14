<template>
  <div class="about">
    <HelloHome />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloHome from '@/components/about/HelloAbout.ts';

@Component({
  components: {
    HelloHome,
  },
})
export default class About extends Vue {}
</script>