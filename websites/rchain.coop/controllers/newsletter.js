const pg = require('pg');

//Tokenswap Form Validation
function formValidation (req) {
    var errors = [];

    //email
    req.check('email').isEmail({
        min: 2
    });
    var errorcheck = req.validationErrors();
    if (errorcheck) {
        errors.push("Please enter a valid email address");
    }
    console.log(errors);
    return errors;
}

//Save email submission to DB
function saveSubmission  (req) {
    //open DB connection
    var pool = new pg.Pool({
        user: 'admin',
        host: '127.0.0.1',
        database: 'postgres',
        password: 'XXXXXXXX',
        port: '5432'
    });
    
    var name = [req.body.email];
    var sql = "INSERT INTO newsletter(email) VALUES($1)";
    //Save to DB and close connection
    pool.query(sql, name, (err, res) => {
        console.log(err, res);
        pool.end();
    });
    return;
}

module.exports.formValidation = formValidation;
module.exports.saveSubmission = saveSubmission;
