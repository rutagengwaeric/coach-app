<template>
  <base-dialog :show="!!error" title="An error occurred" @close="error = null">
    <p> {{ error }} </p>
  </base-dialog>
  <section>
    <coach-filter @change-filter="setFilter"></coach-filter>
  </section>

  <section>
    <base-card>
      <div class="controls">
        <base-button class="outline" @click="loadCoaches"> Refresh </base-button>
        <base-button v-if="!isCoach && !isLoading" link to="/register"> Register as Coach</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :first-name="coach.firstName"
          :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas">
        </coach-item>
      </ul>
      <p v-else>No coaches found</p>
    </base-card>
  </section>
</template>

<script>

import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,

  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      },
    }
  },
  created() {
    this.loadCoaches();
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },

  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches() {
      try {
        this.isLoading = true;
        await this.$store.dispatch('coaches/loadCoaches');
        this.isLoading = false;
      } catch (error) {
        this.error = error.message || 'An error occurred';
        // this.isLoading = false;
      }
    }


  }
}

</script>

<style scoped>
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
