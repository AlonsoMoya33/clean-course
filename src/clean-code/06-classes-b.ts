(() => {

    //No aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';
    type Role = 'Admin' | 'User';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }


    class Person {

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
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

    interface UserProps {
        birthdate: Date,
        email: string,
        gender: Gender
        name: string,
        role: Role,
    }

    class User extends Person {

        public lastAccess: Date;
        public email: string;
        public role: Role;

        constructor({ email, role, name, gender, birthdate }: UserProps) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
    }

    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : Role;
        workingDirectory: string;
    }
    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ birthdate, email, gender, lastOpenFolder, name, role, workingDirectory }: UserSettingsProps) {
            super({ birthdate, email, gender, name, role });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
    workingDirectory:       '/usr/home',
    lastOpenFolder:         '/home',
    email:                  'fernando@google.com',
    role:                   'Admin',
    name:                   'Fernando',
    gender:                 'M',
    birthdate:              new Date('1985-10-21')
});

console.log({ userSettings });

    /*class UserSettings extends User {
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

    console.log({ userSettings });*/


})();