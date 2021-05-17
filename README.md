# React Students

This is web platform for students. Actually it is Single Page Application (SPA) equivalent of Web Students platform, but instead of using ASP .NET CORE MVC and Entity Framework it uses React.js Node.js express web server module, and soon database will be moved on Mongo DB provider. The goal is to implement MERN stack.

At this initial point of development it uses in browser Babel compiler. Now for tests I use existing MS SQL database.

use http://localhost:8080/react to open start page of project

# 18.may.2021 

Finally I succeed to make babel compiler precompile <b>src</b> .js source files on server side.

Also browser loads dependencies locally from <b>include</b> folder

Also I achieve asynchronous retrieve homeworks data. It is represented as JSON at one "<div>" element. Next task is to create real table with homeworks data retrieved from MS SQL.