# Deployment

In this activity we will deploy the Budget Tracker application to Heroku with MySQL provisioning.

## Instructions

* To deploy the Budget Tracker application to Heroku make sure to perform the following:

  * Initialize the project folder as a git repo.

  * Create a Heroku app for the Budget Tracker application.

  * Add and commit your changes before pushing up to Heroku.

### Hints

* If your deployment fails, run `heroku logs` while in the project directory. This should print all of the logs produced from the failed deployment. Usually the issue can be found at the start of any errors.

# Deploying a MongoDB App on Heroku

## Instructions
1. With Terminal / Git Bash, navigate to your app's directory.
2. Make sure your directory is `git tracked`, if it isn't run this command: `git init`
3. Make sure you have created a Heroku app and linked your repository to it.  If you don't, run this command: `heroku create` in your app's directory.
4. For your database (DB), it's recommended that you use AtlasDB, a mongo database that is not a Heroku provisioned resource.
    * Log into the [MongoDB](https://www.mongodb.com/) web site.
        * If you haven't created an account, go ahead and create one.
    * Click "Atlas" Tab @'Navigation Bar'.
    * Click "Clusters" @'Left Hand Column'.
    * Click "Build A Cluster" Button (Create A New Cluster).
    * Click "Create A Cluster" (Shared Clusters/FREE).
    * Cloud Provider & Region: Click "AWS" Button @'Page Center'.
    * Select a Recommended Region.
    * Click "Create Cluster" Button @'Footer'.
    * Wait 1-3 Minutes for your cluster's creation.
    * Click "CONNECT" Button @'SANDBOX/Cluster0 Panel'.
        * Click "Allow Access From Anywhere" Button @'Whitelist a connection IP address'.
        * Enter Username AND Click "Autogenerate Secure Password" Button @'Password Field'. (NOTE!: Cut+Pase or store you username/password somewhere so you can use it later for the connection string!)
        * Click "Create Database User" Button.
    * Click "Choose A Connection Method" Button.
    * Click "Connect Using MongoDB Compass" Button.
    * Click "Copy" Button.
    * The copied connection string should have the following form (update the username, password and replace dbname with "budget").

    ```
    mongodb+srv://<username>:<password>@cluster0.ffma0.mongodb.net/<dbname>
    ```

    * Log into the [Heroku](https://www.heroku.com/) web site.
    * Select your application.
     * Select the Settings Tab.
     * Click the "Reveal Config Vars" button in the "Config Vars" section. Create the MONGODB_URI variable and assign it the connection string from AtlasDB.  MONGODB_URI is the variable that Heroku places in the environment of your application. Your back-end application should import this so it can connect to the provisioned server instance.

5. Update "scripts" to the following in the `package.json` file:
```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "nodemon server.js"
  },
  ```
6. Make sure you have this dependency installed: `if-env`
7. Make sure you have this dependency installed as a development dependency: `nodemon`
```shell
npm i --save-dev nodemon
```
8. `git add .`
9. `git commit -m "some meaningful commit message"`
10. `git push heroku master`
