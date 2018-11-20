# Gbm Challenge por Carlos Barrera

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Installing Modules

Run `npm install` to install the modules that are needed for this project.

## Development server & CORS issue

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**Important** During this development I found a Cross Origin error, usually it is solved by enabling it in the server but in this case, I used a proxy in order to get access to the data in localhost. Due to the previously stated, the command to launch the dev server must be  `ng serve --proxy-config proxy.conf.json` or simply `npm start`

## Graph

The graph component was developed with [plotly.js](https://plot.ly/javascript/)

## Authentication and Deployment

For authentication and deployment I used [Firebase](https://console.firebase.google.com) as my BaaS provider.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
