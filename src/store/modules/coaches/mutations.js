export default {
  registerCoach(state, data) {
    state.coaches.push(data);
  },
  setCoach(state, payload) {
    state.coaches = payload;
  }
}