class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, scores = []) {
        super(name, age);
        this.scores = scores; 
    }

    calculateAverageScore() {
        if (this.scores.length == 0 ) {
            return 0;
        }
        const sum = this.scores.reduce((total, score) => total + score, 0);
        return Number((sum / this.scores.length).toFixed(2));
    }

    displayInfo() {
        const avg = this.calculateAverageScore();
        return `${this.introduce()} My average score is [${this.scores.join(", ")}]. Average: ${avg}`;
    }
}

const createStore = (...scores) => {
    return scores;
};
const testStudent = new Student("Khanh", 20, [8, 9, 10]);
const {name, age} = testStudent;
console.log("---4. Destructuring---");
console.log(`Extracted Name: ${name}, Extracted Age: ${age}`);


console.log("---6. Array Methods---");
const passingScores = testStudent.scores.filter(score => score >= 5);
console.log("Score >= 5 (Passing):", passingScores);
const formatScores = testStudent.scores.map(score => `${score} pts`);
console.log("Formatted Scores:", formatScores);
const totalScore = testStudent.scores.reduce((total, current) => total + current, 0);
console.log("Total Score:", totalScore);

console.log("---7. Promise ---");
const evaluationAcademicPerformance = (student) => {
    return new Promise((resolve, reject) => {
        const avg = student.calculateAverageScore();
        if (avg >= 5) {
            resolve(`Student ${student.name}  with avg ${avg} -> Excellent Student`);
        } else {
            reject(`Student ${student.name}  with avg ${avg} -> Need Improvement`);
        }
    });
};

evaluationAcademicPerformance(testStudent).then(message => console.log("Evaluation Result (Success):", message)).catch(error => console.log("Evaluation Result (Notice):", error));