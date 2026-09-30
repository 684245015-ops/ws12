export
    class User {
    constructor(private id: number, private name: string, private email:string) {}
    public getId(){return this.id};
    public getName(){return this.name};
    public getEmail(){return this.email};
    public getInfo():string{
        return `User: ${this.id} ${this.name} ${this.email}`;
    }
}