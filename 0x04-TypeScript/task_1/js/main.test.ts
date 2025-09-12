import { Teacher } from './main';

describe('Task 1 - Teacher Interface', () => {
  it('should create a teacher object', () => {
    const teacher: Teacher = { firstName: 'Jane', lastName: 'Smith', fullTimeEmployee: true, location: 'London' };
    expect(teacher.firstName).toBe('Jane');
    expect(teacher.fullTimeEmployee).toBe(true);
  });
});
