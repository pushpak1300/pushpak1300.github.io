<template>
  <body class="antialiased">
    <div
      class="
        relative
        flex
        items-top
        justify-center
        min-h-screen
        bg-gray-100
        dark:bg-gray-900
        sm:items-center
      "
    >
      <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
          <div
            class="
              px-4
              text-lg text-gray-500
              border-r border-gray-400
              tracking-wider
            "
            v-text="props.error.statusCode"
          />

          <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
            {{ props.error.message }}
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>
