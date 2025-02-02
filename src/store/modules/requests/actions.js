export default {
  async coachRequest(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    }
    const response = await fetch(
      `https://vue-test-e2e74-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      },
    )
    if (!response.ok) {

      // Handle the error appropriately, e.g., notify the user or log the error for debugging
      // You could also consider sending a notification to the coach or user for further action
      const error = new Error(responseData.message || 'Failed to send request!');
      throw error;

    }
    const responseData = await response.json();
    newRequest.id = responseData.name; // Firebase assigns a unique ID to each new document 
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest)
  },

  async loadRequests(context) {
    const coachId = context.rootGetters.userId ;
    const response = await fetch(
      `https://vue-test-e2e74-default-rtdb.firebaseio.com/requests/${coachId}.json`,
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
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      }
      requests.push(request);
    }

    console.log(requests);
    context.commit('setRequests', requests);
    
  },
}
