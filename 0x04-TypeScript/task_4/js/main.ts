import { Subjects } from './subjects/Subject';
import * as CppModule from './subjects/Cpp';
import * as JavaModule from './subjects/Java';
import * as ReactModule from './subjects/React';

// Create and export constants
export const cpp = new CppModule.Subjects.Cpp();
export const java = new JavaModule.Subjects.Java();
export const react = new ReactModule.Subjects.React();

export const cTeacher: CppModule.Subjects.Teacher = { firstName: 'C', lastName: 'Teacher', experienceTeachingC: 10 };

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
