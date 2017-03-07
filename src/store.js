import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    timeEntries: [],
    totalTime: 0,
  },
  mutations: {
    timeUpdate(state,timeEntry) {
      state.totalTime += Number(timeEntry.totalTime);
      state.timeEntries.push(timeEntry);
    },
    deleteTime(state,timeEntry) {
      let index = state.timeEntries.indexOf(timeEntry);
      state.timeEntries.splice(index, 1);
      state.totalTime -= timeEntry.totalTime;
    }
  }
})

export default store