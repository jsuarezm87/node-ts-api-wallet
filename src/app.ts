import * as dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log( '2.APP_FOO', process.env.APP_FOO);


import express = require('express');
import { loadControllers } from 'awilix-express';
import loadContainer from './container';

const app: express.Application = express();

// JSON Support
app.use(express.json());

// Containers 
loadContainer( app );

// asociar los controladores
app.use( loadControllers(
    'controllers/*.ts',
    { cwd: __dirname }
));

export { app };


// Inyeccion de dependencia
// import { TestService } from './services/test.service';
// const testService = container.resolve<TestService>('testService');
// console.log( testService.get() );
 