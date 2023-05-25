const express = require("express") // basic server express start
const app = express()
const PORT = 5000

//import employee
const dbEmp = require("./employee")

//dotenv configuration
const dotenv = require("dotenv")
dotenv.config()


//middleware set
app.use(express.json())

app.get("/", (req, res) => {
    res.send("nodeJS express rest api with postgreSQL")
})

app.post('/example', (req, res) => {
    // Extract data from the request body
    const { name, age } = req.body;

    // Perform any necessary actions with the received data
    // ...

    // Send a response back to the client
    res.send('POST request received');
});


// const dbEmp = {
//     createEmployee: (req, res) => {
//         // Retrieve employee data from the request body
//         const { name, age } = req.body;

//         // Perform necessary actions to create the employee, such as saving it to a database
//         // ...

//         // Send a response back to the client
//         res.send('Employee created successfully');
//     }
// };

// Define the route for handling POST requests to "/add"
app.post('/add', dbEmp.createEmployee);


// //TODO ERROR CHECK
// app.post("/add", dbEmp.createEmployee)

app.get('/user', (req, res) => {
    console.log("eVital demo")
    res.send("eVital demo")
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))