class Student {
    constructor(name, studentId, subjects = []) {
        this.name = name;
        this.studentId = studentId;
        this.subjects = subjects;
    }

    // Add a subject to the student if not already present
    addSubject(subject) {
        if (!this.subjects.includes(subject)) {
            this.subjects.push(subject);
        }
    }
}

// Set to Manage Unique IDs
const uniqueStudentIds = new Set();

// Map to Associate Student IDs with Student Objects
const studentMap = new Map();

function addStudent(student) {
    try {
        // Check for duplicate ID
        if (uniqueStudentIds.has(student.studentId)) {
            throw new Error("Duplicate ID detected");
        }

        // Add the student to the system
        uniqueStudentIds.add(student.studentId);
        studentMap.set(student.studentId, student);
    } catch (error) {
        console.error("Error: " + error.message);
    }
}

// Application
const student1 = new Student("Alex", "12001", ["Math"]);
const student2 = new Student("Susan", "12002", ["Science"]);
const student3 = new Student("Emmanuel", "12002", ["History"]); // Duplicate ID
const student4 = new Student("Zaman", "12004", ["Computer Science"]);

addStudent(student1);
addStudent(student2);
addStudent(student3); // Error: "Duplicate ID detected."
addStudent(student4);

// Add subjects to students
student1.addSubject("English");
student2.addSubject("History");
student4.addSubject("Vocational Skills");

// Log all students
console.log("\nStudents in the system:");
studentMap.forEach(function (student, studentId) {
    console.log("ID: " + studentId + ", Name: " + student.name + ", Subjects: " + student.subjects.join(", "));
});

console.log("\nUnique Student IDs:");
console.log([...uniqueStudentIds]);
