import Person, { sayHello } from "./person.ts";

const ada: Person = {
  lastName: "Duck",
  firstName: "Dead",
};

console.log(sayHello(ada));
