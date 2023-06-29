(()=>{

    //No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

class Person{
    public name: string;
    public gender: string;
    public birthdate: Date;

    constructor(name: string, gender:Gender, birthdate: Date){
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
    }
}

/*type Gender2 = 'M'|'F';

class Person2{

    constructor(
        public name: string,
        public gender:Gender2, 
        public birthdate: Date){
      
    }
}*/

/*const newPerson = new Person ('Fernando', 'M', new Date('1985/10/21'));
console.log(newPerson);

const newPerson2 = new Person2 ('Alonso', 'M', new Date('1999/12/21'));
console.log(newPerson2);*/

 class User extends Person {
        
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super( name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthdate              : Date
        ) {
            super(email, role, name, gender, birthdate );
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fernando@google.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings });


})();