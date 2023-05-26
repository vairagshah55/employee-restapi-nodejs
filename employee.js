const Pool = require("pg").Pool

//TODO 
const pool = new Pool({
    user: "postgres", //"postgres"
    host: 'localhost',
    database: "postgres-api",
    password: " ", // space
    port: 5432
})

const createEmployee = (req, res) => {

    // res.send("hello")

    const { name, email } = req.body;

    pool.query('INSERT INTO employees (name,email) VALUES ($1, $2)  RETURNING *',
        [name, email],
        (err, result) => {
            if (err) {
                console.log(err)
                throw err
            }

            res.status(200).json({
                msg: "data created",
                data: result.rows[0] //first result
            });
        });
};


const getEmployees = (req, res) => {

    pool.query(`SELECT * FROM employees`, (err, result) => {
        if (err) {
            // console.log(err)
            throw err;
        }
        else {
            // console.log(result)
            res.json({
                data: result.rows
            })
        }
    })
}

const getEmployeebyID = (req, res) => {
    console.log("in check")

    let id = parseInt(req.params.id)

    pool.query(`SELECT * FROM employees WHERE id = $1`, [id], (err, result) => {
        if (err) {
            throw err
        }
        if (res) {
            res.json({
                data: result.rows
            })
        }
    })
}

//export 
module.exports = {
    createEmployee,
    getEmployees,
    getEmployeebyID,
}