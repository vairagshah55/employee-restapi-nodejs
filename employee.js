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

const updateEmployeebyID = (req, res) => {
    console.log("update in")
    let id = parseInt(req.params.id)

    const { name } = req.body
    pool.query(`UPDATE  employees SET name = $1 WHERE id = $2 `, [name, id], (err, result) => {
        if (err) {
            throw err
        }
        if (result) {
            res.json({
                data: "data updated successfully"
            })
        }
    })
}

const deleteEmployeebyID = (req, res) => {
    let id = parseInt(req.params.id);

    console.log(id);

    pool.query(`DELETE FROM employees WHERE id = $1`, [id], (err, result) => {
        if (err) {
            throw err
        }
        if (result) {
            res.json({
                data: "deleted succesfully"
            })
        }
    })
}

//export 
module.exports = {
    createEmployee,
    getEmployees,
    getEmployeebyID,
    updateEmployeebyID,
    deleteEmployeebyID,
}