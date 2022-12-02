// assigning arrays like this will give a type of never
const superHeros = [];

const superHeros1: string[] = []; // this defines the array of strings
superHeros1.push("spiderman");

const heroPower: number[] = [];
heroPower.push(3);

//another way to define a type of array:
const heroPower2: Array<number> = [];

//type comes up with arrays
type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "", isActive: true }); //can't have empty objects

//Another way
const MLModels: number[][] = [
  //values are RBG
  // because of the type definition, other data like strings are not allowed
  [255, 255, 255],
  [],
];
//?  there are different array types that can be searched in the documentation
