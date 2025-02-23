export default {
   async registerCoach(context, data) {
      const userId = context.rootGetters.userId;
      const coachData = {
        firstName: data.first,
        lastName: data.last,
        areas: data.areas,
        description: data.desc,
        hourlyRate: data.rate
      };

    const response = await fetch(`https://vue-test-e2e74-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
        method : 'PUT',
        body : JSON.stringify(coachData)
      });
      if(!response.ok){
        // error
      }

      context.commit('registerCoach', {
        ...coachData,
        id : userId
      });
    },

    async loadCoaches(context){
     const response = await fetch('https://vue-test-e2e74-default-rtdb.firebaseio.com/coaches.json');
      const responseData = await response.json();

      if(!response.ok){
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }
      const coaches = [];
      for(const key in responseData){
        const coach = {
          id : key,
          firstName : responseData[key].firstName,
          lastName : responseData[key].lastName,
          areas : responseData[key].areas,
          description : responseData[key].description,
          hourlyRate : responseData[key].hourlyRate
        }
        coaches.push(coach);
      }
      context.commit('setCoach', coaches);
    }

}