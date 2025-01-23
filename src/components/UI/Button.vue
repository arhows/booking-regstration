<script setup>
const variants = {
  solid: "solid",
  outline: "outline",
  danger: "danger",
};

const props = defineProps({
  variant: {
    type: String,
    default: "outline",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button :class="[variants[variant] ?? variants.outline]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  display: inline-block;
  padding: 0.6em 1.25em;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 250ms ease;
  margin: 0.5em 0;
}

button:hover {
  transform: scale(1.01);
  opacity: 0.89;
}

.solid {
  background-color: black;
  color: #fff;
  border-color: black;
}

.outline {
  background-color: transparent;
  color: black;
  border-color: black;
}

.danger {
  background-color: hsl(348, 83%, 80%);
  border-color: hsl(348, 83%, 80%);
  color: hsl(348, 83%, 20%);
}

button:disabled {
  background-color: #cccccc; /* Cor de fundo cinza */
  border-color: #cccccc;
  color: #666666; /* Cor do texto */
  border: 1px solid #aaaaaa; /* Borda com tom mais escuro */
  cursor: not-allowed; /* Cursor de não permitido */
  opacity: 0.6; /* Deixa o botão semitransparente */
}

button:disabled:hover {
  background-color: #cccccc; /* Mantém a mesma cor no hover */
}
</style>
