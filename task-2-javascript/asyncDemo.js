
const studentPromise = new Promise((resolve) => {
    resolve({ id: 1, name: "Ananya", marks: 85 });
});

studentPromise.then((student) => {
    console.log("Student:", student);
});




async function getStudentInfo() {
    const student = await studentPromise;
    return student;
}

getStudentInfo().then((student) => {
    console.log("Student information:", student);
});




async function checkStudent() {
    try {
        const student = await studentPromise;
        console.log("Student found:", student.name);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

checkStudent();



