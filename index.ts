function formatString(input: string, toUpper?: boolean):string {
    return toUpper === false ? input.toLocaleLowerCase() : input.toUpperCase();
}
formatString("Hello");         
formatString("Hello", true);  
formatString("Hello", false); 



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filteredItems :{ title: string; rating: number }[] = [];
    items.filter(item => item.rating>=4 ? filteredItems.push(item):{});
    return filteredItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 10.2 },
  { title: "Book c", rating: 2.2 },
  { title: "Book d", rating: 3.2 },
  { title: "Book e", rating: 6.2 },
  { title: "Book f", rating: 5.0 }
];
filterByRating(books);



function concatenateArrays<T>(...arrays: T[][]):T[]{
   return arrays.flat();
}
concatenateArrays(["a", "b"], ["c"]);       
concatenateArrays([1, 2], [3, 4], [5]);  


class Vehicle {
    private make: string;
    private year:number;
    constructor(make:string, year:number){
        this.make = make;
        this.year = year;
    }
    getInfo():string{
        return `"Make: ${this.make}, Year: ${this.year}"`;
    };
}
class Car extends Vehicle {
    private model:string;
    constructor(make:string, year:number, model:string){
        super(make, year);
        this.model = model;
    }
    getModel():string{
        return `"Model: ${this.model}"`;
    };
}

const myCar = new Car("Toyota", 2020, "Corolla");
const yourCar = new Car("Hundai", 2022, "Premio");
myCar.getInfo();
myCar.getModel();
yourCar.getInfo();
yourCar.getModel();


function processValue(value: string | number): number{
    return typeof value === 'string'? value.length : value*2;
}
processValue("hello");
processValue(10);




interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
    return products.length === 0 ? null : 
        products.reduce((maxPrice, initialPrice)=>maxPrice.price > initialPrice.price ? maxPrice : initialPrice);
}

const products:Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 900 },
    { name: "shoe", price: 200 },
    { name: "bike", price: 600 },
];

getMostExpensiveProduct(products);  



enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

getDayType(Day.Monday);
getDayType(Day.Sunday);




async function squareAsync(n: number): Promise<number>{
    if(n<0){
        throw new Error(" Negative number not allowed");
    }
    return new Promise<number> ((resolve, reject )=>{
        setTimeout( ()=>{
            resolve(n*n);
        },1000);
       
    });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);