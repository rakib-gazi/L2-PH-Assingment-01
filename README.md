## Blog Task

### Q. What is the use of the keyof keyword in TypeScript? Provide an example.

**In Typescript keyof is the most important keyword which is used for represent all the keys of an object type as a union of string literals.**
Its ensures type safety & commonly used with mapped types. Its also works with interfaces, type & literal types.

``` 
interface Person {
  name: string;
  age: number;
  city: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "city"

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person: Person = { name: "Alice", age: 30, city: "New York" };
console.log(getProperty(person, "name")); // Output: Alice
console.log(getProperty(person, "age")); // Output: 30
// console.log(getProperty(person, "email")); // Error: "email" is not a key of Person






```