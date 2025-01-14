<template>
  <div>
	     <base-card>
       <h1>Coach Registeration</h1>
       <coach-form @save-data="saveData"></coach-form>
      </base-card>

  </div>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm
  },

  methods : {
    saveData(data){
      this.$store.dispatch('coaches/registerCoach',data)
      this.$router.replace('/coaches')
    }
  }
}
</script>

<style>

</style>