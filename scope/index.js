const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB'},
      { 'C': 'CardiB'},
      { 'D': 'Paul'}
    ];

    return result;

    // Annotation: 
    // First we declare three vars and assign them to 'paul' 'ben' and 'tom'.
    // Then we declare funct changePerson
    // Then we invoke change person. The intepreter hoists the beautifyPerson function declaration.
    // Then the conditional inside change person evaluates to true so then we set 
    // a new global var person equal to "cardiB".
    // Then the beautifyPerson function is invoked. We log personA which is 'ben'.
    // The if statement within evaluates to true so we reassign personB to person and personC to personB.
    // We log personC (cardiB). Then we reassign personC to personA. We log personB('cardiB').
    // Thd function has finished. We log personC('paul')
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [
      {'A': 75},
      {'B': 64},
      {'C': 64},
      {'D': 30}
    ]
      
    return result;

    // Annotation:
    // We declare number and assign it equal to 75. 
    // We declare numberFunction()
    // We invoke numberFunction(). function newNumber() is hoisted to the top of the function.
    // We declare a functionally scoped variable number and assign it to 28.
    // Our conditional looks up the scope chain for number and finds the functionally scoped var number. 
    // the if condition evaluates to true so we declare a block scope var number and assign it equal to 28.
    // We log number in the function scope (75).
    // we declare function newNumber().
    // we invoke function newNumber().
    // The intepreter looks up the scope chain for a number var and finds it in the parent function. 
    // We reassign number (in the parent function) equal to 64.
    // We log number (64).
    // The function finishes and we log number again. We grab the functionally scoped number so it is 64 again.
    // We then log the globally scoped number which is still 30.
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
      {'A': 'Yo'},
      {'B': 'Hey'},
      {'C': 'Hey'},
      {'D': 'Hello'}
    ];
    return result;

    // Annotation:
    // We declare global var greeting and assign it to 'Hello'
    // We declare function greetingFunction()
    // We invoke greetingFunction()
    // function newPhrase() is hoisted to the top of the function.
    // We declare functionally scoped var greeting and assign it to 'Yo'
    // The conditional evaluates to true so we declare block scoped var greeting and assign it to 'Howdy'
    // We log greeting ('yo').
    // We declare function newPhase().
    // We invoke newPhrase().
    // We reassign functionally scoped greeting to 'hey'. We log greeting ('hey').
    // newPhrase() finishes and we log greeting again ('hey').
    // greetingFunction() finishes and we log greeting again. This time it is the global var which is still 'hello'.  
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      }

      newGreeting();

      // Log C: greeting
    }

    greetingGenerator();

    // Log D: greeting

    const result = [
      {'A': 'hi'},
      {'B': 'welcome'},
      {'C': 'welcome'},
      {'D': 'howdy'}
    ];
    return result;

    // Annotation:
    // We declare globally scoped var greeting and assign it to 'howdy'.
    // We declare const greetingGenerator and set it equal to a function.
    // We invoke greetingGenerator()
    // We set functionally scoped greeting equal to 'hi'.
    // Our conditional looks to our functionally scoped greeting and evaluates to true so we 
    // declare and assign block scoped greeting 'hello'.
    // We declare const newGreeting and assign it to a function.
    // We invoke newGreeting().  
    // We reassign our functionally scoped greeting var to 'welcome' then log greeting ('welcome')
    // NewGretting() finished and we log our functionally scope greeting var again ('welcome)
    // greetingGenerator() finishes and we log our globally scoped greeting ('howdy')

  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result =  [
      {'C': 'Brittany'},
      {'A': 'Nathaniel'},
      {'B': 'Nathaniel'},
      {'D': 'Brittany'}
    ];
    return result;

    // Annotation:
    // First we declare a global var name and assigning it to be equal to "Brittany"
    // Then we delcare function sayName()
    // Then we logC name ("brittany")
    // Then we invoke sayName()
    // In the function we declare functionally scoped name and assign it to 'Pam'.
    // The first conditional evaluates to true so we reassign the functionally scoped name to 'Nathaniel'.
    // Then we have another conditional that evaulates to true so we declare a block scoped var name and assign it to 'brittany'.
    // Our second conditional finishes and we log name ('Nathaniel').
    // OUr first conditional finsihes and we log name which is still functionally scoped 'Nathaniel'.
    // The our function ends and we log name again which is now globally scoped 'Brittany'.
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = [
      {'A': 'Spot'},
      {'B': 'Spot'},
      {'C': 'Biscuit'},
      {'D': 'Biscuit'},
      {'E': 'Biscuit'}
    ];
    return result;

    // Annotation:
    // First we declare var dog and assign it to 'spot'
    // Then we declare function petDog()
    // Then we invoke petDog()
    // Inside the function we log dog which will return the global var ('Spot')
    // Then we have a conditional that evaluates to true so we set block scoped var dog to 'Fluffy'
    // Then we declare function rollOver()
    // Then we invoke rollOver()
    // Then we log dog again and it's still "spot" because there aren't any functionally scoped dogs.
    // Then we reassign dog to 'biscuit'.
    // Then we log dog ('biscuit').
    // The remaining dog logs are also biscuit as all of them still refer to the globally scored dog var. 
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit()

    // Log D: fruit

    const result = [
      {'A': 'reference error'},
      {'B': 'mango'},
      {'C': 'mango'},
      {'D': 'apple'}
    ];
    return result;

    // Annotation:
    // First we declare globally scoped var fruit and assign it equal to 'apple'.
    // Then we declare function eatFruit().
    // Then we invoke eatFruit()
    // Our first conditional evaluates to true so we declare var fruit and assign it to 'mango'.
    // This var is hoisting to the top of our function and it's value is not confined to the block because 
    // var does not respect block scope. 
    // Then we have another conditional that evaluates to true so we log fruit.
    // This produces a reference error due to the Temporal Deadzone. const fruit does not hoist and it cannot be 
    // accessed before it is declared. This reference error prevents our log from moving up the scope chain and finding 'mango'.
    // After the log we declare block scoped fruit and assign it to 'strawberry'.
    // Then our second if statement finishes and we log fruit again which is functionally scoped 'mango'.
    // Then our first if statement finished and we log fruit which again is functionally scored 'mango'.
    // Finally our function finishes and we log fruit one last time and it is equal to our globally scoped fruit ('apple').
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    }

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    }

    fn1();

    const result = [
      {'A': 4},
      {'D': 9},
      {'E': 10},
      {'B': 9},
      {'C': 4}
    ];
    return result;

    // Annotation:
    // First we declare num and assign it to equal 6. 
    //
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    };

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = [
      {'A': 75},
      {'B': 0},
      {'C': 75},
      {'D': 80},
      {'E': 55}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
      }

      shesTheManReference();
    }

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = [
      {'A': 'ketchup sandwich'},
      {'D': 'gouda'},
      {'B': undefined},
      {'C': 'not a mediocre sandwich'},
      {'E': 'not a mediocre sandwich'},
      {'F': 'National Treasure'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
        if (num > 5) {
           num = 7;
        }
        // Log A: num
    }

    foo();

    // Log B: num

    const result = [
      {'A': 7},
      {'B': 7}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = [
      {'A': 95},
      {'B': 90},
      {'C': 90}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = [
      {'A': 5},
      {'B': 6},
      {'C': 'reference error'},
      {'D': 6}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = [
      {'C': 'Louisa'},
      {'D': 'Louisa'},
      {'E': 'Pam'},
      {'A': 'Pam'},
      {'B': 'Pam'},
      {'F': 'Louisa'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [
      {'B': 'flipflop'},
      {'A': 'undefined'},
      {'C': 'flipflop'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
}

module.exports = scope;