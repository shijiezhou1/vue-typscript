<template>
  <div class="about">
    <HelloAbout />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloAbout from '@/components/about/HelloAbout.ts';

@Component({
  components: {
    HelloAbout,
  },
})
export default class About extends Vue {}
</script>