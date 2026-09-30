export class Student {
    constructor(private id: number, private studentCode: string, private fullName:string, private gpa:number) {}
    public getId(){return this.id};
    public getstudentCode(){return this.studentCode};
    public getFullName(){return this.fullName};
    public getGpa(){return this.gpa};
    public getInfo():string{
        return `Student: ${this.id} ${this.studentCode} ${this.fullName} ${this.gpa}`;
    }
    public isHonors(): boolean {
        if(this.gpa >=3.5) return true;
        else return false;
    }
}