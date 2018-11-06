// function to create a one second delay
const delay = time => new Promise(resolve => setTimeout(() => resolve(), time));

// count model
export default {
  state: 0,
  reducers: {
    divBy(state, payload) {
      return state - payload;
    }
  },
  effects: dispatch => ({
    async addByAsync(payload, state) {
      await delay(1000);
      dispatch.count.divBy(1);
    }
  })
};
