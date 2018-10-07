const { instructors, cohorts } = require('./datasets/turing');
const { constellations, stars } = require('./datasets/astronomy');
const { cakes } = require('./datasets/cakes');
const { kitties } = require('./datasets/kitties')
const { pie } = require('./datasets/pie');
const { clubs } = require('./datasets/clubs');
const { classrooms } = require('./datasets/classrooms');
const { mods } = require('./datasets/mods');
const { bosses, sidekicks } = require('./datasets/bosses');

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = 
      instructors.map( (instructor) => {
        students = cohorts.find( (cohort) => {
          return cohort.module === instructor.module;
        })
        return {name: instructor.name, studentCount: students.studentCount} 
      });
    return result;

    // Annotation:
    
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }


    const result = cohorts.reduce( (obj, cohort) => {
      let teachers = instructors.reduce( (sum, instructor) => {
        if (instructor.module === cohort.module) {
          sum ++;
        }
        return sum;
      }, 0)
      obj[`cohort${cohort.cohort}`] = cohort.studentCount / teachers;
        return obj;
       }, {});

      return result;


    // Annotation:
    // Similar to the first exercise, I used a reduce() on the cohorts array to 
    // reduce it down to an object. Then I used another reduce() on the instructors array
    // to grab the number of professors in each module. Each iteration I added a key value pair
    // in the object with the key being the cohort and the value being the student count divided by the teachers.
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = instructors.reduce( (obj, instructor) => {
      const subjects = instructor.teaches.reduce( (arr, subject) => {
        cohorts.forEach( (cohort) => {
         if (cohort.curriculum.includes(subject) && !arr.includes(cohort.module)) {
          arr.push(cohort.module);
         }
        })
        return arr;
      }, [])
      obj[instructor.name] = subjects;
      return obj;
    }, {});
    return result;

    // Annotation:
    // Fist I reduce instructors array into an object, returning the instructor name as the key 
    // and the modules they can teach as the value.
    // I grab the modules they can teach by reducing the instructor.teaches array into another array in 
    // each iteration. Within this reduce I use a forEach loop on the cohorts array and push the module
    // into the subjects array if the cohort cirriculum array contains the subjuct and the subject isn't already in the new subjects array.
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }
    
    const result = cohorts.reduce( (obj, cohort) => {
      cohort.curriculum.forEach( (subject) => {
        obj[subject] = instructors.filter( (instructor) => {
          return instructor.teaches.includes(subject);
        }).map( (teacher) => teacher.name)
      })
      return obj;
    }, {});
    return result;

    // Annotation:
    // I am reducing the cohorts array into an object. Inside the reduce function, I make use of 
    // a forEach loop. The forEach loop loops through the cirriculum array for each cohort and 
    // sets that subject key equal to the instructors array that is being filtered. The filter loop
    // is looking through each instructor to check if their teaches array contains the subject being iterated over and returns the instructor
    // if true. The returned values are then mapped so they only include the teacher name in the array.
    // Finally the end object is returned. 
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map( (mod) => {
      return {mod: mod.mod, studentsPerInstructor: (mod.students / mod.instructors)}
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter( (classroom) => {
      return classroom.program === "FE";
    })

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce( (obj, classroom) => {
      if(classroom.program === 'FE') {
        obj.feCapacity += classroom.capacity 
      } else {
        obj.beCapacity += classroom.capacity;
      }
      return obj;
    }, {feCapacity: 0, beCapacity: 0});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort( (a, b) => {
      return a.capacity > b.capacity
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce( (arr, cake) => {
      cake.toppings.forEach( (topping) => {
        if (arr.indexOf(topping) === -1) {
          arr.push(topping)
        }
      })
      return arr;
    }, []);
    return result;

    // Annotation:
    // I need to make an array of all the toppings (no repeats).
    // I use reduce to create the new array. Inside of reduce, I 
    // grab each topping of each cake using a for each loop.
    // I check to see if the topping already exists, and if not, I push
    // it into the new array. 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce( (obj, cake) => {
      cake.toppings.forEach( (topping) => {
        (!obj[topping]) ? obj[topping] = 1 : obj[topping] ++;
      })
      return obj;
    }, {});
    return result;

    // Annotation:
    // I need to return an array with all toppings so I used reduce.
    // Inside my reduce function, I go through the toppings of each cake with 
    // a forEach loop. In the forEach loop I check to see if 
    // the object property of that topping exists. If it doesn't I set it to 
    // one. If it does exist I increment it up. 
    // After doing this with every topping on every cake, i return the object.
  },

  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'honey', inStock: 3 },
    //    { flavor: 'vanilla', inStock: 21 },
    //    ..etc
    // ]

    const result = cakes.map( (cake) => {
      return {flavor: cake.cakeFlavor, inStock: cake.inStock }
    }) ;
    return result;

    // Annotation:
    // I need to return an array of the same length so I use map.
    // I return only the cake flavor and instock values for each cake and store them in objects.
  },

  totalInventory() {
    // Return the total amout of cakes in stock e.g.
    // 59

    const result = cakes.reduce( (sum, cake) => {
      sum += cake.inStock;
      return sum;
    }, 0);
    return result;

    // Annotation:
    // I need the sum of all inStock properties.
    // I use reduce to add the inStock value to my accumulator (sum).
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },

      const result = cakes.filter( (cake) => {
        return cake.inStock > 0;
      })
      return result;


    // Annotation
    // I want an array of only the cakes 
    // that have cakes in stock. I used a filter method
    // to return only the cakes whose inStock property was truthy.
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------







// DATASET: pie from ./datasets/pie
const piePrompts = {
  howManyIngredients() {
    // The bakery needs to make more rhubarb pies in order to meet the
    // desiredInventoryCount. Programmatically determine how many more pies
    // need to be made, and return an object of the total number of ingredients we need
    // we need to buy in order to make the remaining pies. e.g.:
    // {
    //   cinnamon: 50,
    //   sugar: 100
    // }
    const result = (function() {
      const neededPies = pie.desiredInventoryCount - pie.inventoryCount;
      return {cinnamon: 2 * neededPies, sugar: 4 * neededPies}
    })();
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce( (obj, club) => {
      club.members.forEach( (member) => {
       if (!obj[member]) {
         obj[member] = []
        } 
       obj[member].push(club.club)
      })
      return obj;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const keys = Object.keys(bosses)

    const result = keys.map( (boss) => {
      const loyalty = sidekicks.reduce( (sum, sidekick) => {
          if (sidekick.boss === bosses[boss].name) {
            sum += sidekick.loyaltyToBoss;
          }
          return sum;
      }, 0)
      return {bossName: bosses[boss].name, sidekickLoyalty: loyalty};
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map( (cat) => {
      cat.age += 2;
      return cat;
    })

    return result;
  },

  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.filter( (kitten) => kitten.color === 'orange'
    ).map( (kitten) => kitten.name);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },



  sortByAge() {
    // Sort the kitties by their age
    kitties.map( (cat) => {
      cat.age -= 2;
      return cat;
    })

    const result = kitties.sort( (a, b) => {
      return a.age < b.age;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]
    const keys = Object.keys(constellations);

    const result = stars.reduce( (starArr, star) => {
      const stars = keys.reduce( (arr, key) => {
          if (constellations[key].stars.indexOf(star.name) !== -1) {
            arr.push(star)
          }
          return arr;
        }, [])
      starArr = starArr.concat(stars);
      return starArr;
    }, [])
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce( (obj, star) => {
      if (!obj[star.color]) {
        obj[star.color] = [star]
       } else {
        obj[star.color].push(star);
       }
      return obj;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = stars.map( (star) => star.constellation);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



module.exports = {
  turingPrompts,
  piePrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts
};