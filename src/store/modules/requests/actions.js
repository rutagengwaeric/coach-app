export default {
  async coachRequest(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    }
    const response = await fetch(
      `https://vue-test-e2e74-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(newRequest),
      },
    )
    if (!response.ok) {
      // error
    }
    context.commit('addRequest', newRequest)
  },
  async loadRequests(context) {
    const response = await fetch(
      `https://vue-test-e2e74-default-rtdb.firebaseio.com/requests/${context.rootGetters.userId}.json`,
    )
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: responseData[key].coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      }
      requests.push(request);
    }
    context.commit('setRequests', requests);
    
  },
}
