const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      confirmedName: '',
      //fullname: ''
    };
  },
  //computed properties are like methods,
  //diff Vue will be aware of their dependecies
  //and only reexecute them if one of the dependecies
  // changed 
  // use with data binding
  // only re-evaluated  if one of their "used values" changed
  // use for data that depends on other data
  computed: {
    fullname() {
      if (this.name === '' || this.lastname === '') return '';
      return this.name + ' ' + this.lastname;
    }
  },
  // watcher is a function you can tell Vue
  // to execute when one of its dependecies changed
  // not used directly in template
  //  use for any non-data update you want to make
  watch: {
    counter(value) {
      if (value => 50) this.counter = 0;
    }
    // name(newValue,oldValue) {
    // // name(value) {
    //   this.fullname = newValue + ' ' + this.lastName;
    // },
    // lastname(value) {
    //   this.fullname = this.name + ' ' + value;
    // }
  },
  // method is executed for every re-render
  //use method for event binding or data that really
  // needs to be reevaluted every time
  methods: {
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = '';
      this.confirmedName = '';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
