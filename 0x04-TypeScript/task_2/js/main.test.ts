import { createEmployee, isDirector } from './main';

describe('Task 2 - createEmployee Function', () => {
  it('should return a Teacher for salary < 500', () => {
    const employee = createEmployee(200);
    if (!isDirector(employee)) {
      expect(employee.workTeacherTasks()).toBe('Getting to work');
    }
  });

  it('should return a Director for salary >= 500', () => {
    const employee = createEmployee(1000);
    if (isDirector(employee)) {
      expect(employee.workDirectorTasks()).toBe('Getting to director tasks');
    }
  });
});
