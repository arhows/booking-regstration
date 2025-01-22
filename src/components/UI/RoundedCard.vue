<template>
  <div class="rounded-card">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.rounded-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 0.3em;
  box-shadow: 1px 1px 5px -3px rgba(0, 0, 0, 0.2);
}
</style>
