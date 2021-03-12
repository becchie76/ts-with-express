import express from 'express';
import { AsyncSample, AsyncSample2 } from './';

class Main {
    readonly #port = 3000;
    #app = express();
    #router = express.Router();

    constructor() {
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: true }));

        this.#router.get('/',
            async (
                request: express.Request,
                response: express.Response
            ): Promise<void> => {
                response.send('Hello World!!!!!');
            },
        );

        this.#app.use('/', this.#router);
        this.#app.listen(this.#port, () =>
            console.log(`listening on port http://localhost:${this.#port}`)
        );
    }

    get app(): express.Express {
        return this.#app;
    }
}

export default new Main().app;

new AsyncSample();
new AsyncSample2();