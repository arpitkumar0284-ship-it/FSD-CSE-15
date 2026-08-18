function register(callback) {
    setTimeout(() => {
        console.log("Register here");
        callback();
    }, 1000);
}

function login(callback) {
    setTimeout(() => {
        console.log("Login here");
        callback();
    }, 5000);
}

function getData(callback) {
    setTimeout(() => {
        console.log("Fetch data from DB");
        callback();
    }, 6000);
}

function displayData(callback) {
    setTimeout(() => {
        console.log("Display data");
        callback();
    }, 3000);
}
// Async execution using callbacks
register(() => {
    login(() => {
        getData(() => {
            displayData(() => {
                console.log("Call another app");
            });
        });
    });
});