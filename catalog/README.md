# AngularCxTemplate

This project is a template for Angular applications that will be deployed as Liferay Client Extensions. It is based on the Angular CLI and uses the Liferay JS Toolkit to build the final bundle.

# Repository preparation

After cloning the repository, you must adapt it to your project. The following steps are required:
* Search `catalog` in all files and replace it with the name of your project. You can do a global search and replace in your IDE.
* Go to file `build-luffa/LCP.json` and replace the id field with the name your project will have in Liferay Cloud. This ID cannot contain symbols.
* Update this README file with the information of your project, removing this section when done.

# Pre-requisites

* node v18.19.1
* Run `npm ci` to install the dependencies

# Available Scripts

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via Jest.
Run `npm run coverage` to execute the unit tests with test coverage.

# Development methodology

The branching methodology used is [Trunk based development](https://www.atlassian.com/es/continuous-delivery/continuous-integration/trunk-based-development).

To contribute to the project, create a merge request from a feature branch to the main branch. The merge request must be reviewed by another developer and go through the CI pipeline before being merged.

# Repository structure

* `src/`: Contains the source code of the application.
* `build-luffa/`: Contains the configuration and static files required to package the application as LUFFA format (Client Extension).

# Configuration

## Router and navigation

* Routes are defined in `app-module.ts`.
* AppComponent is the main component of the application and contains the router-outlet.
* First navigation is disabled to avoid a navigation that changes the browser url. AppComponent is responsible for the first navigation skipping the location change if required.
* If you need to use the browser location, you can remove the `skipLocationChange` option in the `navigate` method of the AppComponent and in the app links in component1.html and component2.html.

## Environment configuration

* The same build is expected to be used in all environments. 
* The file `src/environments/environment.ts` contains the build environment variables and default values for runtime.
* The configuration property `configUrl` is used to fetch the configuration values before starting the application.
* The recommended way to provide this configuration is with Liferay Objects, where a custom Object `customconfigs` is created to store the configuration values for each client extension. 
* This object contains two properties:
    * `clientExtensionName` to store the Id of the client extension. Use the custom html tag for this value.
    * `config` to store the configuration values. This property is a JSON string with the configuration values.
* The configuration is then fetched by filtering by the `clientExtensionName` property. The host will be always the relative path, since this application will be running under the Liferay domain.
* defaultConfig contains the default values to be used in case the configuration is not available (i.e. localhost development).

## Translation

* The translation is done using the ngx-translate library and language files are located in `src/assets/i18n/`.
* Language change is not handled in the application. Instead, the container (i.e: Liferay) must provide the language to be used. This language will be the default language for ngx-translate.
* `environment.defaultLanguageId` contains the default language Id to be used in case the language provided is not found (error, or standalone development).



