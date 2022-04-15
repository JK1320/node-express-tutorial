# node-express-tutorial project (freeCodeCamp.org)
CRUD => CREATE, READ, UPDATE, DELETE

## npm - node package manager
----* when node is installed npm(global command) is also installed with it *------ (npmjs.com)
              npm enables us to do 3 things:
-1 use our code in other projects
-2 use code written by other developers
-3 share our solutions with others

* npm calls reusable code a package
* package is a folder that contains a javascript code
* other names you will come across are: modules & dependencies
* anyone can publish any package 


>     local dependency: use it only in this particular project
>     npm i <packageName>     <= use this command to install a package

> global dependency: use it in any project
  npm install -g <packageName>        <= use this command to install a package globally
  sudo npm install -g <packageName>    (mac)

  (To uninstall a package command: npm uninstall <packageName>)

--------------
### package.json
   - manifest file (stores important info about project/package)
        to install:
   - manual approach: create package.json in the root, then create properties etc
   - npm init   <= command to install package.json
   - npm init -y (everything setup as default - skips all the questions)

-----------------
#### Nodemon
npm i nodemon -D    <= command to install nodemon at devDependencies

------------------
##### 

Had the following error while testing express route @ auth.js and solved it by using if statement with else, as I was using if statement without else (short form of if statement)
  
-- Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client --

-------------------
######
- MongoDB  Atlas (cloud database) - NoSQL              - first project Task Manager
- steps for Atlas
    * create an atlas account: sign up, create cluster (shared one), select cloud provider, No change to Cluster tier & Additional settings, cluster name as project name - no spaces, select who can access database, set up network access, go back to cluster and connect & select connect your application, copy the connection string (generated from connection) for database connection.
    * select collection, 

- mongoose installed => npm install mongoose
- .env file is to store confidential info: passwords etc then include .env file in .gitignore
- any file in gitignore is not pushed to github
