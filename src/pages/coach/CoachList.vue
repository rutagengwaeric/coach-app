<template>
  <section>
    FILTER
  </section>
    
  <section>
    <base-card>
      <div class="controls">
        <base-button class="outline"> Refresh </base-button>
        <base-button link to="/register"> Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" :key="coach.id" :coach="coach">
        </coach-item>
      </ul>
      <p v-else>No coaches found</p>
      </base-card>
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
