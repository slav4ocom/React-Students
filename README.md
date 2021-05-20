# React Students

This is web platform for students. Actually it is Single Page Application (SPA) equivalent of Web Students platform, but instead of using ASP .NET CORE MVC and Entity Framework it uses React.js Node.js express web server module, and soon database will be moved on Mongo DB provider. The goal is to implement MERN stack.

At this initial point of development it uses in browser Babel compiler. Now for tests I use existing MS SQL database.

use http://localhost:8080/react to open start page of project

You need to install <b>express</b> and <b>mssql</b> packages for current testing.
If you want to develop project, instalation of babel compiler is needed.
 Also MSSQL database server is needed to be running for tests with database, but this is not critical and you can still view functionality of web site anyway.

# 18.may.2021 

Finally I succeed to make babel compiler precompile <b>src</b> .js source files on server side.
Browser loads precompiled files from <b>dist</b> folder.

<b>This project uses only one web server for backend. Project is configured to automatically compile .js source files in /src with babel compiler</b>

Also browser loads dependencies locally from <b>include</b> folder. This is <i>react.development.js</i> and <i>react-dom.development.js</i> actually downloaded from https://unpkg.com/ 

Also I achieve asynchronous retrieve homeworks data, using AJAX. It is represented as JSON at one "div" element. Next task is to create real table with homeworks data retrieved from MS SQL.
