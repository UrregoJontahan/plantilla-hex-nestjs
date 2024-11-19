export class User{
    private id: number;
    private name: string;
    private lastName: string;
    private email: string;
    private phone: number;
    
    constructor(id:number, name: string, lastName: string, email: string, phone: number){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }

    public setId (id){
        this.id = id;
    }

    public getId(){
        return this.id;
    }

    public setName (name){
        this.id = name;
    }

    public getName (){
        return this.name;
    }

    public setLastName(lastName){
        this.lastName = lastName;
    }

    public getLastName (){
        return this.lastName;
    }

    public setEmail (email){
        this.email = email;
    }

    public getEmail (){
        return this.email;
    }

    public setPhone (phone){
        this.phone = phone;
    }

    public getPhone (){
        return this.phone;
    }

}