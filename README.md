Papirfly UK Development Task
============================

Welcome
-------
Welcome to the Papirfly UK Development Task!  Below are instructions to help get you started and outline you on the objectives of the task.

Required Software
-----------------
You will need the following software installed on your workstation in order to complete the task.  Setting up this software will vary between PC/Mac, please consult the official documentation for support.

* [NodeJS](https://nodejs.org/en/) - Terminal commands via a JavaScript runtime.  Once installed make sure that the path to the binary files has been added to your system environment so that they can be called anywhere from the command line.

Recommended Software
--------------------
The following software is highly recommended.  You will need a modern web browser, code editor, terminal, and image editing software to complete the task.

* [Chrome](https://www.google.co.uk/chrome) - A modern web browser that supports ECMAScript 5 (EC5).
* [Visual Studio Code](https://code.visualstudio.com/) - An excellent code editor that works best with TypeScript.
* [GIT Bash](https://gitforwindows.org/) - A better terminal for Windows that emulates Linux/Unix command line syntax.  
* [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html) - Our preferred image editing software.  A free trial version is available.
* [GIMP](https://www.gimp.org/) - A free alternative to Photoshop for image editing.

Tools & Frameworks
------------------
The development task uses the following tools and frameworks.  If you don't have prior knowledge of these, please consult the official documentation in order to complete the development task.

* [Bootstrap](https://getbootstrap.com/) - Front-end component library (HTML/CSS only).
* [CreateJS](https://createjs.com/) - A framework for working with the HTML5 Canvas element.
* [jQuery](https://jquery.com/) - HTML DOM manipulation library.
* [TypeScript](https://www.typescriptlang.org/) - A typed subset of JavaScript.

Getting Started
---------------
1. Extract the development task source files to your development folder.  Ensure the full path to the source files does not include folders with spaces in the name.
2. Open a terminal window (Hint: This can be done directly in VSCode).
3. In the terminal enter the command `npm install -g grunt-cli` to install the [Grunt](https://gruntjs.com/) task runner globally.
4. In the terminal enter the command `npm install`.  This will install the necessary plugins for development into a `node_modules` folder.
5. In the terminal enter the command `grunt build`.  This will generate the JavaScript files from the TypeScript source files and bundle them into a single file.
6. In the terminal enter the command `grunt serve`.  This will create a local web server and automatically open the URL in your default browser.  This will continue to run until you force break the operation or close the terminal window.
7. Open a second terminal window enter the command `grunt watch`.  This will watch for changes in the source files and automatically generate the JavaScript files.  This will continue to run until you force break *(CTRL + C / Cmd + C)* the operation or close the terminal window.  You may have to restart this operation when you create new files.
8. Open your code editor and begin!
9. As you make changes to the code and save, you may notice the terminal window running `grunt watch` update.  This is the task compiling the TypeScript code into JavaScript.  It takes a few seconds every time you save your changes.  Manually refresh your browser window to see the changes in action.

*NOTE: If using VSCode the `serve` and `watch` grunt tasks should run automatically via the **Run Tasks** command.*

TypeScript
----------
TypeScript is a typed subset of JavaScript.  This enables you to assign a type to variables and function returns like other mature programming languages.  Developers with experience working with ActionScript, Java, or C# should find similarities in the syntax.  Additionally, plain untyped JavaScript syntax will work too!

The official TypeScript site has a quick tutorial that is worth reading for those new to the syntax.  You can find that here: [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

Objectives
----------
Ultimately, you need to update the existing source files so that the output matches the supplied design `design/development_task_end.psd`.  A strong attention to detail is required as well as clean efficient code that uses best practices to be understood in a wider development team.

* Update the logo to use `logo_acme_rebrand.png`.
* Update the headline copy to **Creating Lasting Partnerships**.
* Add a horizontal divide line.  Match the color in the design.
* Create `BucketContainer` class extending CreateJS `Container` class, and move the bucket **image**, **header**, and **body** display objects into that class from the page.  This class will be a reusable display object as there will need to be up to 3 buckets on the page.
* Add two more bucket elements with the headlines **PRODUCTION** and **SUPPORT**, to match the design.
* Space the bucket elements with a gutter of **18px**.
* Add stars to the bottom of the page so that there is total of **four stars**.  Right align the stars and space them **10px** apart horizontally.
* Update `updateSizeProperties()` method on the page so that when the `input[name="stars"]` field receives input it updates the number of stars visible on the page between **1** minimum and **4** maximum.
* Ensure a top margin of **48px**, bottom margin of **60px**, and side margins of **36px**.

Submission
----------
Once you've completed the development task, compress all files & folders (except the `node_modules` folder) in a ZIP archive and email to [Rich Nelson<rich@papirfly.com>](mailto:rich@papirfly.com).