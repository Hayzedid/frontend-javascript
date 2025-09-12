import * as CRUD from './crud';
import { RowElement } from './interface';

describe('Task 3 - CRUD Operations', () => {
  it('should insert a row', () => {
    const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };
    const id = CRUD.insertRow(row);
    expect(typeof id).toBe('number');
  });
});
