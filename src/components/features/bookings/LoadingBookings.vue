<template>
  <RoundedCard>
    <div class="card animation-pulse">
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.bar,
.bar-2,
.bar-btn {
  width: 40%;
  height: 1.6em;
  background-color: hsl(0, 0%, 80%);
  border-radius: 10px;
  margin: 0.5rem 0;
}

.bar-2 {
  width: 15%;
}

.bar-btn {
  width: 25%;
  margin-left: auto;
  border-radius: 10px;
}
</style>
