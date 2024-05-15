# Todo App: React + TypeScript + Microfrontend (MF) with Module Federation

This project provides a minimal setup for a Todo App working with Module Federation

## Structure

This Micrfrontend project is divided en the following Microfrontends:

1. HOST: Container project for
2. MF-CREATE-TODO: React-ts Project containing the create Todos Functionality
3. MF-LIST-TODO:  React-ts Project containing  the Todo List Functionality

## Run Configuration Steps For HOST

1. Clone Project
2. Access /host folder
3. Run de command ```npm install```
4. Start Host  with ```npm run start``` (Running in http://localhost:8080/)

## Run Configuration Steps For MF-CREATE-TODO

1. Clone Project
2. Access /mf-create-todo folder
3. Run de command ```npm install```
4. Start Host  with ```npm run start``` (Running in http://localhost:8081/)

## Run Configuration Steps For MF-LIST-TODO

1. Clone Project
2. Access /mf-list-todo folder
3. Run de command ```npm install```
4. Start Host  with ```npm run start``` (Running in http://localhost:8082/)
