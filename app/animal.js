
class Animal {

  constructor(name = 'Leo', height = 4.1){
    Object.assign(this, {name, height})
  }

  hello(){
    console.info(`Hi! I'm ${this.name} and i measure ${this.height} :D !!!`);
  }
}

export default Animal;
