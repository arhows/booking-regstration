<script setup>
import { computed } from "vue";
import Button from "../../UI/Button.vue";
import SlotsCard from "../../UI/SlotsCard.vue";
import { LoaderCircle, Check } from "lucide-vue-next";

const props = defineProps({
  book: {
    type: Object,
  },
  status: String,
});

defineEmits(["cancel-booking"]);

const pending = computed(() => props.status === "pending");
const disabled = computed(() => pending.value);
const listCss = computed(() => (pending.value ? "pending" : "finished"));
const Icon = computed(() => (pending.value ? LoaderCircle : Check));
</script>

<template>
  <SlotsCard>
    <template #default>
      <div class="card">
        <div class="body">
          <p>{{ book.eventTitle }}</p>
          <p :class="`status ${listCss}`">
            <component :is="Icon" :class="{ spinner: pending }" />
            {{ book.status }}
          </p>
        </div>
        <Button
          :disabled="disabled"
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
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
