<template>
  <div>
    <hr />
    <p class="font-medium mt-7 text-2xl mb-5 text-gray-700 dark:text-gray-50">
      {{ project.name }}
    </p>
    <p class="mb-5 text-gray-500 dark:text-gray-300">
      {{ project.description }}
    </p>
    <div class="mb-7 text-gray-700 dark:text-gray-50">
      <h4 class="text-xl font-medium">⚡ Tech stack</h4>
      <p class="text-gray-700 dark:text-gray-50">
        {{ project.skills }}
      </p>
    </div>
    <div class="mb-9">
      <p v-if="project.github_url">
        🌎 <strong>Check it out →</strong>
        <a
          :href="project.github_url"
          target="_blank"
          rel="noopener"
          v-text="project.github_url.replace('https://github.com/', '')"
        />
      </p>
      <p v-if="project.project_link">
        🌎 <strong>Check it out →</strong>
        <a :href="project.project_link" target="_blank" rel="noopener">{{
          project.project_link
        }}</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const Props = Vue.extend({
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
})

@Component
export default class Project extends Props {}
</script>
