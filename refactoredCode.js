// Simulating an asynchronous function to fetch user data from an API
function fetchUserData() {
    return new Promise((resolve, reject) => {
        // Simulating API call delay with setTimeout
        setTimeout(() => {
            const userData = { id: 1, username: "Soumyajit_Biswas", email: "soumyajit400@gmail.com" };
            resolve(userData);
        }, 1000);
    });
}

// Simulating an asynchronous function to process user data
function processUserData(userData) {
    return new Promise((resolve, reject) => {
        // Simulating data processing delay with setTimeout
        setTimeout(() => {
            // Adding additional information to user data
            userData.fullname = "Soumyajit Biswas";
            resolve(userData);
        }, 1000);
    });
}

// Function to display user data
function displayUserData(userData) {
    return new Promise((resolve, reject) => {
        // Simulating display delay with setTimeout
        setTimeout(() => {
            console.log("User ID:", userData.id);
            console.log("Username:", userData.username);
            console.log("Email:", userData.email);
            console.log("Full Name:", userData.fullname);
            resolve();
        }, 1000);
    });
}

// Async function to fetch, process, and display user data
async function fetchProcessAndDisplayUserData() {
    try {
        const userData = await fetchUserData();
        const processedUserData = await processUserData(userData);
        await displayUserData(processedUserData);
        console.log("User data displayed successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

// Calling the async function to execute the process
fetchProcessAndDisplayUserData();