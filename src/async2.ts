import e from "express";

export class AsyncSample2 {
    constructor() {
        this.samplePromise().then(([a, b, c]) => {
            console.log(a, b, c);
        });

        this.sampleAsyncAwait().then(([a, b, c]) => {
            console.log(a, b, c);
        });

        this.sampleMap().then(([a, b, c]) => {
            console.log(a, b, c);
        });

        this.errorHandlingPromise().catch((err) => {
            console.log(err);
        })

        this.errorHandlingAsync().catch((err) => {
            console.log(err);
        })
    }

    private sampleResolve(value: number): Promise<number> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(value);
            }, 2000);
        })
    }

    private sampleResolve2(value: number): Promise<number> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(value * 2);
            }, 1000);
        })
    }

    private samplePromise(): Promise<number[]> {
        const promiseA = this.sampleResolve(5);
        const promiseB = this.sampleResolve(10);
        const promiseC = promiseB.then(value => {
            return this.sampleResolve2(value);
        });

        return Promise.all([promiseA, promiseB, promiseC])
            .then(([a, b, c]) => {
                return [a, b, c];
            });
    }

    private async sampleAsyncAwait(): Promise<number[]> {
        const [a, b] = await Promise.all([this.sampleResolve(5), this.sampleResolve(10)]);
        const c = await this.sampleResolve2(b);

        return [a, b, c];
    }

    private async sampleMap(): Promise<number[]> {
        const array = [5, 10, 15];
        const promiseAll = await Promise.all(array.map(async (value) => {
            return await this.sampleResolve(value) * 2;
        }));

        return promiseAll;
    }

    private throwError(): Promise<never> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    throw new Error('エラーがあったよ');
                    // resolve('エラーがなかったよ');
                } catch (err) {
                    reject(err);
                }
            }, 1000);
        });
    }

    private errorHandlingPromise(): Promise<never> {
        return this.throwError()
            .then((result) => {
                return result;
            })
            .catch((err) => {
                throw err;
            });
    }

    private async errorHandlingAsync(): Promise<never> {
        // try {
        //     const result = await this.throwError();
        //     return result;
        // } catch (err) {
        //     throw err;
        // }
        const result = await this.throwError();
        return result;
    }
}