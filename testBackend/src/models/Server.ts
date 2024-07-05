import fs from 'fs';
import cors from 'cors';
import http from 'http';
import colors from 'colors';
import { createServer } from 'https';
import routesApi from '../routes/routesapi';
import express, { Express } from 'express';


class Server {
    private app: Express;
    private server: any;
    public port: number;

    constructor() {
        this.app = express();
        this.port = parseInt( `${ process.env.PORT_NODE_APP }` );
        this.server = http.createServer( this.app );
    }

    middlewares() {
        this.app.use( express.urlencoded( { extended: false } ) );
        this.app.use( express.json() );
        this.app.use( cors( { origin: '*' } ) );
        this.app.use( '/api', routesApi );
    }

    execute() {
        this.middlewares();
        this.server.listen( this.port, () => { console.log( `Server Settings ready in http://${process.env.IP_NODE_APP}:${ this.port }`.rainbow );} );
    }

}

export default Server;