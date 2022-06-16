# MERN-Blog
![Image description](/screenshots/s2.png)
## Table of contents

- [Introduction](#introduction)
- [Technology](#technology)
- [Features](#features)
- [Roadmap](#roadmap)
- [Database Models](#database)
- [Run](#run)
- [Screenshots](#screenshots) 
- [License](#license)

## Introduction

A blog app built using the MERN stack (MongoDB, Express js, React js, and Node js).As a challenge to myself in this stack after I learned the basics of the technologies.

N.B: 03/2021 was the last time I touched this code the current status of this code is terrible, it's not suitable for any use (probably except for making a list of bad practices to avoid). But since then I have grown too much as a developer, I'm planning to refactor the app using what I learned about UI/UX, clean code, and best practices... to create a production-ready blog app

## Technology

The main technologies used to build this application are:

- Node.js
- MongoDB
- Express.js 
- React.js
- Redux
- QuilJs

## Features

A blog app with the following features.
- View all posts.
- View one post's content by clicking on more button.
- Create a new post.
- View/Edit/delete posts.
- Signup.
  

## Roadmap
- Code refactoring(removing console.logs, improving the UI/UX...)
- Add the login functionality
- Add the Roles functionality
## Database

All the models can be found in the models directory.

### User Schema:

 - name: { type: String, required:  true },
  - email: { type: String, required: true },
 - password: { type: String, required: true },
  - id: { type: String },
  - role: {type: String},
  - posts: [String]

### Post Schema:

-  title: String,
-  descreption: String,
- content: String,
- author: String,
- thumbnail: String,
- tags: [String],
- selectedFile: String,
- background: String,
-  createdAt: {
        type: Date,
        default: new Date,
    }
## Run
### Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)
- CONNECTION_URL:  the connection string of your MongoDB Atlas database(edit in `server/.env`.)


notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

### Client-side usage(PORT: 3000)
```terminal
$ cd client   // go to client folder
$ npm i       // npm install packages
$ npm start // run it locally
```


### Server-side usage(PORT: 8000)

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm start // run it locally
```



## Screenshots

![Image description](/screenshots/s1.png)
![Image description](/screenshots/s2.png)
![Image description](/screenshots/s3.png)
![Image description](/screenshots/s4.png)
![Image description](/screenshots/s5.png)


## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
