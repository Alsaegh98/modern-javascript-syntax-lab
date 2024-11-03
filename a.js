
/////////////EX1

console.log('EX1'); 
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const newNum = nums.map((x) => x * 2);


    console.log(newNum);


    //////////EX2

    console.log('EX2'); 
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstpizzaToppings, secondpizzaToppings] = pizzaToppings;

console.log(firstpizzaToppings); 
console.log(secondpizzaToppings);


////////////EX3

console.log('EX3'); 

const car = {
    make: 'Audi',
    model: 'q5',
  };
  

  const { make, model } = car;


  console.log(car.make); 
  console.log(car.model);

  ////////EX4

  console.log('EX4'); 

  const controversialPizzaToppings = [...pizzaToppings];

  console.log(controversialPizzaToppings); 

    ////////EX5

    console.log('EX5'); 


    const myCar = { ...car };

myCar.model = 'q7';


console.log(car.make); 
console.log(myCar.model);

    ////////EX6

    console.log('EX6'); 

    const userProfile = 'Abdulla'; 

    const propertyName = {
      [userProfile]: 26,
    };
    
    console.log(propertyName);

     ////////EX8

     console.log('EX8'); 

      function parameters(noun = 'cat', adjective = 'white') {
        console.log(`The ${noun} is ${adjective}.`);
      
    }

   parameters()


     ////////EX9

     console.log('EX9'); 


let pizza = 'tasty';

console.log(pizza === 'tasty' ? 'yum' : 'yuck');



///////EX10

console.log('EX10')



const localLangConfig = null;  
const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);

const userSavedTheme = 'dark'; 

const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);

///////EX11

console.log('EX11')

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age;
  
  console.log(cat);
