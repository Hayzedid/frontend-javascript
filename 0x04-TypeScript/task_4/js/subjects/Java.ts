import { Subject } from './Subject';

declare module './Subject' {
  interface Teacher {
    experienceTeachingJava?: number;
  }
}

export class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (!this.teacher || (this.teacher as any).experienceTeachingJava === undefined || (this.teacher as any).experienceTeachingJava <= 0) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher!.firstName}`;
  }
}
