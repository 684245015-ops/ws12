import { BaseDAO } from "./BaseDAO";
import { Student } from "./Student";


export class StudentDAO extends BaseDAO{
    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            studentcode TEXT NOT NULL UNIQUE,
            fullname TEXT NOT NULL,
            gpa NUMERTC NOT NULL
            )
        `)
    }
    public insert(studentcode:string, fullname:string, gpa:number): boolean{
        const stmt = this.db.prepare(
            "INSERT INTO students(studentcode, fullname, gpa) VALUES (?,?,?)");
        const result = stmt.run(studentcode, fullname, gpa);
        return result.changes > 0;
    }
    public findAII(): Student []{
        const stmt = this.db.prepare(`SELECT * FROM students`);
        const rows = stmt.all() as {id: number, studentcode: string, fullname:string, gpa: number}[];
        return rows.map(row => new Student(row.id, row.studentcode, row.fullname, row.gpa));
    }
}
