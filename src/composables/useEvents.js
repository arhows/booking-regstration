import { ref } from "vue";

const BASE_URL = "http://localhost:3001";

const events = ref([]);
const eventLoading = ref(false);
const isErrorEvents = ref("");

const bookings = ref([]);
const bookingLoading = ref(false);
const isErrorBooking = ref("");

export default function useEvents() {
  const fetchEvents = async () => {
    try {
      isErrorEvents.value = "";
      eventLoading.value = true;
      const res = await fetch(`${BASE_URL}/events`);

      if (!res.ok) {
        throw new Error("Error to fetching events");
      }
      events.value = await res.json();
    } catch (error) {
      isErrorEvents.value = error;
    } finally {
      eventLoading.value = false;
    }
  };

  const fetchBookings = async () => {
    try {
      isErrorBooking.value = "";
      bookingLoading.value = true;
      const res = await fetch(`${BASE_URL}/bookings`);

      if (!res.ok) {
        throw new Error("Error to fetching bookings");
      }
      bookings.value = await res.json();
    } catch (error) {
      isErrorBooking.value = error;
    } finally {
      bookingLoading.value = false;
    }
  };

  const findBookById = (id) => {
    return bookings.value.findIndex((b) => b.id == id);
  };

  const eventoJaRegistrado = (eventId) => {
    return bookings.value.findIndex((b) => b.eventId == eventId);
  };

  const postBooking = async (payload) => {
    const newBook = {
      id: Date.now().toString(),
      userId: 1,
      eventId: payload.id,
      eventTitle: payload.title,
      status: "pending",
    };

    let eventIndex = eventoJaRegistrado(newBook.eventId);

    if (eventIndex >= 0) {
      alert("Evento ja registrado");
      return;
    }

    bookings.value.push(newBook);

    try {
      const res = await fetch(`${BASE_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newBook, status: "finished" }),
      });

      if (!res.ok) {
        throw new Error("Error to post booking");
      }
      const data = await res.json();

      const index = findBookById(newBook.id);

      bookings.value[index] = { ...data };
    } catch (error) {
      const bookIndex = findBookById(newBook.id);
      bookings.value.splice(bookIndex, 1);
    }
  };

  const cancelBooking = async (id) => {
    const index = findBookById(id);
    const originalBooking = bookings.value[index];

    bookings.value.splice(index, 1);

    try {
      const res = await fetch(`${BASE_URL}/bookings/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Error ao cancelar o booking");
      }
    } catch (error) {
      bookings.value.splice(index, 0, originalBooking);
    }
  };

  return {
    eventLoading,
    events,
    bookings,
    bookingLoading,
    fetchEvents,
    fetchBookings,
    postBooking,
    cancelBooking,
  };
}
