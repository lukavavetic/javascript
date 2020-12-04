const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  }
};

const steven = Object.create(PersonProto);
steven.birthYear = 1990;
steven.calcAge();