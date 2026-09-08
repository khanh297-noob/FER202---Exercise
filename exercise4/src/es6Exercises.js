export const runES6Exercises = () => {
  console.log("========== 1. PEOPLE ARRAY EXERCISES ==========");
  var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 }, 
    { name: 'John', age: 40 }, 
    { name: 'Ann', age: 19 }, 
    { name: 'Elisabeth', age: 16 }
  ];

  
  const firstTeen = people.find(p => p.age >= 10 && p.age <= 20);
  console.log("First teenager:", firstTeen);

  
  const allTeens = people.filter(p => p.age >= 10 && p.age <= 20);
  console.log("All teenagers:", allTeens);

  
  const isEveryTeen = people.every(p => p.age >= 10 && p.age <= 20);
  console.log("Is every person teenager?:", isEveryTeen);

  
  const isAnyTeen = people.some(p => p.age >= 10 && p.age <= 20);
  console.log("Is any person teenager?:", isAnyTeen);

  console.log("\n========== 2. ARRAY REDUCE ==========");
  var array = [1, 2, 3, 4];
  const sumWithReduce = array.reduce((acc, curr) => acc + curr, 0);
  console.log("Sum using reduce and arrow function:", sumWithReduce);

  console.log("\n========== 3. COMPANIES & AGES EXERCISES ==========");
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const person = { name: "Costas", address: { street: "Lalaland 12" } };

  
  companies.forEach(c => console.log("Company Name:", c.name));

  
  companies.filter(c => c.start > 1987).forEach(c => console.log("Started after 1987:", c.name));

  
  const sortedByEnd = [...companies].sort((a, b) => a.end - b.end);
  console.log("Sorted companies by end ascending:", sortedByEnd);

 
  const sortedAgesDesc = [...ages].sort((a, b) => b - a);
  console.log("Ages descending:", sortedAgesDesc);

  
  const sumAges = ages.reduce((total, age) => total + age, 0);
  console.log("Sum ages:", sumAges);

  
  const { name, category } = companies[0];
  const newCompObj = {
    name,
    category,
    print() {
      console.log(`Company printed: ${this.name}`);
    }
  };
  newCompObj.print();

  
  const sumUnknownNumbers = (...nums) => nums.reduce((a, b) => a + b, 0);
  console.log("Sum unknown numbers (1, 5, 10, 20):", sumUnknownNumbers(1, 5, 10, 20));

  
  const collectArguments = (...args) => args.flat(Infinity);
  console.log("Flatten arguments:", collectArguments(1, 'hello', [2, 3, [4, 5]]));

  
  const { address: { street } } = person;
  console.log("Extracted street:", street);

  
  const createIncrementCounter = () => {
    let count = 0;
    return () => count++;
  };
  const getNextNum = createIncrementCounter();
  console.log("Counter call 1:", getNextNum());
  console.log("Counter call 2:", getNextNum());

  
  const parseQueryParams = (url) => {
    const params = new URL(url).searchParams;
    return Object.fromEntries(params.entries());
  };
  console.log("Parsed URL params:", parseQueryParams("https://example.com?page=2&sort=desc"));

  console.log("\n========== 4. OOP CLASSES (SHAPE, RECTANGLE, TRIANGLE) ==========");
  class Shape {
    constructor(color) {
      this.color = color;
    }
    getArea() {
      return 0;
    }
    toString() {
      return `Shape[color=${this.color}]`;
    }
  }

  class Rectangle extends Shape {
    constructor(color, length, width) {
      super(color);
      this.length = length;
      this.width = width;
    }
    getArea() {
      return this.length * this.width;
    }
    toString() {
      return `Rectangle[color=${this.color}, length=${this.length}, width=${this.width}, area=${this.getArea()}]`;
    }
  }

  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }
    getArea() {
      return 0.5 * this.base * this.height;
    }
    toString() {
      return `Triangle[color=${this.color}, base=${this.base}, height=${this.height}, area=${this.getArea()}]`;
    }
  }

  const rect = new Rectangle("Blue", 10, 5);
  const tri = new Triangle("Red", 8, 4);
  console.log(rect.toString());
  console.log(tri.toString());

  console.log("\n========== 5. PROMISE EXERCISE ==========");
  const checkRandomNumber = () => {
    return new Promise((resolve, reject) => {
      const num = Math.floor(Math.random() * 10) + 1;
      if (num > 5) {
        resolve(`Success: Random number is ${num} (larger than 5)`);
      } else {
        reject("Error: Number is smaller than or equal to 5");
      }
    });
  };

  checkRandomNumber()
    .then(result => console.log(result))
    .catch(error => console.log(error));
};