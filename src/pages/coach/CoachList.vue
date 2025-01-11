<template>
  <section>
    <div class="controls">
      FILTER
    </div>
  </section>

  <section>
    LIST OF COACHES
    <ul v-if="hasCoaches">
      <coach-item v-for="coach in filteredCoaches" :key="coach.id" :coach="coach">

      </coach-item>
    </ul>
    <p v-else>No coaches found</p>
  </section>
</template>

<script>

import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem
  }
,
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  }
}

</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
