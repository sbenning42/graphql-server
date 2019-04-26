import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import schema from './graphql';

export class Server {

    app = express();

    constructor() {
        dotenv.config();
        const db = mongoose.connect(`mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`, { useNewUrlParser: true, useCreateIndex: true });
        this.app.use(
            "/graphql",
            cors(),
            bodyParser.json(),
            expressGraphQL({ schema, graphiql: true, context: { db } })
        );
    }

    run() {
        this.app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    }

}
