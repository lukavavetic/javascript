// const app = Vue.createApp({
//   data() {
//     return {
//       courseGoalA: 'Finish the course and learn Vue!',
//       courseGoalB: 'Master Vue and build amazing apps!',
//       courseGoalC: '<h2 style="color:white">Master Vue and build amazing apps!</h2>',
//       vueLink: 'https://vuejs.org/'
//     };
//   },
//   methods: {
//     outputGoal() {
//       const randomNumber = Math.random();

//       if (randomNumber < 0.5) return this.courseGoalA;
//       else return this.courseGoalB;
//     }
//   }
// });

// app.mount('#user-goal');

//Vue merges everything in global Vue object so when you call this keyword you access 
// everything you have defined in data, methods and so on

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount('#events');