<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input 
          type="date"
          class="form-control"
          v-model="timeEntry.date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input 
          type="number" 
          class="form-control"
          v-model="timeEntry.totalTime"
          placeholder="Hours"
        />
      </div>      
    </div>    
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input 
          type="text" 
          class="form-control"
          v-model="timeEntry.comment"
          placeholder="Comment"
        />
      </div>        
    </div>    
    <button class="btn btn-primary" v-on:click="save()">Save</button>
    <router-link 
        v-bind:to="'/time-entries/'">
          <a class="btn btn-primary">Cancel</a>
      </router-link>  
    <hr>
  </div>

</template>

<script>
  import store from '../store'

  export default {
    data () {
      return {
        timeEntry: {
          user: {
            firstName: 'Ryan',
            lastName: 'Chenkie',
            email: 'ryanchenkie@gmail.com',
            image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g'
          }
        }
      }
    },
    methods: {
      save () {
        let timeEntry = this.timeEntry

        if (Object.keys(timeEntry).length > 1) {
          store.commit('timeUpdate', timeEntry);
        }

        this.timeEntry = {
          user: {
            firstName: 'Eskie Sirius',
            lastName: 'Maquilang',
            email: 'eskiesiriusmaquilang@gmail.com',
            image: 'https://s.gravatar.com/avatar/f8ffe384215d64694c4dfb263737ea39?s=80'
          }
        };
      }
    }
  }
</script>