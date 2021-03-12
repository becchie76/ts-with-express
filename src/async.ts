export class Async {
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
    }

    private async resolveSample(): Promise<string> {
        return 'resolve!!';
    }

    private async rejectSample(): Promise<never> {
        throw new Error('reject!!');
    }

    private resolveError(): string {
        return 'resolveError!!';
    }

    private sampleResolve(value: number): Promise<number> {
        return new Promise(resolve => {
            setTimeout(() => {
                setTimeout(() => {
                    resolve(value * 2);
                }, 2000);
            })
        })
    }

    private async sample(): Promise<number> {
        const result = await this.sampleResolve(5);
        return result + 5;
    }

    private sampleResolve2(value: number): Promise<number> {
        return new Promise(resolve => {
            setTimeout(() => {
                setTimeout(() => {
                    resolve(value);
                }, 1000);
            })
        })
    }

    private sample2(): Promise<number> {
        let result = 0;
        return this.sampleResolve2(5)
            .then(value => {
                result += value;
                console.log(`No.1`);
                return this.sampleResolve2(10);
            })
            .then(value => {
                result *= value;
                console.log(`No.2`);
                return this.sampleResolve2(20);
            })
            .then(value => {
                result += value;
                console.log(`No.3`);
                return result;
            });
    }
}