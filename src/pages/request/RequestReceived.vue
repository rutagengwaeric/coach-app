<template>
  <base-card>
    <header>
      <h1>Request Received</h1>
    </header>
    <ul v-if="hasRequests">
      <request-item v-for="req in requests" :key="req.id" :email="req.userEmail" :message="req.message">
      </request-item>
    </ul>
    <h3 v-if="!hasRequests">You haven't received any request yet!</h3>
  </base-card>
</template>

<script>  
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: {
    RequestItem
  },
  created() {
    this.loadRequests();
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  methods: {
     async loadRequests() {
      await this.$store.dispatch('requests/loadRequests');
    }

  },
}


</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>