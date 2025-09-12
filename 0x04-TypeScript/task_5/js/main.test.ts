import { sumMajorCredits, sumMinorCredits } from './main';

describe('Task 5 - Credit Summation', () => {
  it('should sum major credits', () => {
    const major1 = { credits: 3 } as any;
    const major2 = { credits: 4 } as any;
    expect(sumMajorCredits(major1, major2).credits).toBe(7);
  });

  it('should sum minor credits', () => {
    const minor1 = { credits: 2 } as any;
    const minor2 = { credits: 3 } as any;
    expect(sumMinorCredits(minor1, minor2).credits).toBe(5);
  });
});
