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
exports.AsyncSample2 = exports.AsyncSample = void 0;
var async_1 = __webpack_require__(/*! ./async */ "./async.ts");
Object.defineProperty(exports, "AsyncSample", ({ enumerable: true, get: function () { return async_1.AsyncSample; } }));
var async2_1 = __webpack_require__(/*! ./async2 */ "./async2.ts");
Object.defineProperty(exports, "AsyncSample2", ({ enumerable: true, get: function () { return async2_1.AsyncSample2; } }));


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
new _1.AsyncSample2();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3luYy50cyIsIndlYnBhY2s6Ly8vLi9hc3luYzIudHMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE1BQWEsV0FBVztJQUNwQjtRQW1CSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE2Qk8sY0FBYyxDQUFDLEtBQWE7UUFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixDQUFD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TyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsbUNBQVUsRUFBRSxDQUFDLENBQ2xFLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0gsMENBQWlCO0lBQ3JCLENBQUM7Q0FDSjs7QUFFRCxrQkFBZSxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUU5QixJQUFJLGNBQVcsRUFBRSxDQUFDO0FBQ2xCLElBQUksZUFBWSxFQUFFLENBQUM7Ozs7Ozs7Ozs7O0FDbkNuQixxQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFzeW5jU2FtcGxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHRoaXMucmVzb2x2ZVNhbXBsZSgpLnRoZW4odmFsdWUgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIC8vIOOCs+ODs+OCveODvOODq+ihqOekuuOBjOOCpuOCtuOBj+OBquOCi+OBruOBp+OCs+ODoeODs+ODiOOCouOCpuODiFxyXG4gICAgICAgIC8vIC8vIHRoaXMucmVqZWN0U2FtcGxlKCkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAvLyAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAvLyAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gLy8g44Kz44Oz44OR44Kk44Or44Ko44Op44O8XHJcbiAgICAgICAgLy8gLy8gdGhpcy5yZXNvbHZlRXJyb3IoKS50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAvLyAvLyAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNhbXBsZSgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zYW1wbGUyKCkudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNhbXBsZTMoKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2FtcGxlNCgpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zYW1wbGU1KCkudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgYXN5bmMgcmVzb2x2ZVNhbXBsZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgLy8gICAgIHJldHVybiAncmVzb2x2ZSEhJztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGFzeW5jIHJlamVjdFNhbXBsZSgpOiBQcm9taXNlPG5ldmVyPiB7XHJcbiAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWplY3QhIScpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHByaXZhdGUgcmVzb2x2ZUVycm9yKCk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgcmV0dXJuICdyZXNvbHZlRXJyb3IhISc7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBzYW1wbGVSZXNvbHZlKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlICogMik7XHJcbiAgICAvLyAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHByaXZhdGUgYXN5bmMgc2FtcGxlKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zYW1wbGVSZXNvbHZlKDUpO1xyXG4gICAgLy8gICAgIHJldHVybiByZXN1bHQgKyA1O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgc2FtcGxlUmVzb2x2ZTIodmFsdWU6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2FtcGxlMigpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNhbXBsZVJlc29sdmUyKDUpXHJcbiAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbXBsZVJlc29sdmUyKDEwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICo9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxlUmVzb2x2ZTIoMjApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhbXBsZTMoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zYW1wbGVSZXNvbHZlMig2KSAqIGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIoMTApICsgYXdhaXQgdGhpcy5zYW1wbGVSZXNvbHZlMigyMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzYW1wbGU0KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgY29uc3QgYSA9IGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIoNik7XHJcbiAgICAgICAgY29uc3QgYiA9IGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIoMTApO1xyXG4gICAgICAgIGNvbnN0IGMgPSBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKDIwKTtcclxuICAgICAgICByZXR1cm4gYSAqIGIgKyBjO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2FtcGxlNSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZTIoaSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAn44Or44O844OX57WC5LqGJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGFzeW5jIHNhbXBsZTYoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIC8vICAgICBjb25zdCBhcnJheSA9IFs3LCAxMCwgMjBdO1xyXG4gICAgLy8gICAgIGNvbnN0IHN1bSA9IGF3YWl0IGFycmF5LnJlZHVjZShhc3luYyAoc3VtLCB2YWx1ZSkgPT4ge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gYXdhaXQgc3VtICsgYXdhaXQgdGhpcy5zYW1wbGVSZXNvbHZlMih2YWx1ZSkgKiAyO1xyXG4gICAgLy8gICAgIH0sIDApO1xyXG5cclxuICAgIC8vICAgICByZXR1cm4gc3VtO1xyXG4gICAgLy8gfVxyXG59IiwiZXhwb3J0IGNsYXNzIEFzeW5jU2FtcGxlMiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNhbXBsZVByb21pc2UoKS50aGVuKChbYSwgYiwgY10pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYSwgYiwgYyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2FtcGxlQXN5bmNBd2FpdCgpLnRoZW4oKFthLCBiLCBjXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhLCBiLCBjKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zYW1wbGVNYXAoKS50aGVuKChbYSwgYiwgY10pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYSwgYiwgYyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGluZ1Byb21pc2UoKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsaW5nQXN5bmMoKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhbXBsZVJlc29sdmUodmFsdWU6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2FtcGxlUmVzb2x2ZTIodmFsdWU6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUgKiAyKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhbXBsZVByb21pc2UoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VBID0gdGhpcy5zYW1wbGVSZXNvbHZlKDUpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VCID0gdGhpcy5zYW1wbGVSZXNvbHZlKDEwKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlQyA9IHByb21pc2VCLnRoZW4odmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGVSZXNvbHZlMih2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbcHJvbWlzZUEsIHByb21pc2VCLCBwcm9taXNlQ10pXHJcbiAgICAgICAgICAgIC50aGVuKChbYSwgYiwgY10pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbYSwgYiwgY107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2FtcGxlQXN5bmNBd2FpdCgpOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICAgICAgY29uc3QgW2EsIGJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuc2FtcGxlUmVzb2x2ZSg1KSwgdGhpcy5zYW1wbGVSZXNvbHZlKDEwKV0pO1xyXG4gICAgICAgIGNvbnN0IGMgPSBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKGIpO1xyXG5cclxuICAgICAgICByZXR1cm4gW2EsIGIsIGNdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2FtcGxlTWFwKCk6IFByb21pc2U8bnVtYmVyW10+IHtcclxuICAgICAgICBjb25zdCBhcnJheSA9IFs1LCAxMCwgMTVdO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VBbGwgPSBhd2FpdCBQcm9taXNlLmFsbChhcnJheS5tYXAoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUodmFsdWUpICogMjtcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9taXNlQWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGhyb3dFcnJvcigpOiBQcm9taXNlPG5ldmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign44Ko44Op44O844GM44GC44Gj44Gf44KIJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZSgn44Ko44Op44O844GM44Gq44GL44Gj44Gf44KIJyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsaW5nUHJvbWlzZSgpOiBQcm9taXNlPG5ldmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGhyb3dFcnJvcigpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZXJyb3JIYW5kbGluZ0FzeW5jKCk6IFByb21pc2U8bmV2ZXI+IHtcclxuICAgICAgICAvLyB0cnkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnRocm93RXJyb3IoKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAvLyB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnRocm93RXJyb3IoKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59IiwiLyoqXG4gKiBCYXJyZWxcbiAqLyBcbmV4cG9ydCB7IEFzeW5jU2FtcGxlIH0gZnJvbSAnLi9hc3luYyc7XG5leHBvcnQgeyBBc3luY1NhbXBsZTIgfSBmcm9tICcuL2FzeW5jMic7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IEFzeW5jU2FtcGxlLCBBc3luY1NhbXBsZTIgfSBmcm9tICcuLyc7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuICAgIHJlYWRvbmx5ICNwb3J0ID0gMzAwMDtcclxuICAgICNhcHAgPSBleHByZXNzKCk7XHJcbiAgICAjcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuICAgICAgICB0aGlzLiNhcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcclxuXHJcbiAgICAgICAgdGhpcy4jcm91dGVyLmdldCgnLycsXHJcbiAgICAgICAgICAgIGFzeW5jIChcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBleHByZXNzLlJlc3BvbnNlXHJcbiAgICAgICAgICAgICk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2VuZCgnSGVsbG8gV29ybGQhISEhIScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuI2FwcC51c2UoJy8nLCB0aGlzLiNyb3V0ZXIpO1xyXG4gICAgICAgIHRoaXMuI2FwcC5saXN0ZW4odGhpcy4jcG9ydCwgKCkgPT5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYGxpc3RlbmluZyBvbiBwb3J0IGh0dHA6Ly9sb2NhbGhvc3Q6JHt0aGlzLiNwb3J0fWApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXBwKCk6IGV4cHJlc3MuRXhwcmVzcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2FwcDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE1haW4oKS5hcHA7XHJcblxyXG5uZXcgQXN5bmNTYW1wbGUoKTtcclxubmV3IEFzeW5jU2FtcGxlMigpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9tYWluLnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==