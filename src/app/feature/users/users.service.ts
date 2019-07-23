import { User } from 'src/app/_models/user';


export class UserService {
    data: User[];
    constructor() { 
        this.data=[
            {id:1,name:"ahmed",email:"a@test.com",phoneNumber:4353453543,status:"active",password:"123"},
            {id:2,name:"omar",email:"a@test.com",phoneNumber:302636722,status:"active",password:"12345"},
            {id:3,name:"ali",email:"c@test.com",phoneNumber:82736,status:"soft_deleted",password:"123"},
            {id:4,name:"tha'er",email:"t.m@gui.com",phoneNumber:57100,status:"active",password:"123"},
            {id:5,name:"noha",email:"n@info.com",phoneNumber:190025,status:"soft_deleted",password:"123"},
            {id:6,name:"zeyad",email:"z@help.com",phoneNumber:6485701,status:"active",password:"123"},
        ]
    }


    getAll(): User[] {
        return this.data
    }

    getById(id: Number): User {
        return this.data.find(u => u.id === id)
    }

    getByEmailAndPassword(email: String, password: String): Boolean {
        let validUser: Boolean;
        let user = this.data.find(u => u.email === email && u.password === password);
        console.log(user)
        if (user) {
            validUser = true;
        }
        else {
            validUser = false;
        }
        console.log(validUser)
        return validUser;

    }

    add(user: User) {
        console.log(this.data.length);
        user.id = this.data.length + 1;
        this.data.push(user);
    }
   
    update(user: User) {
        console.log(user)
        const i = this.data.indexOf(this.getById(user.id));
        console.log(i);
        this.data[i] = user;
    }

    delete(id: Number) {
        const i = this.data.findIndex(u => u.id === id);
        this.data.splice(i, 1);
    }
}