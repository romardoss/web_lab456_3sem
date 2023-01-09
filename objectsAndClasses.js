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
console.log(User.fullName());

//обмін полями між користувачем та студентом
student1.name = User.name;
student1.surname = User.surname;
User.speciality = student1.speciality;
User.group = student1.speciality;
//ще треба копіювання методів

//
student1.name = 'Natasha';
alert(student1.name);
alert(User.name);
console.log(student1.name);

//додавання у прототип студента нової функції
Student.prototype.showInfo = function(){
    console.log(this.speciality);
    console.log(this.group);
};

//перевірка нової функції
student1.showInfo();

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



class StudentClass {

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

let Romardo = new StudentClass('Romardo', 'Milos', '122', 'TR-11');
Romardo.showInfo();

class SuccessfullnessClass extends StudentClass {

    constructor(name, surname, speciality, group,
        test, tryNumber, scores){
        super(name, surname, speciality, group);
        //продрвження конструктора
    }
}