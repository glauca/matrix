### NPM

#### Getting Started

##### [Installing Node.js and updating npm](https://docs.npmjs.com/getting-started/installing-node)

    Installing Node.js

        Node comes with npm installed so you should have a version of npm.

    Updating npm

        npm install npm@latest -g

        Test: Run npm -v. The version should be higher than 2.1.8.

##### [Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

##### [Installing npm packages locally](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

    > npm install <package_name>
    > npm install lodash

##### [Using a package.json](https://docs.npmjs.com/getting-started/using-a-package.json)

    "dependencies": these packages are required by your application in production
    "devDependencies": these packages are only needed for development and testing

    > npm install <package_name> --save
    > npm install <package_name> --save-dev

##### [Updating local packages](https://docs.npmjs.com/getting-started/updating-local-packages)

    run npm update in the same directory as your package.json file.

##### [Uninstalling local packages](https://docs.npmjs.com/getting-started/uninstalling-local-packages)

    > npm uninstall lodash

    To remove it from the dependencies in package.json, you will need to use the save flag:
    > npm uninstall --save lodash
    > npm uninstall --save-dev lodash

##### [Installing npm packages globally](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)

    > npm install -g <package_name>

##### [Updating global packages](https://docs.npmjs.com/getting-started/updating-global-packages)

    > npm update -g <package_name>

    To update all global packages, type:
    > npm update -g
    > npm outdated

##### [Uninstalling global packages](https://docs.npmjs.com/getting-started/uninstalling-global-packages)

    > npm uninstall -g <package_name>

##### [Creating Node.js modules](https://docs.npmjs.com/getting-started/creating-node-modules)

