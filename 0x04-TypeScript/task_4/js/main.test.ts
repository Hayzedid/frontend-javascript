import { cpp, java, react, cTeacher } from './main';

describe('Task 4 - Subjects and Teachers', () => {
  it('should return requirements and available teacher for C++', () => {
    cpp.setTeacher(cTeacher);
    expect(cpp.getRequirements()).toBe('Here is the list of requirements for Cpp');
    expect(cpp.getAvailableTeacher()).toBe('Available Teacher: John');
  });
});
