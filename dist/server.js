/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
const async2_1 = __webpack_require__(/*! ./async2 */ "./async2.ts");
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
new async2_1.AsyncSample2();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3luYzIudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLE1BQWEsWUFBWTtJQUNyQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLENB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RUQsa0JBQWUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFHOUIsSUFBSSxxQkFBWSxFQUFFLENBQUM7Ozs7Ozs7Ozs7O0FDcENuQixxQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGUgZnJvbSBcImV4cHJlc3NcIjtcblxuZXhwb3J0IGNsYXNzIEFzeW5jU2FtcGxlMiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2FtcGxlUHJvbWlzZSgpLnRoZW4oKFthLCBiLCBjXSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYSwgYiwgYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2FtcGxlQXN5bmNBd2FpdCgpLnRoZW4oKFthLCBiLCBjXSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYSwgYiwgYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2FtcGxlTWFwKCkudGhlbigoW2EsIGIsIGNdKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhLCBiLCBjKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lcnJvckhhbmRsaW5nUHJvbWlzZSgpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5lcnJvckhhbmRsaW5nQXN5bmMoKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgc2FtcGxlUmVzb2x2ZSh2YWx1ZTogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhbXBsZVJlc29sdmUyKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlICogMik7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhbXBsZVByb21pc2UoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgICAgICBjb25zdCBwcm9taXNlQSA9IHRoaXMuc2FtcGxlUmVzb2x2ZSg1KTtcbiAgICAgICAgY29uc3QgcHJvbWlzZUIgPSB0aGlzLnNhbXBsZVJlc29sdmUoMTApO1xuICAgICAgICBjb25zdCBwcm9taXNlQyA9IHByb21pc2VCLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxlUmVzb2x2ZTIodmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3Byb21pc2VBLCBwcm9taXNlQiwgcHJvbWlzZUNdKVxuICAgICAgICAgICAgLnRoZW4oKFthLCBiLCBjXSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBbYSwgYiwgY107XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHNhbXBsZUFzeW5jQXdhaXQoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5zYW1wbGVSZXNvbHZlKDUpLCB0aGlzLnNhbXBsZVJlc29sdmUoMTApXSk7XG4gICAgICAgIGNvbnN0IGMgPSBhd2FpdCB0aGlzLnNhbXBsZVJlc29sdmUyKGIpO1xuXG4gICAgICAgIHJldHVybiBbYSwgYiwgY107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzYW1wbGVNYXAoKTogUHJvbWlzZTxudW1iZXJbXT4ge1xuICAgICAgICBjb25zdCBhcnJheSA9IFs1LCAxMCwgMTVdO1xuICAgICAgICBjb25zdCBwcm9taXNlQWxsID0gYXdhaXQgUHJvbWlzZS5hbGwoYXJyYXkubWFwKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2FtcGxlUmVzb2x2ZSh2YWx1ZSkgKiAyO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2VBbGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aHJvd0Vycm9yKCk6IFByb21pc2U8bmV2ZXI+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign44Ko44Op44O844GM44GC44Gj44Gf44KIJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUoJ+OCqOODqeODvOOBjOOBquOBi+OBo+OBn+OCiCcpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsaW5nUHJvbWlzZSgpOiBQcm9taXNlPG5ldmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRocm93RXJyb3IoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGVycm9ySGFuZGxpbmdBc3luYygpOiBQcm9taXNlPG5ldmVyPiB7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnRocm93RXJyb3IoKTtcbiAgICAgICAgLy8gICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIC8vIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyAgICAgdGhyb3cgZXJyO1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudGhyb3dFcnJvcigpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IEFzeW5jU2FtcGxlIH0gZnJvbSAnLi9hc3luYyc7XG5pbXBvcnQgeyBBc3luY1NhbXBsZTIgfSBmcm9tICcuL2FzeW5jMic7XG5cbmNsYXNzIE1haW4ge1xuICAgIHJlYWRvbmx5ICNwb3J0ID0gMzAwMDtcbiAgICAjYXBwID0gZXhwcmVzcygpO1xuICAgICNyb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2FwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuICAgICAgICB0aGlzLiNhcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuICAgICAgICB0aGlzLiNyb3V0ZXIuZ2V0KCcvJyxcbiAgICAgICAgICAgIGFzeW5jIChcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBleHByZXNzLlJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2VcbiAgICAgICAgICAgICk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNlbmQoJ0hlbGxvIFdvcmxkISEhISEnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy4jYXBwLnVzZSgnLycsIHRoaXMuI3JvdXRlcik7XG4gICAgICAgIHRoaXMuI2FwcC5saXN0ZW4odGhpcy4jcG9ydCwgKCkgPT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsaXN0ZW5pbmcgb24gcG9ydCBodHRwOi8vbG9jYWxob3N0OiR7dGhpcy4jcG9ydH1gKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldCBhcHAoKTogZXhwcmVzcy5FeHByZXNzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2FwcDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNYWluKCkuYXBwO1xuXG4vLyBuZXcgQXN5bmNTYW1wbGUoKTtcbm5ldyBBc3luY1NhbXBsZTIoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbWFpbi50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=