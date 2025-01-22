<script setup>
import { onMounted } from "vue";
import Booking from "./Booking.vue";
import LoadingBookings from "./LoadingBookings.vue";
import useEvents from "../../../composables/useEvents";

const { bookings, bookingLoading, fetchBookings, cancelBooking } = useEvents();

onMounted(() => {
  fetchBookings();
});
</script>

<template>
  <section>
    <h2>My Bookings</h2>
    <div class="book-grid">
      <template v-if="!bookingLoading">
        <Booking
          v-for="book in bookings"
          :key="book.id"
          :book="book"
          @cancel-booking="cancelBooking(book.id)"
        />
      </template>
      <template v-else>
        <LoadingBookings v-for="i in 4" :key="i" />
      </template>
    </div>
  </section>
</template>

<style scoped>
.book-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
</style>
