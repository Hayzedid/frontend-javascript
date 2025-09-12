import { Student } from './main';

describe('Task 0 - Student Interface', () => {
  it('should create a student object', () => {
    const student: Student = { firstName: 'John', lastName: 'Doe', age: 20, location: 'New York' };
    expect(student.firstName).toBe('John');
    expect(student.location).toBe('New York');
  });
});
