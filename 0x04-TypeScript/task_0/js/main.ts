export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 20, location: 'London' };
const student2: Student = { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Paris' };

const studentsList: Student[] = [student1, student2];

// Render a table using vanilla JS
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((s: Student) => {
  const tr: HTMLTableRowElement = document.createElement('tr');
  const tdName: HTMLTableCellElement = document.createElement('td');
  const tdLocation: HTMLTableCellElement = document.createElement('td');

  tdName.textContent = s.firstName;
  tdLocation.textContent = s.location;

  tr.appendChild(tdName);
  tr.appendChild(tdLocation);
  tbody.appendChild(tr);
});

table.appendChild(tbody);

// Attach to body if running in browser environment
if (typeof document !== 'undefined' && document.body) {
  document.body.appendChild(table);
}

export { studentsList };
