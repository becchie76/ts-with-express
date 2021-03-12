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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./async */ "./async.ts"), exports);
__exportStar(__webpack_require__(/*! ./async2 */ "./async2.ts"), exports);


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
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
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const _1 = __webpack_require__(/*! ./ */ "./index.ts");
const _2 = __webpack_require__(/*! ./ */ "./index.ts");
class Main {
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
_port = new WeakMap(), _app = new WeakMap(), _router = new WeakMap();
exports.default = new Main().app;
new _1.AsyncSample();
new _2.AsyncSample2();


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3luYy50cyIsIndlYnBhY2s6Ly8vLi9hc3luYzIudHMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE1BQWEsV0FBVztJQUNwQjtRQW1CSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE2Qk8sY0FBYyxDQUFDLEtBQWE7UUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixDQUFD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Q0FBQyxHQUFHLENBQUMsc0NBQXNDLG1DQUFVLEVBQUUsQ0FBQyxDQUNsRSxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksR0FBRztRQUNILDBDQUFpQjtJQUNyQixDQUFDO0NBQ0o7O0FBRUQsa0JBQWUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFFOUIsSUFBSSxjQUFXLEVBQUUsQ0FBQztBQUNsQixJQUFJLGVBQVksRUFBRSxDQUFDOzs7Ozs7Ozs7OztBQ3BDbkIscUM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBc3luY1NhbXBsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLnJlc29sdmVTYW1wbGUoKS50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyAvLyDjgrPjg7Pjgr3jg7zjg6vooajnpLrjgYzjgqbjgrbjgY/jgarjgovjga7jgafjgrPjg6Hjg7Pjg4jjgqLjgqbjg4hcclxuICAgICAgICAvLyAvLyB0aGlzLnJlamVjdFNhbXBsZSgpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgLy8gLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgLy8gLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIC8vIOOCs+ODs+ODkeOCpOODq+OCqOODqeODvFxyXG4gICAgICAgIC8vIC8vIHRoaXMucmVzb2x2ZUVycm9yKCkudGhlbih2YWx1ZSA9PiB7XHJcbiAgICAgICAgLy8gLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAvLyAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zYW1wbGUoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2FtcGxlMigpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zYW1wbGUzKCkudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNhbXBsZTQoKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2FtcGxlNSgpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGFzeW5jIHJlc29sdmVTYW1wbGUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIC8vICAgICByZXR1cm4gJ3Jlc29sdmUhISc7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhc3luYyByZWplY3RTYW1wbGUoKTogUHJvbWlzZTxuZXZlcj4ge1xyXG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcigncmVqZWN0ISEnKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIHJlc29sdmVFcnJvcigpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiAncmVzb2x2ZUVycm9yISEnO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHByaXZhdGUgc2FtcGxlUmVzb2x2ZSh2YWx1ZTogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSAqIDIpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGFzeW5jIHNhbXBsZSgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZSg1KTtcclxuICAgIC8vICAgICByZXR1cm4gcmVzdWx0ICsgNTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIHNhbXBsZVJlc29sdmUyKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhbXBsZTIoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGVSZXNvbHZlMig1KVxyXG4gICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGVSZXNvbHZlMigxMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCAqPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbXBsZVJlc29sdmUyKDIwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzYW1wbGUzKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIoNikgKiBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKDEwKSArIGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIoMjApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2FtcGxlNCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGNvbnN0IGEgPSBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKDYpO1xyXG4gICAgICAgIGNvbnN0IGIgPSBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKDEwKTtcclxuICAgICAgICBjb25zdCBjID0gYXdhaXQgdGhpcy5zYW1wbGVSZXNvbHZlMigyMCk7XHJcbiAgICAgICAgcmV0dXJuIGEgKiBiICsgYztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhbXBsZTUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKGkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ+ODq+ODvOODl+e1guS6hic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBhc3luYyBzYW1wbGU2KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAvLyAgICAgY29uc3QgYXJyYXkgPSBbNywgMTAsIDIwXTtcclxuICAgIC8vICAgICBjb25zdCBzdW0gPSBhd2FpdCBhcnJheS5yZWR1Y2UoYXN5bmMgKHN1bSwgdmFsdWUpID0+IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGF3YWl0IHN1bSArIGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIodmFsdWUpICogMjtcclxuICAgIC8vICAgICB9LCAwKTtcclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHN1bTtcclxuICAgIC8vIH1cclxufSIsImV4cG9ydCBjbGFzcyBBc3luY1NhbXBsZTIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zYW1wbGVQcm9taXNlKCkudGhlbigoW2EsIGIsIGNdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGEsIGIsIGMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNhbXBsZUFzeW5jQXdhaXQoKS50aGVuKChbYSwgYiwgY10pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYSwgYiwgYyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2FtcGxlTWFwKCkudGhlbigoW2EsIGIsIGNdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGEsIGIsIGMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9ySGFuZGxpbmdQcm9taXNlKCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGluZ0FzeW5jKCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYW1wbGVSZXNvbHZlKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhbXBsZVJlc29sdmUyKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlICogMik7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYW1wbGVQcm9taXNlKCk6IFByb21pc2U8bnVtYmVyW10+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlQSA9IHRoaXMuc2FtcGxlUmVzb2x2ZSg1KTtcclxuICAgICAgICBjb25zdCBwcm9taXNlQiA9IHRoaXMuc2FtcGxlUmVzb2x2ZSgxMCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZUMgPSBwcm9taXNlQi50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxlUmVzb2x2ZTIodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3Byb21pc2VBLCBwcm9taXNlQiwgcHJvbWlzZUNdKVxyXG4gICAgICAgICAgICAudGhlbigoW2EsIGIsIGNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW2EsIGIsIGNdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhbXBsZUFzeW5jQXdhaXQoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgICAgIGNvbnN0IFthLCBiXSA9IGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnNhbXBsZVJlc29sdmUoNSksIHRoaXMuc2FtcGxlUmVzb2x2ZSgxMCldKTtcclxuICAgICAgICBjb25zdCBjID0gYXdhaXQgdGhpcy5zYW1wbGVSZXNvbHZlMihiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFthLCBiLCBjXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhbXBsZU1hcCgpOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbNSwgMTAsIDE1XTtcclxuICAgICAgICBjb25zdCBwcm9taXNlQWxsID0gYXdhaXQgUHJvbWlzZS5hbGwoYXJyYXkubWFwKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zYW1wbGVSZXNvbHZlKHZhbHVlKSAqIDI7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZUFsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRocm93RXJyb3IoKTogUHJvbWlzZTxuZXZlcj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+OCqOODqeODvOOBjOOBguOBo+OBn+OCiCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUoJ+OCqOODqeODvOOBjOOBquOBi+OBo+OBn+OCiCcpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGluZ1Byb21pc2UoKTogUHJvbWlzZTxuZXZlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRocm93RXJyb3IoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGVycm9ySGFuZGxpbmdBc3luYygpOiBQcm9taXNlPG5ldmVyPiB7XHJcbiAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy50aHJvd0Vycm9yKCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgLy8gICAgIHRocm93IGVycjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy50aHJvd0Vycm9yKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vYXN5bmMnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3luYzInOyIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBBc3luY1NhbXBsZSB9IGZyb20gJy4vJztcclxuaW1wb3J0IHsgQXN5bmNTYW1wbGUyIH0gZnJvbSAnLi8nO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcbiAgICByZWFkb25seSAjcG9ydCA9IDMwMDA7XHJcbiAgICAjYXBwID0gZXhwcmVzcygpO1xyXG4gICAgI3JvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbiAgICAgICAgdGhpcy4jYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuI3JvdXRlci5nZXQoJy8nLFxyXG4gICAgICAgICAgICBhc3luYyAoXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBleHByZXNzLlJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZVxyXG4gICAgICAgICAgICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNlbmQoJ0hlbGxvIFdvcmxkISEhISEnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLiNhcHAudXNlKCcvJywgdGhpcy4jcm91dGVyKTtcclxuICAgICAgICB0aGlzLiNhcHAubGlzdGVuKHRoaXMuI3BvcnQsICgpID0+XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsaXN0ZW5pbmcgb24gcG9ydCBodHRwOi8vbG9jYWxob3N0OiR7dGhpcy4jcG9ydH1gKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFwcCgpOiBleHByZXNzLkV4cHJlc3Mge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNhcHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBNYWluKCkuYXBwO1xyXG5cclxubmV3IEFzeW5jU2FtcGxlKCk7XHJcbm5ldyBBc3luY1NhbXBsZTIoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbWFpbi50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=