const http = require("http");

function testRegistration() {

    const student = JSON.stringify({
        name: "Test Student",
        email: "test@example.com",
        phone: "9876543210",
        course: "B.Tech"
    });

    const options = {
        hostname: "localhost",
        port: 3000,
        path: "/register",
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(student)
        }
    };

    const request = http.request(options, (response) => {

        let data = "";

        response.on("data", (chunk) => {
            data += chunk;
        });

        response.on("end", () => {

            if (response.statusCode === 200) {

                console.log("TEST PASSED");
                console.log("Registration API is working");
                console.log("Response:", data);

            } else {

                console.log("TEST FAILED");
                console.log("Status Code:", response.statusCode);

                process.exit(1);
            }
        });
    });

    request.on("error", (error) => {

        console.log("TEST FAILED");
        console.log("Server is not running");
        console.log(error.message);

        process.exit(1);
    });

    request.write(student);
    request.end();
}

testRegistration();