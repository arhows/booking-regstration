<script setup>
import { onMounted } from "vue";
import useEvents from "../../../composables/useEvents";
import Event from "./Event.vue";
import LoadingEvents from "./LoadingEvents.vue";

const { events, eventLoading, fetchEvents, postBooking } = useEvents();

onMounted(() => {
  fetchEvents();
});
</script>

<template>
  <section>
    <h2>All Events</h2>
    <div class="cards">
      <template v-if="!eventLoading">
        <Event
          v-for="event in events"
          :key="event.id"
          :event="event"
          @register-event="postBooking(event)"
        />
      </template>
      <template v-else>
        <LoadingEvents v-for="i in 4" :key="i" />
      </template>
    </div>
  </section>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
