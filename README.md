# Angular + React App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3 as an example of how to have an Angular and a React app co-mingled using [@angular-architects/module-federation - npm](https://www.npmjs.com/package/@angular-architects/module-federation).

Here's a [The Microfrontend Revolution: Module Federation in Webpack 5 - ANGULARarchitects](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/)


## Development server

In the root directory, first run `npm install`, then run `npm run all` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

In the react-app directory, in a new command line instance, first run `npm install`, then  `npm start` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

I've added a workaround/hack to allow Angular Router Navigation to be called from React with a global window state. See the app.component.ts file and NavigateLinkToAngular component.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
