# node-express-tutorial project (freeCodeCamp.org)


## npm - node package manager
----* when node is installed npm(global command) is also installed with it *------ (npmjs.com)
              npm enables us to do 3 things:
- use our code in other projects
- use code written by other developers
- share our solutions with others

* npm calls reusable code a package
* package is a folder that contains a javascript code
* other names you will come across are: modules & dependencies
* anyone can publish any package 


* local dependency: use it only in this particular project
* npm i <packageName>     <= use this command to install a package

* global dependency: use it in any project
  npm install -g <packageName>        <= use this command to install a package globally
  sudo npm install -g <packageName>    (mac)

--------------
### package.json
   - manifest file (stores important info about project/package)
        to install:
   - manual approach: create package.json in the root, then create properties etc
   - npm init   <= command to install package.json
   - npm init -y (everything setup as default - skips all the questions)


