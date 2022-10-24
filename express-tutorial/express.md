# Express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

In layman terms, Express.js is a web application framework that is built on top of Node.js. It provides a minimal interface with all the tools required to build a web application. Express.js adds flexibility to an application with a huge range of modules available on npm that you can directly plug into Express as per requirement. It helps in easy management of the flow of data between server and routes in the server-side applications. It was developed by **TJ Holowaychuk** and was released in the market on **22nd of May, 2010**. Formerly it was managed by IBM but currently, it is placed under the stewardship of the Node.js Foundation incubator.

### **Features of Express.js**
1. Express quickens the development pace of a web application.
2. It also helps in creating mobile and web application of single-page, multi-page, and hybrid types
3. Express can work with various templating engines such as Pug, Mustache, and EJS.
4. Express follows the Model-View-Controller (MVC) architecture.
5. It makes the integration process with databases such as MongoDB, Redis, MySQL effortless.
6. Express also defines an error-handling middleware.
7. It helps in simplifying the configuration and customization steps for the application.

<br><br>

# Installing
Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.
```bash
$ mkdir myapp
$ cd myapp
```

Use the npm init command to create a package.json file for your application.
```bash
$ npm init
```

This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:
```
entry point: (index.js)
```
Enter **app.js**, or whatever you want the name of the main file to be. If you want it to be **index.js**, hit RETURN to accept the suggested default file name.

Now install Express in the **myapp** directory and save it in the dependencies list. For example:
```bash
$ npm install express
```

To install Express temporarily and not add it to the dependencies list:
```bash
$ npm install express --no-save
```

<br><br>

# Express.js Fundamental Concepts

### **1. Routing and HTTP Methods**
Routing refers to the process of determining a specific behavior of an application. It is used for defining how an application should respond to a client request to a particular route, path or URI along with a particular HTTP Request method. Each route can contain more than one handler functions, which is executed when the user browses for a specific route. Below is the structure of Routing in Express:

```
app.METHOD(PATH, HANDLER)
```

* app is just an instance of Express.js. You can use any variable of your choice.
* METHOD is an HTTP request method such as get, set, put, delete, etc.
* PATH is the route to the server for a specific webpage
* HANDLER is the callback function that is executed when the matching route is found.

There are four main HTTP methods that can be supplied within the request. These methods help in specifying the operation requested by the user. Below table lists down all methods along with their explanations:

![common http methods](../resources/img/HTTP_methods.png?raw=true)

Below is an example showing usage of all the HTTP methods.
```javascript
var express = require('express');
const app = express();

app.use(express.json());
 
app.get('/', function (req, res) {
    console.log("GET Request Received");
    res.send(' Welcome to Express.js Tutorial!/h2>');
})
 
app.listen(5000, () => console.log(`Listening on port 5000..`));

```