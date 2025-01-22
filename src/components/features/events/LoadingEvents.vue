<template>
  <RoundedCard>
    <div class="card animation-pulse">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar-2"></div>
      <div class="bar-btn"></div>
    </div>
  </RoundedCard>
</template>

<script setup>
import RoundedCard from "../../UI/RoundedCard.vue";
</script>

<style scoped>
.card {
  padding: 0.4em;
}

.bar,
.bar-2 {
  width: 80%;
  height: 1.2em;
  background-color: hsl(0, 0%, 80%);
  border-radius: 10px;
  margin: 0.5rem 0;
}

.bar-2 {
  height: 3.9rem;
  width: 100%;
}

.bar-btn {
  width: 35%;
  height: 2rem;
  background-color: hsl(0, 0%, 80%);
  margin-left: auto;
  border-radius: 10px;
  margin-top: 1rem;
}
</style>
