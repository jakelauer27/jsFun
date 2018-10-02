const { expect } = require('chai');
const { turingPrompts } = require('../prototypes/index');

describe('PROTOTYPES', () => {
  describe('Turing Prompts', () => {
    it('studentsForEachInstructor', () => {
      const result = turingPrompts.studentsForEachInstructor();

      expect(result).to.deep.equal([{"name":"Pam","studentCount":21},
      {"name":"Brittany","studentCount":21},
      {"name":"Nathaniel","studentCount":21},
      {"name":"Robbie","studentCount":18},
      {"name":"Leta","studentCount":18},
      {"name":"Travis","studentCount":30},
      {"name":"Louisa","studentCount":30},
      {"name":"Christie","studentCount":20},
      {"name":"Will","studentCount":20}]);
    });

    it('studentsPerInstructor', () => {
      const result = turingPrompts.studentsPerInstructor();

      expect(result).to.deep.equal({'cohort1806': 15, 
      'cohort1804': 7, 
      'cohort1803': 10, 
      'cohort1801': 9})
    });

    it('modulesPerInstructor', () => {
      const result = turingPrompts.modulesPerTeacher();

      expect(result).to.deep.equal({'Pam': [2, 4], 
      'Brittany': [2, 4], 
      'Nathaniel': [2, 4], 
      'Robbie': [4], 
      'Leta': [4, 2], 
      'Travis': [1, 2, 3, 4], 
      'Louisa': [1, 2, 3, 4], 
      'Christie': [1, 2, 3, 4], 
      'Will': [1, 2, 3 ,4]})
    });

    it('curriculumPerInstructor', () => {
      const result = turingPrompts.curriculumPerTeacher();

      expect(result).to.deep.equal({ html: [ 'Travis', 'Louisa' ],
      css: [ 'Travis', 'Louisa' ],
      javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
      recursion: [ 'Pam', 'Leta' ],
      scope: [ 'Pam', 'Nathaniel', 'Will' ],
      oop: [ 'Brittany', 'Nathaniel', 'Will' ],
      react: [ 'Christie', 'Will' ],
      redux: [ 'Will' ],
      pwas: [ 'Brittany', 'Robbie', 'Leta', 'Louisa' ],
      mobile: [ 'Nathaniel' ],
      node: [ 'Pam', 'Robbie', 'Leta', 'Louisa', 'Christie' ] })
    });
  });
});