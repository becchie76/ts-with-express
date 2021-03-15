/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./async.ts":
/*!******************!*\
  !*** ./async.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncSample = void 0;
class AsyncSample {
    constructor() {
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
    sampleResolve2(value) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(value);
            }, 1000);
        });
    }
    sample2() {
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
    async sample3() {
        return await this.sampleResolve2(6) * await this.sampleResolve2(10) + await this.sampleResolve2(20);
    }
    async sample4() {
        const a = await this.sampleResolve2(6);
        const b = await this.sampleResolve2(10);
        const c = await this.sampleResolve2(20);
        return a * b + c;
    }
    async sample5() {
        for (let i = 0; i < 5; i++) {
            const result = await this.sampleResolve2(i);
            console.log(result);
        }
        return 'ループ終了';
    }
}
exports.AsyncSample = AsyncSample;


/***/ }),

/***/ "./async2.ts":
/*!*******************!*\
  !*** ./async2.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncSample2 = void 0;
class AsyncSample2 {
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
        });
        this.errorHandlingAsync().catch((err) => {
            console.log(err);
        });
    }
    sampleResolve(value) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(value);
            }, 2000);
        });
    }
    sampleResolve2(value) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(value * 2);
            }, 1000);
        });
    }
    samplePromise() {
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
    async sampleAsyncAwait() {
        const [a, b] = await Promise.all([this.sampleResolve(5), this.sampleResolve(10)]);
        const c = await this.sampleResolve2(b);
        return [a, b, c];
    }
    async sampleMap() {
        const array = [5, 10, 15];
        const promiseAll = await Promise.all(array.map(async (value) => {
            return await this.sampleResolve(value) * 2;
        }));
        return promiseAll;
    }
    throwError() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    throw new Error('エラーがあったよ');
                }
                catch (err) {
                    reject(err);
                }
            }, 1000);
        });
    }
    errorHandlingPromise() {
        return this.throwError()
            .then((result) => {
            return result;
        })
            .catch((err) => {
            throw err;
        });
    }
    async errorHandlingAsync() {
        const result = await this.throwError();
        return result;
    }
}
exports.AsyncSample2 = AsyncSample2;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncSample2 = exports.AsyncSample = exports.Server = void 0;
var server_1 = __webpack_require__(/*! ./server */ "./server.ts");
Object.defineProperty(exports, "Server", ({ enumerable: true, get: function () { return server_1.Server; } }));
var async_1 = __webpack_require__(/*! ./async */ "./async.ts");
Object.defineProperty(exports, "AsyncSample", ({ enumerable: true, get: function () { return async_1.AsyncSample; } }));
var async2_1 = __webpack_require__(/*! ./async2 */ "./async2.ts");
Object.defineProperty(exports, "AsyncSample2", ({ enumerable: true, get: function () { return async2_1.AsyncSample2; } }));


/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _port, _app, _router;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Server = void 0;
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
class Server {
    constructor() {
        _port.set(this, 3000);
        _app.set(this, express_1.default());
        _router.set(this, express_1.default.Router());
        __classPrivateFieldGet(this, _app).use(express_1.default.json());
        __classPrivateFieldGet(this, _app).use(express_1.default.urlencoded({ extended: true }));
        __classPrivateFieldGet(this, _router).get('/', async (request, response) => {
            response.send('Hello World!!!!!');
        });
        __classPrivateFieldGet(this, _app).use('/', __classPrivateFieldGet(this, _router));
        __classPrivateFieldGet(this, _app).listen(__classPrivateFieldGet(this, _port), () => console.log(`listening on port http://localhost:${__classPrivateFieldGet(this, _port)}`));
    }
    get app() {
        return __classPrivateFieldGet(this, _app);
    }
}
exports.Server = Server;
_port = new WeakMap(), _app = new WeakMap(), _router = new WeakMap();


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const _1 = __webpack_require__(/*! ./ */ "./index.ts");
const app = new _1.Server().app;
new _1.AsyncSample();
new _1.AsyncSample2();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3luYy50cyIsIndlYnBhY2s6Ly8vLi9hc3luYzIudHMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxXQUFXO0lBQ3BCO1FBbUJJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTZCTyxjQUFjLENBQUMsS0FBYTtRQUNoQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLENBQUMsRUFB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QUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxtQ0FBVSxFQUFFLENBQUMsQ0FDbEUsQ0FBQztJQUNOLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCwwQ0FBaUI7SUFDckIsQ0FBQztDQUNKO0FBM0JELHdCQTJCQzs7Ozs7Ozs7Ozs7O0FDN0JELHFDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLHVEQUF1RDtBQWlDdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFFN0IsSUFBSSxjQUFXLEVBQUUsQ0FBQztBQUNsQixJQUFJLGVBQVksRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBc3luY1NhbXBsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMucmVzb2x2ZVNhbXBsZSgpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyAvLyDjgrPjg7Pjgr3jg7zjg6vooajnpLrjgYzjgqbjgrbjgY/jgarjgovjga7jgafjgrPjg6Hjg7Pjg4jjgqLjgqbjg4hcbiAgICAgICAgLy8gLy8gdGhpcy5yZWplY3RTYW1wbGUoKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gLy8gfSk7XG5cbiAgICAgICAgLy8gLy8g44Kz44Oz44OR44Kk44Or44Ko44Op44O8XG4gICAgICAgIC8vIC8vIHRoaXMucmVzb2x2ZUVycm9yKCkudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgIC8vIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIC8vIC8vIH0pO1xuXG4gICAgICAgIC8vIHRoaXMuc2FtcGxlKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgdGhpcy5zYW1wbGUyKCkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zYW1wbGUzKCkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zYW1wbGU0KCkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zYW1wbGU1KCkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBhc3luYyByZXNvbHZlU2FtcGxlKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgLy8gICAgIHJldHVybiAncmVzb2x2ZSEhJztcbiAgICAvLyB9XG5cbiAgICAvLyBwcml2YXRlIGFzeW5jIHJlamVjdFNhbXBsZSgpOiBQcm9taXNlPG5ldmVyPiB7XG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcigncmVqZWN0ISEnKTtcbiAgICAvLyB9XG5cbiAgICAvLyBwcml2YXRlIHJlc29sdmVFcnJvcigpOiBzdHJpbmcge1xuICAgIC8vICAgICByZXR1cm4gJ3Jlc29sdmVFcnJvciEhJztcbiAgICAvLyB9XG5cbiAgICAvLyBwcml2YXRlIHNhbXBsZVJlc29sdmUodmFsdWU6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlICogMik7XG4gICAgLy8gICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIC8vIHByaXZhdGUgYXN5bmMgc2FtcGxlKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZSg1KTtcbiAgICAvLyAgICAgcmV0dXJuIHJlc3VsdCArIDU7XG4gICAgLy8gfVxuXG4gICAgcHJpdmF0ZSBzYW1wbGVSZXNvbHZlMih2YWx1ZTogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhbXBsZTIoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzLnNhbXBsZVJlc29sdmUyKDUpXG4gICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbXBsZVJlc29sdmUyKDEwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICo9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbXBsZVJlc29sdmUyKDIwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNhbXBsZTMoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIoNikgKiBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKDEwKSArIGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIoMjApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc2FtcGxlNCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBhID0gYXdhaXQgdGhpcy5zYW1wbGVSZXNvbHZlMig2KTtcbiAgICAgICAgY29uc3QgYiA9IGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIoMTApO1xuICAgICAgICBjb25zdCBjID0gYXdhaXQgdGhpcy5zYW1wbGVSZXNvbHZlMigyMCk7XG4gICAgICAgIHJldHVybiBhICogYiArIGM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzYW1wbGU1KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKGkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ+ODq+ODvOODl+e1guS6hic7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBhc3luYyBzYW1wbGU2KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgLy8gICAgIGNvbnN0IGFycmF5ID0gWzcsIDEwLCAyMF07XG4gICAgLy8gICAgIGNvbnN0IHN1bSA9IGF3YWl0IGFycmF5LnJlZHVjZShhc3luYyAoc3VtLCB2YWx1ZSkgPT4ge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGF3YWl0IHN1bSArIGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIodmFsdWUpICogMjtcbiAgICAvLyAgICAgfSwgMCk7XG5cbiAgICAvLyAgICAgcmV0dXJuIHN1bTtcbiAgICAvLyB9XG59IiwiZXhwb3J0IGNsYXNzIEFzeW5jU2FtcGxlMiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2FtcGxlUHJvbWlzZSgpLnRoZW4oKFthLCBiLCBjXSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYSwgYiwgYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2FtcGxlQXN5bmNBd2FpdCgpLnRoZW4oKFthLCBiLCBjXSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYSwgYiwgYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2FtcGxlTWFwKCkudGhlbigoW2EsIGIsIGNdKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhLCBiLCBjKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lcnJvckhhbmRsaW5nUHJvbWlzZSgpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5lcnJvckhhbmRsaW5nQXN5bmMoKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgc2FtcGxlUmVzb2x2ZSh2YWx1ZTogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhbXBsZVJlc29sdmUyKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlICogMik7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhbXBsZVByb21pc2UoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgICAgICBjb25zdCBwcm9taXNlQSA9IHRoaXMuc2FtcGxlUmVzb2x2ZSg1KTtcbiAgICAgICAgY29uc3QgcHJvbWlzZUIgPSB0aGlzLnNhbXBsZVJlc29sdmUoMTApO1xuICAgICAgICBjb25zdCBwcm9taXNlQyA9IHByb21pc2VCLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxlUmVzb2x2ZTIodmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3Byb21pc2VBLCBwcm9taXNlQiwgcHJvbWlzZUNdKVxuICAgICAgICAgICAgLnRoZW4oKFthLCBiLCBjXSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBbYSwgYiwgY107XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNhbXBsZUFzeW5jQXdhaXQoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5zYW1wbGVSZXNvbHZlKDUpLCB0aGlzLnNhbXBsZVJlc29sdmUoMTApXSk7XG4gICAgICAgIGNvbnN0IGMgPSBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKGIpO1xuXG4gICAgICAgIHJldHVybiBbYSwgYiwgY107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzYW1wbGVNYXAoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgICAgICBjb25zdCBhcnJheSA9IFs1LCAxMCwgMTVdO1xuICAgICAgICBjb25zdCBwcm9taXNlQWxsID0gYXdhaXQgUHJvbWlzZS5hbGwoYXJyYXkubWFwKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZSh2YWx1ZSkgKiAyO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2VBbGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aHJvd0Vycm9yKCk6IFByb21pc2U8bmV2ZXI+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign44Ko44Op44O844GM44GC44Gj44Gf44KIJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUoJ+OCqOODqeODvOOBjOOBquOBi+OBo+OBn+OCiCcpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsaW5nUHJvbWlzZSgpOiBQcm9taXNlPG5ldmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRocm93RXJyb3IoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGVycm9ySGFuZGxpbmdBc3luYygpOiBQcm9taXNlPG5ldmVyPiB7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnRocm93RXJyb3IoKTtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIC8vIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyAgICAgdGhyb3cgZXJyO1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudGhyb3dFcnJvcigpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCIvKipcbiAqIEJhcnJlbFxuICovIFxuZXhwb3J0IHsgU2VydmVyIH0gZnJvbSAnLi9zZXJ2ZXInO1xuZXhwb3J0IHsgQXN5bmNTYW1wbGUgfSBmcm9tICcuL2FzeW5jJztcbmV4cG9ydCB7IEFzeW5jU2FtcGxlMiB9IGZyb20gJy4vYXN5bmMyJzsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gICAgcmVhZG9ubHkgI3BvcnQgPSAzMDAwO1xuICAgICNhcHAgPSBleHByZXNzKCk7XG4gICAgI3JvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG4gICAgICAgIHRoaXMuI2FwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG4gICAgICAgIHRoaXMuI3JvdXRlci5nZXQoJy8nLFxuICAgICAgICAgICAgYXN5bmMgKFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZVxuICAgICAgICAgICAgKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2VuZCgnSGVsbG8gV29ybGQhISEhIScpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLiNhcHAudXNlKCcvJywgdGhpcy4jcm91dGVyKTtcbiAgICAgICAgdGhpcy4jYXBwLmxpc3Rlbih0aGlzLiNwb3J0LCAoKSA9PlxuICAgICAgICAgICAgY29uc29sZS5sb2coYGxpc3RlbmluZyBvbiBwb3J0IGh0dHA6Ly9sb2NhbGhvc3Q6JHt0aGlzLiNwb3J0fWApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0IGFwcCgpOiBleHByZXNzLkV4cHJlc3Mge1xuICAgICAgICByZXR1cm4gdGhpcy4jYXBwO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgU2VydmVyLCBBc3luY1NhbXBsZSwgQXN5bmNTYW1wbGUyIH0gZnJvbSAnLi8nO1xuXG4vLyBjbGFzcyBNYWluIHtcbi8vICAgICByZWFkb25seSAjcG9ydCA9IDMwMDA7XG4vLyAgICAgI2FwcCA9IGV4cHJlc3MoKTtcbi8vICAgICAjcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuLy8gICAgICAgICB0aGlzLiNhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbi8vICAgICAgICAgdGhpcy4jYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5cbi8vICAgICAgICAgdGhpcy4jcm91dGVyLmdldCgnLycsXG4vLyAgICAgICAgICAgICBhc3luYyAoXG4vLyAgICAgICAgICAgICAgICAgcmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LFxuLy8gICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlXG4vLyAgICAgICAgICAgICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcbi8vICAgICAgICAgICAgICAgICByZXNwb25zZS5zZW5kKCdIZWxsbyBXb3JsZCEhISEhJyk7XG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICApO1xuXG4vLyAgICAgICAgIHRoaXMuI2FwcC51c2UoJy8nLCB0aGlzLiNyb3V0ZXIpO1xuLy8gICAgICAgICB0aGlzLiNhcHAubGlzdGVuKHRoaXMuI3BvcnQsICgpID0+XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQgaHR0cDovL2xvY2FsaG9zdDoke3RoaXMuI3BvcnR9YClcbi8vICAgICAgICAgKTtcbi8vICAgICB9XG5cbi8vICAgICBnZXQgYXBwKCk6IGV4cHJlc3MuRXhwcmVzcyB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLiNhcHA7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBuZXcgTWFpbigpLmFwcDtcblxuY29uc3QgYXBwID0gbmV3IFNlcnZlcigpLmFwcDtcblxubmV3IEFzeW5jU2FtcGxlKCk7XG5uZXcgQXN5bmNTYW1wbGUyKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==