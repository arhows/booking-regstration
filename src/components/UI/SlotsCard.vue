<script setup>
import RoundedCard from "./RoundedCard.vue";
</script>

<template>
  <RoundedCard>
    <div class="header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </RoundedCard>
</template>

<style scoped>
.header,
.body,
.footer {
  padding: 0.3em;
}

.header {
  border-bottom: 1px solid #ccc;
}

.footer {
  border-top: 1px solid #ccc;
}
</style>
