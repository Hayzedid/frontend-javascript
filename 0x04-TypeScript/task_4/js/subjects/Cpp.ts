import { Subject } from './Subject';

declare module './Subject' {
  interface Teacher {
    experienceTeachingC?: number;
  }
}

export class Cpp extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

  getAvailableTeacher(): string {
    if (!this.teacher || (this.teacher as any).experienceTeachingC === undefined || (this.teacher as any).experienceTeachingC <= 0) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher!.firstName}`;
  }
}
