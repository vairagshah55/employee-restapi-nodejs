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

//export 
module.exports = {
    createEmployee
}