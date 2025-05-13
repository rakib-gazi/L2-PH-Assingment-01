# Blog Task

## Q. What are some differences between interfaces and types in TypeScript?

### Interfaces & Types both are used for decleare data structure or object type. But there are most important difference between them. such as

### Declaration:
**Interface:** interface is decleared by using keyword "interface". Its mainly used for decleare object type.

```
    interface User {
        name: string;
        age: number;
    }

```
**Type:** type is decleared by using keyword type . It can be used with primitive, union, tuple type also along with object type.

```
    type User = {
        name: string;
        age: number;
    };

```

### Extending:

**Interface:** interface can extend another interface usign "extends" keyword, which can be helpful for increase reusability of code.

```
interface Person {
    name: string;
}
interface User extends Person {
    
}

```

**Type:** type doesnot support "extends" keyword directly like interface. But we can extend type using "&" operator.

```
type Person = {
    name: string;
};
type User = Person & {
    age: number;
};

```


### Merging:

**Interface:** if we decleare more interface with same name, typescript merged it automatically, which is very helpful for us.

```
interface User {
    name: string;
}
interface User {
    age: number;
}

//result: User { name: string; age: number }
```
**Type:** in type we cannot merged between two type if we decleare type using same name. if we do it, Its throw error.
```
type User = { name: string };
type User = { age: number }; // Error: Duplicate identifier 'User'

````


**Finally, we can say that interface used for decleare obeject type with supported merged feature, on the other hand type can be declere with primitive, object, tuple, etc data type.**






## Q. What is the use of the keyof keyword in TypeScript? Provide an example.

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


