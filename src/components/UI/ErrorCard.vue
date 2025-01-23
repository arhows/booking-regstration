<template>
  <RoundedCard>
    <div class="message">
      <slot></slot>
    </div>
    <div class="btn-retry">
      <Button variant="solid" v-if="retry" @click="retry">Try again</Button>
    </div>
  </RoundedCard>
</template>

<script setup>
import Button from "./Button.vue";
import RoundedCard from "./RoundedCard.vue";

defineProps({
  retry: {
    type: Function,
    required: false,
  },
});
</script>

<style scoped>
.message {
  color: crimson;
  text-align: center;
  padding: 2em;
}

.btn-retry {
  margin: 1.2em 0;
  text-align: center;
}
</style>
