<script setup>
import { computed, ref, watch, watchEffect } from "vue";
import Button from "../../UI/Button.vue";
import SlotsCard from "../../UI/SlotsCard.vue";

const props = defineProps({
  book: {
    type: Object,
  },
});

defineEmits(["cancel-booking"]);

const classStatus = ref("pending");
const disable = ref(false);

watchEffect(() => {
  let val = props.book?.status === "finished" ? "finished" : "pending";
  classStatus.value = val;

  disable.value = val === "pending" ? true : false;
});
</script>

<template>
  <SlotsCard>
    <template #default>
      <div class="card">
        <div class="body">
          <p>{{ book.eventTitle }}</p>
          <p :class="`status ${classStatus}`">{{ book.status }}</p>
        </div>
        <Button
          :disable="disable"
          variant="danger"
          @click="$emit('cancel-booking')"
          >Cancel</Button
        >
      </div>
    </template>
  </SlotsCard>
</template>

<style scoped>
.slot-card {
  border-bottom: none;
  padding: 0.2rm;
}
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.body .status {
  padding: 0.4em 0.8em;
  font-size: 0.8rem;
  border-radius: 10px;
  font-weight: 500;
}

.body .status.pending {
  background-color: hsl(16, 100%, 85%);
  color: hsl(16, 100%, 10%);
}

.body .status.finished {
  background-color: hsl(180, 100%, 85%);
  color: hsl(180, 100%, 10%);
}
</style>
