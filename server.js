const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("."));

app.post("/register", (req, res) => {

    const student = req.body;

    fs.readFile("student.json", "utf8", (err, data) => {

        let students = [];

        if (!err && data) {
            students = JSON.parse(data);
        }

        students.push(student);

        fs.writeFile(
            "student.json",
            JSON.stringify(students, null, 2),
            (err) => {

                if (err) {
                    return res.status(500).json({
                        message: "Data could not be saved"
                    });
                }

                res.json({
                    message: "Registration successful"
                });
            }
        );
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});