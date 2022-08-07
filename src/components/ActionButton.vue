<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      default: "Click Me",
    },
  },
};
</script>
