# Todo App: React + TypeScript + Microfrontend (MF) with Module Federation

This project provides a minimal setup for a Todo App working with Module Federation

## Structure

This Microfrontend project is divided in the following Microfrontends:

1. HOST: Container project for MF
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

## Final Result

Access in the browser to http://localhost:8080/ 

![screencapture-localhost-8080-2024-05-14-18_14_01](https://github.com/debiig92/mf-react-todo-ts/assets/32922410/0dcef9d3-a449-432d-aba7-5b7fd89208d2)


