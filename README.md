# predstock frontend

This is the React frontend that goes with the [predstock API backend](https://github.com/ricardo-tavares-santos/predstock-api). 

It uses Bootstrap styles and reactstrap, which creates Bootstrap components, to create a responsive data table that displays all data from a table in a database. It has a modal form for adding and editing items, a delete and edit button in each item row, and a button to download the entire database table into a CSV file.

It uses react-csv to create the CSV download button.

## Instructions

**1. Clone this repo**

```
git clone https://github.com/ricardo-tavares-santos/predstock-frontend.git
```

**2. NPM install React and dependencies**

```
npm install
```

**3. Start**

```
npm start
```

Cors is setup to allow requests from localhost:3001 (backend should be running on Port 3000). This will need to be changed when in production or if you are running your frontend from a different port in dev.
