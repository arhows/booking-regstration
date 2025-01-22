<template>
  <SlotsCard class="event-card">
    <template #header>
      <h2 class="title">{{ event.title }}</h2>
    </template>
    <template #default>
      <p class="when">{{ event.when }}</p>
    </template>
    <template #footer>
      <p>
        {{ event.description }}
      </p>
      <div class="btn">
        <Button variant="solid" @click="$emit('register-event')"
          >Register</Button
        >
      </div>
    </template>
  </SlotsCard>
</template>

<script setup>
import Button from "../../UI/Button.vue";
import SlotsCard from "../../UI/SlotsCard.vue";

defineProps({
  event: {
    type: Object,
    required: true,
  },
});

defineEmits(["register-event"]);
</script>

<style scoped>
.btn {
  width: fit-content;
  margin-left: auto;
}

.event-card {
  padding: 1.3em;
}

.title,
.when {
  padding: 0.5em 0;
}
</style>
