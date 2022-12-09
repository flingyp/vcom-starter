<template>
  <div id="app">
    <YButton>Default</YButton>
    <YButton type="primary">Primary</YButton>
    <YButton type="success">Success</YButton>
    <YButton type="warning">Warning</YButton>
    <YButton type="info">Info</YButton>
    <YButton type="danger">Danger</YButton>
  </div>
</template>

<script setup lang="ts">
  import { YButton } from 'core'
</script>

<style scoped>
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .y-button {
    margin: 4px 4px;
  }
</style>
