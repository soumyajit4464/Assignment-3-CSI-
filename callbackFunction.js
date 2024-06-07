// Simulating an asynchronous function to fetch user data from an API
function fetchUserData(callback) {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
        const userData = { id: 1, username: "Soumyajit_Biswas", email: "soumyajit400@gmail.com" };
        callback(null, userData);
    }, 1000);
}

// Simulating an asynchronous function to process user data
function processUserData(userData, callback) {
    // Simulating data processing delay with setTimeout
    setTimeout(() => {
        // Adding additional information to user data
        userData.fullname = "Soumyajit Biswas";
        callback(null, userData);
    }, 1000);
}

// Function to display user data
function displayUserData(userData, callback) {
    // Simulating display delay with setTimeout
    setTimeout(() => {
        console.log("User ID:", userData.id);
        console.log("Username:", userData.username);
        console.log("Email:", userData.email);
        console.log("Full Name:", userData.fullname);
        callback();
    }, 1000);
}

// Function to handle errors
function handleError(error) {
    console.error("Error:", error);
}

// Callback hell version: fetch, process, and display user data
fetchUserData((fetchError, userData) => {
    if (fetchError) {
        handleError(fetchError);
    } else {
        processUserData(userData, (processError, processedUserData) => {
            if (processError) {
                handleError(processError);
            } else {
                displayUserData(processedUserData, (displayError) => {
                    if (displayError) {
                        handleError(displayError);
                    } else {
                        console.log("User data displayed successfully.");
                    }
                });
            }
        });
    }
});