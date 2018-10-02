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
    // First we declare variables scoped to the ExerciseA function. 
    // Then we define a changePerson function.
    // Then we skip down to where the function is called.
    // In the change Person function we define a global variable called person and set it to "CardiB"
    // Then we invoke beautify function.
    // In this function we log person b first. The value is "Ben".
    // Then we set person B to CardiB and personC to person B. 
    // Then we log person C which is now CardiB.
    // Now that the beautify function has finished we go back to the of the changeperson function.
    // Here we set person C to personA ('Paul')
    // Then we log personB which is still cardiB.
    // Then the changePerson function finishes.
    // Now we finish the exerciseA function by logging person C which is Paul 
  }
}

module.exports = scope;