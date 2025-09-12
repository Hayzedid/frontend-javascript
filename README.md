```markdown
# frontend-javascript

0x04-TypeScript exercises scaffold for ALX projects.

This folder contains the 0x04-TypeScript exercises (task_0 .. task_5). Each task folder includes the TypeScript sources under `js/` and the build configuration files (`package.json`, `tsconfig.json`, `webpack.config.js`) where required.

Quick start (per task)

1. Open a terminal and change into the task folder, for example:

```powershell
cd "C:\Users\USER\Documents\Alx Projects\frontend-javascript\0x04-TypeScript\task_0"
```

2. Install dev dependencies (only required once per task):

```powershell
npm install
```

3. Build the task with webpack:

```powershell
npm run build
```

Verification: a successful build prints "webpack compiled successfully" and the TypeScript compiler should show "No type errors found." in the terminal output.

Tasks and important files

- `task_0/js/main.ts` — Student interface, two students, and DOM table renderer.
- `task_1/js/main.ts` — Teacher interface (readonly names, required fields, index signature), Directors extension, printTeacher, StudentClass.
- `task_2/js/main.ts` — Director/Teacher interfaces and classes, createEmployee, isDirector, executeWork, Subjects string literal + teachClass.
- `task_3/js/interface.ts` — RowID and RowElement types.
- `task_3/js/crud.js` and `task_3/js/crud.d.ts` — mock CRUD library and ambient declarations.
- `task_3/js/main.ts` — Usage of the ambient module and CRUD functions.
- `task_4/js/subjects/*` — Subject, Teacher, and language-specific classes (Cpp, Java, React). `task_4/js/main.ts` exports constants and demonstrates usage.
- `task_5/js/main.ts` — Branded MajorCredits/MinorCredits and sum functions.

Notes

- Each task was implemented and locally built using webpack + ts-loader; builds completed without TypeScript errors at the time of the last verification.
- If you clone this repo on a new machine, run `npm install` inside each task folder you want to build.
- If you want, I can add a root-level script to run builds for all tasks in sequence, or add simple jest tests for each task.

---

Generated/updated: 2025-09-12


0x04-TypeScript exercises scaffold for ALX projects.
