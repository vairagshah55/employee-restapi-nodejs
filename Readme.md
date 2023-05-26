Tutorial name : Build Restful API With NodeJS, Express And PostgreSQL 
REST API using  nodejs, express and postgresql
REST API--[RESTful API is an interface that two computer systems use to exchange information securely over the internet]
--------------------------------------------------------------------------------

requirements- 
nodejs [ version checked 16.14.2]

--------------------------------------------------------------------------------

postgresql done [ error solve -- PgAdmin: Package 'pgAdmin4' has no installation candidate ]

--------------------------------------------------------------------------------

ERROR Name - unable to connect to server: connection  failed 
 fatal  password authentication failed for user postgres 
 connection to server localhost , port failed : password 
  authentication failed for user   postgres 
{ERROR RESOLVE}
[ changes username = postgres and password = space for PostgreSQL]

--------------------------------------------------------------------------------

commands for postgres terminal
  "\list" [name of all databases]
  "\c postgres-api" [ you are now coonected with postgres-api table]
  "\dt;" tables names

--------------------------------------------------------------------------------

  Project install first command "npm init -y " 

--------------------------------------------------------------------------------

npm i express pg nodemon [node module and lock.json]

--------------------------------------------------------------------------------

npm i dotenv

--------------------------------------------------------------------------------

app.js

--------------------------------------------------------------------------------

Package.json changes
Line 7 test is replace with start

--------------------------------------------------------------------------------

server start with 5000 port
error - josn not found 
issue resolve - correct json

--------------------------------------------------------------------------------

"client thunder" extention to check response message

--------------------------------------------------------------------------------

database connection in
employee.js

--------------------------------------------------------------------------------





