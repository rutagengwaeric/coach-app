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
    }
}