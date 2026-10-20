let studentName = "Ananya";
let marks = 85;
let ispassed = true;
let students = ["Ananya", "sahasra", "priya"];
let student = { name: "Ananya", marks: 85 };
let result = null; 

console.log(typeof studentName);
console.log(typeof marks);
console.log(typeof ispassed);
console.log( students);
console.log(student);
console.log(result) ;






if (marks >= 35) {
    console.log("student passed");
} else {
    console.log("student failed");
}





for (let i = 0; i < students.length; i++)
{
    console.log(students[i]);
}



function checkMarks(marks){
    if (marks >= 35) {
        return "pass";
    } else {
        return "Fail";
    }
}

console.log(checkMarks(85));
console.log(checkMarks(20));

const calculateDouble = (number) => {
    return number * 2;
};

console.log(calculateDouble(5));
console.log(calculateDouble(10));




const studentRecords = [
    { id: 1, name: "Ananya", marks: 85 },
    { id: 2, name: "Ravi", marks: 72 },
    { id: 3, name: "Priya", marks: 92 },
    { id: 4, name: "Kiran", marks: 30 },
    { id: 5, name: "Sneha", marks: 65 }
];

console.log(studentRecords);




const highScorers = studentRecords.filter((student) => {
    return student.marks >= 70;
});

console.log(highScorers);



const foundStudent = studentRecords.find((student) => {
    return student.id === 3;
});

console.log(foundStudent);


const totalMarks = studentRecords.reduce((total, student) => {
    return total + student.marks;
}, 0);

const averageMarks = totalMarks / studentRecords.length;

console.log("Total marks:", totalMarks);
console.log("Average marks:", averageMarks);





const studentSummary = studentRecords.map((student) => {
    return {
        studentName: student.name,
        score: student.marks
    };
});

console.log("Student summary:", studentSummary);



const anyFailed = studentRecords.some((student) => {
    return student.marks < 35;
});

console.log("Any student failed?", anyFailed);



const sortedStudents = [...studentRecords].sort((a, b) => {
    return a.name.localeCompare(b.name);
});

console.log("Alphabetical order:", sortedStudents);





const { name, marks: studentMarks } = studentRecords[0];

console.log("Name:", name);
console.log("Marks:", studentMarks);


const [firstStudent, secondStudent] = studentRecords;

console.log(firstStudent.name);
console.log(secondStudent.name);



const moreStudents = [
    ...studentRecords,
    { id: 6, name: "Rahul", marks: 78 }
];

console.log("Original count:", studentRecords.length);
console.log("New count:", moreStudents.length);




const studentData = {
    id: 1,
    name: "Ananya",
    marks: 85
};

const jsonString = JSON.stringify(studentData);
console.log("JSON string:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed name:", parsedStudent.name);


const studentProfile = {
    name: "Ananya",
    address: {
        city: "Hyderabad"
    }
};

console.log(studentProfile.address?.city);
console.log(studentProfile.contact?.phone);


const studentNickname = null;

const displayName = studentNickname ?? "Unknown Student";

console.log(displayName);