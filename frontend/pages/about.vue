<template>
  <div class="container">
    <div class="row">
      <p class="jumbotron" style="font-size: 1.5em">{{ $t('about_project') }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // @ts-ignore
  head() {
    return {
      title: 'About FindJobs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place find jobs',
        },
      ],
    }
  },
})
</script>

<style>
</style>
