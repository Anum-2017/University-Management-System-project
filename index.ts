class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    rollNumber: number ;
    courses: Course[] ;

    constructor(name: string, age: number, rollNumber : number) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.courses = []
    }

    registerForCourse(course: Course): void {
        this.courses.push(course);
    }
}

class Instructor extends Person {
    salary : string;
    courses: Course[];

    constructor(name: string, age: number, salary: string) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course: Course): void {
        this.courses.push(course);
      }
   }

class Course{
    id: number;
    name: string;
    Students: Student[] = [];
    instructor!: Instructor;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }


    addStudent(student: Student): void {
        this.Students.push(student);
      }
    
      setInstructor(instructor: Instructor): void {
        this.instructor = instructor;
      }
}

class Department {
    name: string;
    courses: Course[];

    constructor(name: string) {
        this.name = name
        this.courses =[];
    }
    addCourse(course: Course) {
        this.courses.push(course);
    }
}

const student1 = new Student('Anum', 26, 21357);
const student2 = new Student('Sana', 21, 18346);
const student3 = new Student('Tehreem', 21, 15486);

const instructor1 = new Instructor('Sir Hamzah', 23, "$80000");
const instructor2 = new Instructor('Miss Hira', 33, "$60000");
const instructor3 = new Instructor("Sir Ali", 35, "$70000");

const course1 = new Course(1, 'Machine Learning');
const course2 = new Course(2, 'International Economics');
const course3 = new Course(3, 'Calculus');


const department1 = new Department('Computer Science');
const department2 = new Department('Economics');
const department3 = new Department('Mathematics');

student1.registerForCourse(course1);
student2.registerForCourse(course2);
student1.registerForCourse(course3);
student3.registerForCourse(course1);

department1.addCourse(course1);
department2.addCourse(course2);
department3.addCourse(course3);


course1.addStudent(student1);
course2.addStudent(student2);
course3.addStudent(student3);
course3.addStudent(student2);


course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
course3.setInstructor(instructor3);


console.log(department3.courses[0]);
console.log(instructor1.courses);
console.log(student1.courses[0]);
console.log(course3.Students);
console.log(student1.courses);
console.log(department1.courses);

