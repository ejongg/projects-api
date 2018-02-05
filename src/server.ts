import * as express from 'express';
import * as logger from 'morgan';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { Request, Response } from 'express';

import { routes } from './routes';

let app = express();

app.set('port', process.env.PORT || 8000);

app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());

routes(app);

app.listen(app.get('port'), () => {
    console.log(`App listening at port: ${app.get('port')}`);
});