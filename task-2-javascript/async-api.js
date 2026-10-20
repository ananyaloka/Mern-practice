
async function fetchStudent() {
    try {
        console.log("Loading student data...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch student data");
        }

        const student = await response.json();

        console.log("Student loaded:", student.name);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
fetchStudent();
