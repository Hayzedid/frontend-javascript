// Task 2: Advanced types, Director & Teacher classes, createEmployee, isDirector, executeWork, teachClass

// Interfaces for Director and Teacher behavior
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  let amount: number;
  if (typeof salary === 'number') amount = salary;
  else {
    amount = Number((salary as string).replace(/[^0-9.-]+/g, ''));
  }

  if (!isNaN(amount) && amount < 500) return new Teacher();
  return new Director();
}

export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// String literal types and teachClass
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Example usage
const director = new Director();
const teacher = new Teacher();

console.log(executeWork(director)); // Getting to director tasks
console.log(executeWork(teacher)); // Getting to work
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History

export { Director, Teacher, createEmployee, executeWork, teachClass, Subjects };
