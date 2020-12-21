<div align="left">
<h1>Invoice Tracker App</h1>

<p>This repo contains code for the website at client and backend. Backend is created using Express.js and deployed to heroku. Frontend is created using React.js and pure css. MongoDB is used as Backend</p>

</div>

## Introduction

# User
  This Invoice Tracker App allows **USER** to login or signup. And to perform CRUD operation.
  1. Login or sign up at User page,(existing user email: **abc@gmail.com** and password: **12345**) will redirect to Home page.
  2. Click on "pending" bottom to view "Pending Invoices".
  3. Click on individual invoices, to show options (Update or Delete) {only work in "Pending" invoices}
  4. Click on "Add" floating button, to create new invoice.
  5. Click on "Logout", will logout user.  
    
 # Admin
  This Invoice Tracker App allows **ADMIN** to login. And to perform Approve/Reject operation.
  1. Login at User page using email: **admin@gmail.com** and password: **admin**, will redirect to Home page.
  2. Click on "pending" bottom to view "All Pending Invoices".
  3. Click on individual invoices, to show options (Approve or Reject) {only work in "Pending" invoices}
  5. Click on "Logout", will logout user.

## Getting Started

1. To run the frontend locally-

   ```bash
   cd client
   yarn install
   yarn start
   ```

   > This starts the frontend locally, with the backend using herkou api provided.

2. To run the backend locally-

   ```bash
   yarn install
   node index.js
   ```
   > This starts the backend locally. 
