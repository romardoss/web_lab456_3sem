//створення користувача
const User = {
    name: 'Roman',
    surname: 'Berehun',
    fullName : function() {
        return this.name + " " + this.surname
    },
}

//функція (конструктор) для створення студентів
function Student(speciality, group){
    this.speciality = speciality;
    this.group = group;
    this.add = function(parameter, newInfo){
        this[parameter] = newInfo;
    };
    this.change = function(parameter, newInfo){
        if(!(this[parameter] === undefined)){
            this[parameter] = newInfo;
        }
        else{
            console.log('The parameter is not defined')
        }
    };
    this.delete = function(){
        //this[parameter] = undefined;
        delete this[parameter];
    }
}

//створення студента за допомогою функції
var student1 = new Student(122, 'TR-11');

//вивід на екран повного імені користувача
console.log('');
console.log(User.fullName());
console.log('');

//обмін полями між користувачем та студентом
student1.name = User.name;
student1.surname = User.surname;
User.speciality = student1.speciality;
User.group = student1.speciality;
User.add = student1.add;
User.change = student1.change;
User.delete = student1.delete;

//перевірка обміну властивостями
User.add('testParameter', 'valueOfAddedParameter');
console.log(User.testParameter);
student1.name = 'Romeo';
console.log(student1.name);
console.log(User.name);
console.log('');

//додавання у прототип студента нової функції
Student.prototype.showInfo = function(){
    console.log(this.speciality);
    console.log(this.group);
};

//перевірка нової функції
student1.showInfo();
console.log('');

//метод для створення об'єкту успішності з наслідуванням полей від об'єкту студента
function Successfullness(speciality, group, test, tryNumber, scores){
    Student.call(this, speciality, group);

    if(tryNumber != scores.length){
        throw new Error('Кількість оцінок не співпадає з кількістю спроб');
    }

    this.test = test;
    this.tryNumber = tryNumber;
    this.scores = scores;
    this.averageScore = function(){
        let average = 0;
        for(i = 0; i < scores.length; i++){
            average += scores[i];
        }
        average = average / scores.length;
        return average;
    }
}

//наслідування функцій від об'єкту студента
Successfullness.prototype = Object.create(Student.prototype);

//додаткові налаштування для правильного наслідування функцій
Object.defineProperty(Successfullness.prototype, 'constructor', {
    value: Successfullness,
    enumerable: false,
    writable: true,
});

//перезапис методу для відображення інформації
Successfullness.prototype.showInfo = function(){
    /*for(var key in this){
        console.log(`${key} має значення ${this[key]}`);
    }*/
    console.log(this.speciality);
    console.log(this.group);
    console.log(this.test);
    console.log(this.tryNumber);
    console.log(this.scores);
    console.log(this.averageScore);
}

//створення об'єкту успішності
var success = new Successfullness(122, 'TR-11', 'Grid CSS', 3, [6, 10, 8]);

//використання методів з об'єкту успішності
success.showInfo();
console.log(success.averageScore());
console.log('');


//Клас студента
class StudentClass {

    _SchoolNumber = 2;
    #PhoneNumber = 123456789;

    setSchoolNumber(number){
        if(typeof(number) === typeof(0)){
            this._SchoolNumber = number;
        }
        else{
            console.log('Invalid school number');
        }
    }
    getSchoolNumber(){
        return `School № ${this._SchoolNumber}`;
    }

    setPhoneNumber(phone){
        if(phone.length != 9){
            console.log('Invalid phone number');
        }
        else{
            this.#PhoneNumber = phone;
        }
    }
    getPhoneNumber(){
        return `+380${this.#PhoneNumber}`;
    }

    constructor(name, surname, speciality, group){
        this.name = name;
        this.surname = surname;
        this.speciality = speciality;
        this.group = group;
    }

    add(parameter, newInfo){
        this[parameter] = newInfo
    }

    change(parameter, newInfo){
        if(!(this[parameter] === undefined)){
            this[parameter] = newInfo;
        }
        else{
            console.log('The parameter is not defined')
        }
    }

    delete(parameter){
        //this[parameter] = undefined;
        delete this[parameter];
    }

    showInfo(){
        console.log(this.name);
        console.log(this.surname);
        console.log(this.speciality);
        console.log(this.group);
    }
}

//Перевірка методів класу студента
let Romardo = new StudentClass('Romardo', 'Milos', '122', 'TR-11');
Romardo.showInfo();
Romardo.delete('name');
console.log(Romardo.name);
Romardo.add('name', 'new name');
console.log(Romardo.name);
console.log('');

//перевірка гетерів та сетерів
console.log(Romardo.getPhoneNumber());
Romardo.setPhoneNumber('987654321');
console.log(Romardo.getPhoneNumber());
Romardo.setPhoneNumber('9874321');
console.log(Romardo.getPhoneNumber());
Romardo.setSchoolNumber(10);
console.log(Romardo._SchoolNumber);
console.log('');

//клас класа успішності, що унаслідується від класу студента
class SuccessfullnessClass extends StudentClass {

    constructor(name, surname, speciality, group,
        test, tryNumber, scores){
        super(name, surname, speciality, group);
        this.test = test;
        this.tryNumber = tryNumber;
        this.scores = scores;
    }

    showInfo(){
        super.showInfo();
        console.log(this.test);
        console.log(this.tryNumber);
        console.log(this.scores);
    }

};

//перевірка методів класу успішності, включно з унаслідуваними
var AndrewSuccess = new SuccessfullnessClass('Andrew', 'Shevchenko', 'chemistry', 'TR-11', 
'analytical chemistry', 2, [5, 3]);
AndrewSuccess.showInfo();
AndrewSuccess.add('favouriteGame', 'tanchiki');
console.log(AndrewSuccess.favouriteGame);
