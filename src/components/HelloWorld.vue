<template>
  <div class="text-center p-3">
    <h1 class="bg-secondary text-white p-3">
      {{ message }}
    </h1>
    <button class="btn btn-secondary" v-on:click="handleClick">Press Me</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleClick() {
      this.counter++;
    },
  },
  computed: {
    message() {
      return this.counter == 0
        ? "Button Not Pressed"
        : `Button Presses: ${this.counter}`;
    },
  },
};
</script>
