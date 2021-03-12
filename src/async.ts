export class AsyncSample {
    constructor() {
        // this.resolveSample().then(value => {
        //     console.log(value);
        // });

        // // コンソール表示がウザくなるのでコメントアウト
        // // this.rejectSample().catch(err => {
        // //     console.log(err);
        // // });

        // // コンパイルエラー
        // // this.resolveError().then(value => {
        // //     console.log(value);
        // // });

        // this.sample().then(result => {
        //     console.log(result);
        // });

        this.sample2().then((value) => {
            console.log(value);
        });

        this.sample3().then((value) => {
            console.log(value);
        });

        this.sample4().then((value) => {
            console.log(value);
        });

        this.sample5().then((value) => {
            console.log(value);
        });
    }

    // private async resolveSample(): Promise<string> {
    //     return 'resolve!!';
    // }

    // private async rejectSample(): Promise<never> {
    //     throw new Error('reject!!');
    // }

    // private resolveError(): string {
    //     return 'resolveError!!';
    // }

    // private sampleResolve(value: number): Promise<number> {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             setTimeout(() => {
    //                 resolve(value * 2);
    //             }, 2000);
    //         })
    //     })
    // }

    // private async sample(): Promise<number> {
    //     const result = await this.sampleResolve(5);
    //     return result + 5;
    // }

    private sampleResolve2(value: number): Promise<number> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(value);
            }, 1000);
        })
    }

    private sample2(): Promise<number> {
        let result = 0;
        return this.sampleResolve2(5)
            .then(value => {
                result += value;
                return this.sampleResolve2(10);
            })
            .then(value => {
                result *= value;
                return this.sampleResolve2(20);
            })
            .then(value => {
                result += value;
                return result;
            });
    }

    private async sample3(): Promise<number> {
        return await this.sampleResolve2(6) * await this.sampleResolve2(10) + await this.sampleResolve2(20);
    }

    private async sample4(): Promise<number> {
        const a = await this.sampleResolve2(6);
        const b = await this.sampleResolve2(10);
        const c = await this.sampleResolve2(20);
        return a * b + c;
    }

    private async sample5(): Promise<string> {
        for (let i = 0; i < 5; i++) {
            const result = await this.sampleResolve2(i);
            console.log(result);
        }
        return 'ループ終了';
    }

    // private async sample6(): Promise<number> {
    //     const array = [7, 10, 20];
    //     const sum = await array.reduce(async (sum, value) => {
    //         return await sum + await this.sampleResolve2(value) * 2;
    //     }, 0);

    //     return sum;
    // }
}