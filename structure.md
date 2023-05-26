my-project/
├── node_modules/
├── config/
│   ├── utils.js
├── components/
├── pages/
│   ├── profile.js
│   ├── index.js
├── public/
│   ├── styles.css
├── routes/
│   ├── alerts.js
│   ├── notifications.js
│   ├── profile.js
│   ├── index.js
├── app.js
├── routes.js
├── package.json
├── package-lock.




---------------------------------------------------------------


RCSM layered architecture [ Route, Controller, Service, Model]

R- Router Layer - contains API [ App Programming interface ] routes of the app. it's only job to return a response from the server

S- Service Layer - handles the business logic of the app

DAL - Date Access Layer - has access to the database to create , delete or edit data


MAIN Points

HTTP Logic layered -> Routes + controller 
Business Logic layered -> services + models / data access

Routes- End Points
      - Routing logic ( Engaging Controller )

Controllers - Validation of request body
            - calling services -- 1point need to check
            - response handling
            - Error handling

Services - Business Logic of the system
         - Interfacing the DB

Models/Data Access - Database modeling  (Schema , query and co )

Basic Folder/ File strcuture
- Routes
- Controllers
- Services
- Models
- Config
- Middleware
- Utils
- Tests
-- .env
-- entry file (inde.js or server.js)


NodeJS layered architecture

1 - presentation Layer front end
2 - Router Layer API
3 - Service Layer business logic
4 - Data Access Layer database