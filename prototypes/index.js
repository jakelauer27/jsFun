const { instructors, cohorts } = require('./datasets/turing');

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
      instructors.reduce( (arr, instructor) => {
        students = cohorts.find( (cohort) => {
          return cohort.module === instructor.module;
        })
        arr.push( {name: instructor.name, studentCount: students.studentCount} )
        return arr;
      }, []);
    return result;

    // Annotation:
    // I'm reducing the instructors array into a new array. Inside the reduce function
    // I grab the student count using the find() method to find the cohort module that equals
    // the instructor module.  I then push a new object into the array with the key being the instuctor
    // name and the value being the student count.  
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
         if (cohort.curriculum.indexOf(subject) !== -1 && arr.indexOf (cohort.module) === -1) {
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
          return instructor.teaches.indexOf(subject) !== -1
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
}

module.exports = {
  turingPrompts
};