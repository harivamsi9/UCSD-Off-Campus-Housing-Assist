# UCSD-Off-Campus-Housing-Assist

## How to create the DB (manual)
* Download PostgreSQL v15 from https://www.postgresql.org/download/
* Install it with default configurations (typical user is "postgres"). Write down the password asked in the process and the port of the database (which could be typically 5432).
* After installation, open postgres with pgAdmin and connect with your password
* Connect to server PostgreSQL 15
<p align="center">
  <img src="https://user-images.githubusercontent.com/48451191/219546831-9ab5ab85-b938-4abc-9e5b-652645117e00.png">
</p>

* Double click in Databases -> Create -> Database...
<p align="center">
  <img src="https://user-images.githubusercontent.com/48451191/219547470-7f5b4a7c-db94-43b3-98bb-8ab5c920fe7c.png">
</p>

* Type the name "G15" and then click "Save"
<p align="center">
  <img src="https://user-images.githubusercontent.com/48451191/219547670-15956000-3888-4858-842e-b4a8bbbb5122.png">
</p>

* Right click in the newly created "G15" database, then go to Query Tool
* Copy paste the ./database/creation.sql file into the query tool and execute it to create all the tables
* Copy paste the ./database/insertion.sql file into the query tool and execute it to populate all the tables
* Done!


## How to start the frontend app and run tests

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `install Node.js locally`

In the project directory, you can run:

### `npm install`:
run this command to install all libraries that frontend need.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `press a`
press a under the test runner to run all tests

### `npm install react-router-dom@6`
install react-router for switching between different pages

