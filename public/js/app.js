/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/alpine.js":
/*!********************************!*\
  !*** ./resources/js/alpine.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define(factory) : (global = global || self, global.Alpine = factory());
})(undefined, function () {
  'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  } // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts


  function domReady() {
    return new Promise(function (resolve) {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }

  function arrayUnique(array) {
    return Array.from(new Set(array));
  }

  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }

  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn("Alpine: [".concat(directive, "] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#").concat(directive));
    } else if (el.content.childElementCount !== 1) {
      console.warn("Alpine: <template> tag with [".concat(directive, "] encountered with multiple element roots. Make sure <template> only has a single child element."));
    }
  }

  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }

  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, function (match, _char) {
      return _char.toUpperCase();
    });
  }

  function walk(el, callback) {
    if (callback(el) === false) return;
    var node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }

  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function saferEval(expression, dataContext) {
    var additionalHelperVariables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof expression === 'function') {
      return expression.call(dataContext);
    }

    return new Function(['$data'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "var __alpine_result; with($data) { __alpine_result = ".concat(expression, " }; return __alpine_result")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables))));
  }

  function saferEvalNoReturn(expression, dataContext) {
    var additionalHelperVariables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof expression === 'function') {
      return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
    }

    var AsyncFunction = Function;
    /* MODERN-ONLY:START */

    AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))).constructor;
    /* MODERN-ONLY:END */
    // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
    // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

    if (Object.keys(dataContext).includes(expression)) {
      var methodReference = new Function(['dataContext'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "with(dataContext) { return ".concat(expression, " }")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables))));

      if (typeof methodReference === 'function') {
        return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
      } else {
        return Promise.resolve();
      }
    }

    return Promise.resolve(new AsyncFunction(['dataContext'].concat(_toConsumableArray(Object.keys(additionalHelperVariables))), "with(dataContext) { ".concat(expression, " }")).apply(void 0, [dataContext].concat(_toConsumableArray(Object.values(additionalHelperVariables)))));
  }

  var xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;

  function isXAttr(attr) {
    var name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }

  function getXAttrs(el, component, type) {
    var directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    var spreadDirective = directives.filter(function (directive) {
      return directive.type === 'spread';
    })[0];

    if (spreadDirective) {
      var spreadObject = saferEval(spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            name = _ref3[0],
            value = _ref3[1];

        return parseHtmlAttribute({
          name: name,
          value: value
        });
      }));
    }

    if (type) return directives.filter(function (i) {
      return i.type === type;
    });
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    var directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort(function (a, b) {
      var typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      var typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    var normalizedName = replaceAtAndColonWithStandardSyntax(name);
    var typeMatch = normalizedName.match(xAttrRE);
    var valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    var modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(function (i) {
        return i.replace('.', '');
      }),
      expression: value
    };
  }

  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    var booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }

  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }

  function convertClassStringToArray(classList) {
    var filterFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;
    return classList.split(' ').filter(filterFn);
  }

  var TRANSITION_TYPE_IN = 'in';
  var TRANSITION_TYPE_OUT = 'out';

  function transitionIn(el, show, component) {
    var forceSkip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    var attrs = getXAttrs(el, component, 'transition');
    var showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      var modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      var settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter(function (i, index) {
        return index < modifiers.indexOf('out');
      }) : modifiers;
      transitionHelperIn(el, modifiers, show); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(function (attr) {
      return ['enter', 'enter-start', 'enter-end'].includes(attr.value);
    })) {
      transitionClassesIn(el, component, attrs, show);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }

  function transitionOut(el, hide, component) {
    var forceSkip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    var attrs = getXAttrs(el, component, 'transition');
    var showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      var modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      var settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter(function (i, index) {
        return index > modifiers.indexOf('out');
      }) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide);
    } else if (attrs.some(function (attr) {
      return ['leave', 'leave-start', 'leave-end'].includes(attr.value);
    })) {
      transitionClassesOut(el, component, attrs, hide);
    } else {
      hide();
    }
  }

  function transitionHelperIn(el, modifiers, showCallback) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    var styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, function () {}, styleValues, TRANSITION_TYPE_IN);
  }

  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    var duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    var styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, function () {}, hideCallback, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    var rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      var match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      cancelAnimationFrame(el.__x_transition.nextFrame);
      el.__x_transition.callback && el.__x_transition.callback();
    } // If the user set these style values, we'll put them back when we're done with them.


    var opacityCache = el.style.opacity;
    var transformCache = el.style.transform;
    var transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    var noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    var transitionOpacity = noModifiers || modifiers.includes('opacity');
    var transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    var stages = {
      start: function start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = "scale(".concat(styleValues.first.scale / 100, ")");
      },
      during: function during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? "opacity" : "", transitionScale ? "transform" : ""].join(' ').trim();
        el.style.transitionDuration = "".concat(styleValues.duration / 1000, "s");
        el.style.transitionTimingFunction = "cubic-bezier(0.4, 0.0, 0.2, 1)";
      },
      show: function show() {
        hook1();
      },
      end: function end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = "scale(".concat(styleValues.second.scale / 100, ")");
      },
      hide: function hide() {
        hook2();
      },
      cleanup: function cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }
    };
    transition(el, stages, type);
  }

  function transitionClassesIn(el, component, directives, showCallback) {
    var ensureStringExpression = function ensureStringExpression(expression) {
      return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
    };

    var enter = convertClassStringToArray(ensureStringExpression((directives.find(function (i) {
      return i.value === 'enter';
    }) || {
      expression: ''
    }).expression));
    var enterStart = convertClassStringToArray(ensureStringExpression((directives.find(function (i) {
      return i.value === 'enter-start';
    }) || {
      expression: ''
    }).expression));
    var enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(function (i) {
      return i.value === 'enter-end';
    }) || {
      expression: ''
    }).expression));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, function () {}, TRANSITION_TYPE_IN);
  }

  function transitionClassesOut(el, component, directives, hideCallback) {
    var leave = convertClassStringToArray((directives.find(function (i) {
      return i.value === 'leave';
    }) || {
      expression: ''
    }).expression);
    var leaveStart = convertClassStringToArray((directives.find(function (i) {
      return i.value === 'leave-start';
    }) || {
      expression: ''
    }).expression);
    var leaveEnd = convertClassStringToArray((directives.find(function (i) {
      return i.value === 'leave-end';
    }) || {
      expression: ''
    }).expression);
    transitionClasses(el, leave, leaveStart, leaveEnd, function () {}, hideCallback, TRANSITION_TYPE_OUT);
  }

  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      cancelAnimationFrame(el.__x_transition.nextFrame);
      el.__x_transition.callback && el.__x_transition.callback();
    }

    var originalClasses = el.__x_original_classes || [];
    var stages = {
      start: function start() {
        var _el$classList;

        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classesStart));
      },
      during: function during() {
        var _el$classList2;

        (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(classesDuring));
      },
      show: function show() {
        hook1();
      },
      end: function end() {
        var _el$classList3, _el$classList4;

        // Don't remove classes that were in the original class attribute.
        (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(classesStart.filter(function (i) {
          return !originalClasses.includes(i);
        })));

        (_el$classList4 = el.classList).add.apply(_el$classList4, _toConsumableArray(classesEnd));
      },
      hide: function hide() {
        hook2();
      },
      cleanup: function cleanup() {
        var _el$classList5, _el$classList6;

        (_el$classList5 = el.classList).remove.apply(_el$classList5, _toConsumableArray(classesDuring.filter(function (i) {
          return !originalClasses.includes(i);
        })));

        (_el$classList6 = el.classList).remove.apply(_el$classList6, _toConsumableArray(classesEnd.filter(function (i) {
          return !originalClasses.includes(i);
        })));
      }
    };
    transition(el, stages, type);
  }

  function transition(el, stages, type) {
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      callback: once(function () {
        stages.hide(); // Adding an "isConnected" check, in case the callback
        // removed the element from the DOM.

        if (el.isConnected) {
          stages.cleanup();
        }

        delete el.__x_transition;
      }),
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(function () {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      var duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(function () {
        stages.end();
        setTimeout(el.__x_transition.callback, duration);
      });
    });
  }

  function isNumeric(subject) {
    return !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js


  function once(callback) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    var iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    var items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    var currentEl = templateEl;
    items.forEach(function (item, index) {
      var iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      var currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      var nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, function () {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, function () {
          return nextEl.__x_for;
        }); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, function () {
          return nextEl.__x_for;
        });
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!


  function parseForExpression(expression) {
    var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    var stripParensRE = /^\(|\)$/g;
    var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    var inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    var res = {};
    res.items = inMatch[2].trim();
    var item = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    var scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    var bindKeyAttribute = getXAttrs(el, component, 'bind').filter(function (attr) {
      return attr.value === 'key';
    })[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, function () {
      return iterationScopeVariables;
    });
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    var ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    } // This adds support for the `i in n` syntax.


    if (isNumeric(iteratorNames.items)) {
      return Array.from(Array(parseInt(iteratorNames.items, 10)).keys(), function (i) {
        return i + 1;
      });
    }

    return component.evaluateReturnExpression(el, iteratorNames.items, extraVars);
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    var clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    var tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    var _loop = function _loop() {
      var nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      var nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, function () {
        nextElementFromOldLoopImmutable.remove();
      }, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    };

    while (nextElementFromOldLoop) {
      _loop();
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && expression.match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = el.value == value;
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value === 'string' && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(function (val) {
              return val == el.value;
            });
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        var originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (_typeof(value) === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        var keysSortedByBooleanValue = Object.keys(value).sort(function (a, b) {
          return value[a] - value[b];
        });
        keysSortedByBooleanValue.forEach(function (classNames) {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(function (className) {
              return el.classList.add(className);
            });
          } else {
            convertClassStringToArray(classNames).forEach(function (className) {
              return el.classList.remove(className);
            });
          }
        });
      } else {
        var _originalClasses = el.__x_original_classes || [];

        var newClasses = convertClassStringToArray(value);
        el.setAttribute('class', arrayUnique(_originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return value + '';
    });
    Array.from(el.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && expression.match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers) {
    var initialUpdate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    var hide = function hide() {
      el.style.display = 'none';
    };

    var show = function show() {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    var handle = function handle(resolve) {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, function () {
            show();
          }, component);
        }

        resolve(function () {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, function () {
            resolve(function () {
              hide();
            });
          }, component);
        } else {
          resolve(function () {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(function (finish) {
        return finish();
      });
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    var elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      var clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, function () {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, function () {
        el.nextElementSibling.remove();
      }, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression) {
    var extraVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    if (modifiers.includes('away')) {
      var handler = function handler(e) {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      }; // Listen for this event at the root level.


      document.addEventListener(event, handler, options);
    } else {
      var listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      var _handler2 = function _handler(e) {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, _handler2, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          var returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(function (value) {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, _handler2, options);
              }
            }
          });
        }
      };

      if (modifiers.includes('debounce')) {
        var nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
        var wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
        _handler2 = debounce(_handler2, wait);
      }

      listenerTarget.addEventListener(event, _handler2, options);
    }
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, function () {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    var keyModifiers = modifiers.filter(function (i) {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      var debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    var systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    var selectedSystemKeyModifiers = systemKeyModifiers.filter(function (modifier) {
      return keyModifiers.includes(modifier);
    });
    keyModifiers = keyModifiers.filter(function (i) {
      return !selectedSystemKeyModifiers.includes(i);
    });

    if (selectedSystemKeyModifiers.length > 0) {
      var activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(function (modifier) {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e["".concat(modifier, "Key")];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    var listenerExpression = "".concat(expression, " = rightSideOfExpression($event, ").concat(expression, ")");
    registerListener(component, el, event, modifiers, listenerExpression, function () {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return function (event, currentValue) {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          var newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(function (i) {
            return i !== newValue;
          });
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(function (option) {
          var rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(function (option) {
          return option.value || option.text;
        });
      } else {
        var rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    var number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }
  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */


  var isArray = Array.isArray;
  var _getPrototypeOf = Object.getPrototypeOf,
      ObjectCreate = Object.create,
      ObjectDefineProperty = Object.defineProperty,
      ObjectDefineProperties = Object.defineProperties,
      _isExtensible = Object.isExtensible,
      _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
      getOwnPropertyNames = Object.getOwnPropertyNames,
      getOwnPropertySymbols = Object.getOwnPropertySymbols,
      _preventExtensions = Object.preventExtensions,
      hasOwnProperty = Object.hasOwnProperty;
  var _Array$prototype = Array.prototype,
      ArrayPush = _Array$prototype.push,
      ArrayConcat = _Array$prototype.concat,
      ArrayMap = _Array$prototype.map;

  function isUndefined(obj) {
    return obj === undefined;
  }

  function isFunction(obj) {
    return typeof obj === 'function';
  }

  function isObject(obj) {
    return _typeof(obj) === 'object';
  }

  var proxyToValueMap = new WeakMap();

  function registerProxy(proxy, value) {
    proxyToValueMap.set(proxy, value);
  }

  var unwrap = function unwrap(replicaOrAny) {
    return proxyToValueMap.get(replicaOrAny) || replicaOrAny;
  };

  function wrapValue(membrane, value) {
    return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */


  function unwrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      descriptor.value = unwrap(descriptor.value);
    }

    return descriptor;
  }

  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
    var targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
    targetKeys.forEach(function (key) {
      var descriptor = _getOwnPropertyDescriptor(originalTarget, key); // We do not need to wrap the descriptor if configurable
      // Because we can deal with wrapping it when user goes through
      // Get own property descriptor. There is also a chance that this descriptor
      // could change sometime in the future, so we can defer wrapping
      // until we need to


      if (!descriptor.configurable) {
        descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
      }

      ObjectDefineProperty(shadowTarget, key, descriptor);
    });

    _preventExtensions(shadowTarget);
  }

  var ReactiveProxyHandler = /*#__PURE__*/function () {
    function ReactiveProxyHandler(membrane, value) {
      _classCallCheck(this, ReactiveProxyHandler);

      this.originalTarget = value;
      this.membrane = membrane;
    }

    _createClass(ReactiveProxyHandler, [{
      key: "get",
      value: function get(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        var value = originalTarget[key];
        var valueObserved = membrane.valueObserved;
        valueObserved(originalTarget, key);
        return membrane.getProxy(value);
      }
    }, {
      key: "set",
      value: function set(shadowTarget, key, value) {
        var originalTarget = this.originalTarget,
            valueMutated = this.membrane.valueMutated;
        var oldValue = originalTarget[key];

        if (oldValue !== value) {
          originalTarget[key] = value;
          valueMutated(originalTarget, key);
        } else if (key === 'length' && isArray(originalTarget)) {
          // fix for issue #236: push will add the new index, and by the time length
          // is updated, the internal length is already equal to the new length value
          // therefore, the oldValue is equal to the value. This is the forking logic
          // to support this use case.
          valueMutated(originalTarget, key);
        }

        return true;
      }
    }, {
      key: "deleteProperty",
      value: function deleteProperty(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            valueMutated = this.membrane.valueMutated;
        delete originalTarget[key];
        valueMutated(originalTarget, key);
        return true;
      }
    }, {
      key: "apply",
      value: function apply(shadowTarget, thisArg, argArray) {
        /* No op */
      }
    }, {
      key: "construct",
      value: function construct(target, argArray, newTarget) {
        /* No op */
      }
    }, {
      key: "has",
      value: function has(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            valueObserved = this.membrane.valueObserved;
        valueObserved(originalTarget, key);
        return key in originalTarget;
      }
    }, {
      key: "ownKeys",
      value: function ownKeys(shadowTarget) {
        var originalTarget = this.originalTarget;
        return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
    }, {
      key: "isExtensible",
      value: function isExtensible(shadowTarget) {
        var shadowIsExtensible = _isExtensible(shadowTarget);

        if (!shadowIsExtensible) {
          return shadowIsExtensible;
        }

        var originalTarget = this.originalTarget,
            membrane = this.membrane;

        var targetIsExtensible = _isExtensible(originalTarget);

        if (!targetIsExtensible) {
          lockShadowTarget(membrane, shadowTarget, originalTarget);
        }

        return targetIsExtensible;
      }
    }, {
      key: "setPrototypeOf",
      value: function setPrototypeOf(shadowTarget, prototype) {}
    }, {
      key: "getPrototypeOf",
      value: function getPrototypeOf(shadowTarget) {
        var originalTarget = this.originalTarget;
        return _getPrototypeOf(originalTarget);
      }
    }, {
      key: "getOwnPropertyDescriptor",
      value: function getOwnPropertyDescriptor(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        var valueObserved = this.membrane.valueObserved; // keys looked up via hasOwnProperty need to be reactive

        valueObserved(originalTarget, key);

        var desc = _getOwnPropertyDescriptor(originalTarget, key);

        if (isUndefined(desc)) {
          return desc;
        }

        var shadowDescriptor = _getOwnPropertyDescriptor(shadowTarget, key);

        if (!isUndefined(shadowDescriptor)) {
          return shadowDescriptor;
        } // Note: by accessing the descriptor, the key is marked as observed
        // but access to the value, setter or getter (if available) cannot observe
        // mutations, just like regular methods, in which case we just do nothing.


        desc = wrapDescriptor(membrane, desc, wrapValue);

        if (!desc.configurable) {
          // If descriptor from original target is not configurable,
          // We must copy the wrapped descriptor over to the shadow target.
          // Otherwise, proxy will throw an invariant error.
          // This is our last chance to lock the value.
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
          ObjectDefineProperty(shadowTarget, key, desc);
        }

        return desc;
      }
    }, {
      key: "preventExtensions",
      value: function preventExtensions(shadowTarget) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        lockShadowTarget(membrane, shadowTarget, originalTarget);

        _preventExtensions(originalTarget);

        return true;
      }
    }, {
      key: "defineProperty",
      value: function defineProperty(shadowTarget, key, descriptor) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        var valueMutated = membrane.valueMutated;
        var configurable = descriptor.configurable; // We have to check for value in descriptor
        // because Object.freeze(proxy) calls this method
        // with only { configurable: false, writeable: false }
        // Additionally, method will only be called with writeable:false
        // if the descriptor has a value, as opposed to getter/setter
        // So we can just check if writable is present and then see if
        // value is present. This eliminates getter and setter descriptors

        if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
          var originalDescriptor = _getOwnPropertyDescriptor(originalTarget, key);

          descriptor.value = originalDescriptor.value;
        }

        ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));

        if (configurable === false) {
          ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
        }

        valueMutated(originalTarget, key);
        return true;
      }
    }]);

    return ReactiveProxyHandler;
  }();

  function wrapReadOnlyValue(membrane, value) {
    return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }

  var ReadOnlyHandler = /*#__PURE__*/function () {
    function ReadOnlyHandler(membrane, value) {
      _classCallCheck(this, ReadOnlyHandler);

      this.originalTarget = value;
      this.membrane = membrane;
    }

    _createClass(ReadOnlyHandler, [{
      key: "get",
      value: function get(shadowTarget, key) {
        var membrane = this.membrane,
            originalTarget = this.originalTarget;
        var value = originalTarget[key];
        var valueObserved = membrane.valueObserved;
        valueObserved(originalTarget, key);
        return membrane.getReadOnlyProxy(value);
      }
    }, {
      key: "set",
      value: function set(shadowTarget, key, value) {
        return false;
      }
    }, {
      key: "deleteProperty",
      value: function deleteProperty(shadowTarget, key) {
        return false;
      }
    }, {
      key: "apply",
      value: function apply(shadowTarget, thisArg, argArray) {
        /* No op */
      }
    }, {
      key: "construct",
      value: function construct(target, argArray, newTarget) {
        /* No op */
      }
    }, {
      key: "has",
      value: function has(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            valueObserved = this.membrane.valueObserved;
        valueObserved(originalTarget, key);
        return key in originalTarget;
      }
    }, {
      key: "ownKeys",
      value: function ownKeys(shadowTarget) {
        var originalTarget = this.originalTarget;
        return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
    }, {
      key: "setPrototypeOf",
      value: function setPrototypeOf(shadowTarget, prototype) {}
    }, {
      key: "getOwnPropertyDescriptor",
      value: function getOwnPropertyDescriptor(shadowTarget, key) {
        var originalTarget = this.originalTarget,
            membrane = this.membrane;
        var valueObserved = membrane.valueObserved; // keys looked up via hasOwnProperty need to be reactive

        valueObserved(originalTarget, key);

        var desc = _getOwnPropertyDescriptor(originalTarget, key);

        if (isUndefined(desc)) {
          return desc;
        }

        var shadowDescriptor = _getOwnPropertyDescriptor(shadowTarget, key);

        if (!isUndefined(shadowDescriptor)) {
          return shadowDescriptor;
        } // Note: by accessing the descriptor, the key is marked as observed
        // but access to the value or getter (if available) cannot be observed,
        // just like regular methods, in which case we just do nothing.


        desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);

        if (hasOwnProperty.call(desc, 'set')) {
          desc.set = undefined; // readOnly membrane does not allow setters
        }

        if (!desc.configurable) {
          // If descriptor from original target is not configurable,
          // We must copy the wrapped descriptor over to the shadow target.
          // Otherwise, proxy will throw an invariant error.
          // This is our last chance to lock the value.
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
          ObjectDefineProperty(shadowTarget, key, desc);
        }

        return desc;
      }
    }, {
      key: "preventExtensions",
      value: function preventExtensions(shadowTarget) {
        return false;
      }
    }, {
      key: "defineProperty",
      value: function defineProperty(shadowTarget, key, descriptor) {
        return false;
      }
    }]);

    return ReadOnlyHandler;
  }();

  function createShadowTarget(value) {
    var shadowTarget = undefined;

    if (isArray(value)) {
      shadowTarget = [];
    } else if (isObject(value)) {
      shadowTarget = {};
    }

    return shadowTarget;
  }

  var ObjectDotPrototype = Object.prototype;

  function defaultValueIsObservable(value) {
    // intentionally checking for null
    if (value === null) {
      return false;
    } // treat all non-object types, including undefined, as non-observable values


    if (_typeof(value) !== 'object') {
      return false;
    }

    if (isArray(value)) {
      return true;
    }

    var proto = _getPrototypeOf(value);

    return proto === ObjectDotPrototype || proto === null || _getPrototypeOf(proto) === null;
  }

  var defaultValueObserved = function defaultValueObserved(obj, key) {
    /* do nothing */
  };

  var defaultValueMutated = function defaultValueMutated(obj, key) {
    /* do nothing */
  };

  var defaultValueDistortion = function defaultValueDistortion(value) {
    return value;
  };

  function wrapDescriptor(membrane, descriptor, getValue) {
    var set = descriptor.set,
        get = descriptor.get;

    if (hasOwnProperty.call(descriptor, 'value')) {
      descriptor.value = getValue(membrane, descriptor.value);
    } else {
      if (!isUndefined(get)) {
        descriptor.get = function () {
          // invoking the original getter with the original target
          return getValue(membrane, get.call(unwrap(this)));
        };
      }

      if (!isUndefined(set)) {
        descriptor.set = function (value) {
          // At this point we don't have a clear indication of whether
          // or not a valid mutation will occur, we don't have the key,
          // and we are not sure why and how they are invoking this setter.
          // Nevertheless we preserve the original semantics by invoking the
          // original setter with the original target and the unwrapped value
          set.call(unwrap(this), membrane.unwrapProxy(value));
        };
      }
    }

    return descriptor;
  }

  var ReactiveMembrane = /*#__PURE__*/function () {
    function ReactiveMembrane(options) {
      _classCallCheck(this, ReactiveMembrane);

      this.valueDistortion = defaultValueDistortion;
      this.valueMutated = defaultValueMutated;
      this.valueObserved = defaultValueObserved;
      this.valueIsObservable = defaultValueIsObservable;
      this.objectGraph = new WeakMap();

      if (!isUndefined(options)) {
        var valueDistortion = options.valueDistortion,
            valueMutated = options.valueMutated,
            valueObserved = options.valueObserved,
            valueIsObservable = options.valueIsObservable;
        this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
        this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
        this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
        this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
      }
    }

    _createClass(ReactiveMembrane, [{
      key: "getProxy",
      value: function getProxy(value) {
        var unwrappedValue = unwrap(value);
        var distorted = this.valueDistortion(unwrappedValue);

        if (this.valueIsObservable(distorted)) {
          var o = this.getReactiveState(unwrappedValue, distorted); // when trying to extract the writable version of a readonly
          // we return the readonly.

          return o.readOnly === value ? value : o.reactive;
        }

        return distorted;
      }
    }, {
      key: "getReadOnlyProxy",
      value: function getReadOnlyProxy(value) {
        value = unwrap(value);
        var distorted = this.valueDistortion(value);

        if (this.valueIsObservable(distorted)) {
          return this.getReactiveState(value, distorted).readOnly;
        }

        return distorted;
      }
    }, {
      key: "unwrapProxy",
      value: function unwrapProxy(p) {
        return unwrap(p);
      }
    }, {
      key: "getReactiveState",
      value: function getReactiveState(value, distortedValue) {
        var objectGraph = this.objectGraph;
        var reactiveState = objectGraph.get(distortedValue);

        if (reactiveState) {
          return reactiveState;
        }

        var membrane = this;
        reactiveState = {
          get reactive() {
            var reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue); // caching the reactive proxy after the first time it is accessed

            var proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
            registerProxy(proxy, value);
            ObjectDefineProperty(this, 'reactive', {
              value: proxy
            });
            return proxy;
          },

          get readOnly() {
            var readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue); // caching the readOnly proxy after the first time it is accessed

            var proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
            registerProxy(proxy, value);
            ObjectDefineProperty(this, 'readOnly', {
              value: proxy
            });
            return proxy;
          }

        };
        objectGraph.set(distortedValue, reactiveState);
        return reactiveState;
      }
    }]);

    return ReactiveMembrane;
  }();
  /** version: 0.26.0 */


  function wrap(data, mutationCallback) {
    var membrane = new ReactiveMembrane({
      valueMutated: function valueMutated(target, key) {
        mutationCallback(target, key);
      }
    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }

  function unwrap$1(membrane, observable) {
    var unwrappedData = membrane.unwrapProxy(observable);
    var copy = {};
    Object.keys(unwrappedData).forEach(function (key) {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  var Component = /*#__PURE__*/function () {
    function Component(el) {
      var _this = this;

      var componentForClone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, Component);

      this.$el = el;
      var dataAttr = this.$el.getAttribute('x-data');
      var dataExpression = dataAttr === '' ? '{}' : dataAttr;
      var initExpression = this.$el.getAttribute('x-init');
      var dataExtras = {
        $el: this.$el
      };
      var canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            name = _ref6[0],
            callback = _ref6[1];

        Object.defineProperty(dataExtras, "$".concat(name), {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(dataExpression, dataExtras); // Construct a Proxy-based observable. This will be used to handle reactivity.

      var _this$wrapDataInObser = this.wrapDataInObservable(this.unobservedData),
          membrane = _this$wrapDataInObser.membrane,
          data = _this$wrapDataInObser.data;

      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = function (callback) {
        _this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = function (property, callback) {
        if (!_this.watchers[property]) _this.watchers[property] = [];

        _this.watchers[property].push(callback);
      }; // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            name = _ref8[0],
            callback = _ref8[1];

        Object.defineProperty(_this.unobservedData, "$".concat(name), {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(function (callback) {
        return callback(_this);
      });
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.


      this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(function () {
        Alpine.onComponentInitializeds.forEach(function (callback) {
          return callback(_this);
        });
      }, 0);
    }

    _createClass(Component, [{
      key: "getUnobservedData",
      value: function getUnobservedData() {
        return unwrap$1(this.membrane, this.$data);
      }
    }, {
      key: "wrapDataInObservable",
      value: function wrapDataInObservable(data) {
        var self = this;
        var updateDom = debounce(function () {
          self.updateElements(self.$el);
        }, 0);
        return wrap(data, function (target, key) {
          if (self.watchers[key]) {
            // If there's a watcher for this specific key, run it.
            self.watchers[key].forEach(function (callback) {
              return callback(target[key]);
            });
          } else if (Array.isArray(target)) {
            // Arrays are special cases, if any of the items change, we consider the array as mutated.
            Object.keys(self.watchers).forEach(function (fullDotNotationKey) {
              var dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
              // For example, when calling push, we would get a mutation for the item's key
              // and a second mutation for the length property.

              if (key === 'length') return;
              dotNotationParts.reduce(function (comparisonData, part) {
                if (Object.is(target, comparisonData[part])) {
                  self.watchers[fullDotNotationKey].forEach(function (callback) {
                    return callback(target);
                  });
                }

                return comparisonData[part];
              }, self.getUnobservedData());
            });
          } else {
            // Let's walk through the watchers with "dot-notation" (foo.bar) and see
            // if this mutation fits any of them.
            Object.keys(self.watchers).filter(function (i) {
              return i.includes('.');
            }).forEach(function (fullDotNotationKey) {
              var dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
              // key, then skip it early for performance reasons.

              if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
              // a match, and call the watcher if one's found.

              dotNotationParts.reduce(function (comparisonData, part) {
                if (Object.is(target, comparisonData)) {
                  // Run the watchers.
                  self.watchers[fullDotNotationKey].forEach(function (callback) {
                    return callback(target[key]);
                  });
                }

                return comparisonData[part];
              }, self.getUnobservedData());
            });
          } // Don't react to data changes for cases like the `x-created` hook.


          if (self.pauseReactivity) return;
          updateDom();
        });
      }
    }, {
      key: "walkAndSkipNestedComponents",
      value: function walkAndSkipNestedComponents(el, callback) {
        var _this2 = this;

        var initializeComponentCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        walk(el, function (el) {
          // We've hit a component.
          if (el.hasAttribute('x-data')) {
            // If it's not the current one.
            if (!el.isSameNode(_this2.$el)) {
              // Initialize it if it's not.
              if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

              return false;
            }
          }

          return callback(el);
        });
      }
    }, {
      key: "initializeElements",
      value: function initializeElements(rootEl) {
        var _this3 = this;

        var extraVars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        this.walkAndSkipNestedComponents(rootEl, function (el) {
          // Don't touch spawns from for loop
          if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

          if (el.__x_inserted_me !== undefined) return false;

          _this3.initializeElement(el, extraVars);
        }, function (el) {
          el.__x = new Component(el);
        });
        this.executeAndClearRemainingShowDirectiveStack();
        this.executeAndClearNextTickStack(rootEl);
      }
    }, {
      key: "initializeElement",
      value: function initializeElement(el, extraVars) {
        // To support class attribute merging, we have to know what the element's
        // original class attribute looked like for reference.
        if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
          el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
        }

        this.registerListeners(el, extraVars);
        this.resolveBoundAttributes(el, true, extraVars);
      }
    }, {
      key: "updateElements",
      value: function updateElements(rootEl) {
        var _this4 = this;

        var extraVars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        this.walkAndSkipNestedComponents(rootEl, function (el) {
          // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
          if (el.__x_for_key !== undefined && !el.isSameNode(_this4.$el)) return false;

          _this4.updateElement(el, extraVars);
        }, function (el) {
          el.__x = new Component(el);
        });
        this.executeAndClearRemainingShowDirectiveStack();
        this.executeAndClearNextTickStack(rootEl);
      }
    }, {
      key: "executeAndClearNextTickStack",
      value: function executeAndClearNextTickStack(el) {
        var _this5 = this;

        // Skip spawns from alpine directives
        if (el === this.$el && this.nextTickStack.length > 0) {
          // We run the tick stack after the next frame to allow any
          // running transitions to pass the initial show stage.
          requestAnimationFrame(function () {
            while (_this5.nextTickStack.length > 0) {
              _this5.nextTickStack.shift()();
            }
          });
        }
      }
    }, {
      key: "executeAndClearRemainingShowDirectiveStack",
      value: function executeAndClearRemainingShowDirectiveStack() {
        // The goal here is to start all the x-show transitions
        // and build a nested promise chain so that elements
        // only hide when the children are finished hiding.
        this.showDirectiveStack.reverse().map(function (thing) {
          return new Promise(function (resolve) {
            thing(function (finish) {
              resolve(finish);
            });
          });
        }).reduce(function (nestedPromise, promise) {
          return nestedPromise.then(function () {
            return promise.then(function (finish) {
              return finish();
            });
          });
        }, Promise.resolve(function () {})); // We've processed the handler stack. let's clear it.

        this.showDirectiveStack = [];
        this.showDirectiveLastElement = undefined;
      }
    }, {
      key: "updateElement",
      value: function updateElement(el, extraVars) {
        this.resolveBoundAttributes(el, false, extraVars);
      }
    }, {
      key: "registerListeners",
      value: function registerListeners(el, extraVars) {
        var _this6 = this;

        getXAttrs(el, this).forEach(function (_ref9) {
          var type = _ref9.type,
              value = _ref9.value,
              modifiers = _ref9.modifiers,
              expression = _ref9.expression;

          switch (type) {
            case 'on':
              registerListener(_this6, el, value, modifiers, expression, extraVars);
              break;

            case 'model':
              registerModelListener(_this6, el, modifiers, expression, extraVars);
              break;
          }
        });
      }
    }, {
      key: "resolveBoundAttributes",
      value: function resolveBoundAttributes(el) {
        var _this7 = this;

        var initialUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var extraVars = arguments.length > 2 ? arguments[2] : undefined;
        var attrs = getXAttrs(el, this);
        attrs.forEach(function (_ref10) {
          var type = _ref10.type,
              value = _ref10.value,
              modifiers = _ref10.modifiers,
              expression = _ref10.expression;

          switch (type) {
            case 'model':
              handleAttributeBindingDirective(_this7, el, 'value', expression, extraVars, type, modifiers);
              break;

            case 'bind':
              // The :key binding on an x-for is special, ignore it.
              if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
              handleAttributeBindingDirective(_this7, el, value, expression, extraVars, type, modifiers);
              break;

            case 'text':
              var output = _this7.evaluateReturnExpression(el, expression, extraVars);

              handleTextDirective(el, output, expression);
              break;

            case 'html':
              handleHtmlDirective(_this7, el, expression, extraVars);
              break;

            case 'show':
              var output = _this7.evaluateReturnExpression(el, expression, extraVars);

              handleShowDirective(_this7, el, output, modifiers, initialUpdate);
              break;

            case 'if':
              // If this element also has x-for on it, don't process x-if.
              // We will let the "x-for" directive handle the "if"ing.
              if (attrs.some(function (i) {
                return i.type === 'for';
              })) return;

              var output = _this7.evaluateReturnExpression(el, expression, extraVars);

              handleIfDirective(_this7, el, output, initialUpdate, extraVars);
              break;

            case 'for':
              handleForDirective(_this7, el, expression, initialUpdate, extraVars);
              break;

            case 'cloak':
              el.removeAttribute('x-cloak');
              break;
          }
        });
      }
    }, {
      key: "evaluateReturnExpression",
      value: function evaluateReturnExpression(el, expression) {
        var extraVars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        return saferEval(expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
          $dispatch: this.getDispatchFunction(el)
        }));
      }
    }, {
      key: "evaluateCommandExpression",
      value: function evaluateCommandExpression(el, expression) {
        var extraVars = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        return saferEvalNoReturn(expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
          $dispatch: this.getDispatchFunction(el)
        }));
      }
    }, {
      key: "getDispatchFunction",
      value: function getDispatchFunction(el) {
        return function (event) {
          var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          el.dispatchEvent(new CustomEvent(event, {
            detail: detail,
            bubbles: true
          }));
        };
      }
    }, {
      key: "listenForNewElementsToInitialize",
      value: function listenForNewElementsToInitialize() {
        var _this8 = this;

        var targetNode = this.$el;
        var observerOptions = {
          childList: true,
          attributes: true,
          subtree: true
        };
        var observer = new MutationObserver(function (mutations) {
          for (var i = 0; i < mutations.length; i++) {
            // Filter out mutations triggered from child components.
            var closestParentComponent = mutations[i].target.closest('[x-data]');
            if (!(closestParentComponent && closestParentComponent.isSameNode(_this8.$el))) continue;

            if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
              (function () {
                var rawData = saferEval(mutations[i].target.getAttribute('x-data') || '{}', {
                  $el: _this8.$el
                });
                Object.keys(rawData).forEach(function (key) {
                  if (_this8.$data[key] !== rawData[key]) {
                    _this8.$data[key] = rawData[key];
                  }
                });
              })();
            }

            if (mutations[i].addedNodes.length > 0) {
              mutations[i].addedNodes.forEach(function (node) {
                if (node.nodeType !== 1 || node.__x_inserted_me) return;

                if (node.matches('[x-data]') && !node.__x) {
                  node.__x = new Component(node);
                  return;
                }

                _this8.initializeElements(node);
              });
            }
          }
        });
        observer.observe(targetNode, observerOptions);
      }
    }, {
      key: "getRefsProxy",
      value: function getRefsProxy() {
        var self = this;
        var refObj = {}; // One of the goals of this is to not hold elements in memory, but rather re-evaluate
        // the DOM when the system needs something from it. This way, the framework is flexible and
        // friendly to outside DOM changes from libraries like Vue/Livewire.
        // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

        return new Proxy(refObj, {
          get: function get(object, property) {
            if (property === '$isAlpineProxy') return true;
            var ref; // We can't just query the DOM because it's hard to filter out refs in
            // nested components.

            self.walkAndSkipNestedComponents(self.$el, function (el) {
              if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
                ref = el;
              }
            });
            return ref;
          }
        });
      }
    }]);

    return Component;
  }();

  var Alpine = {
    version: "2.7.0",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this9 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (isTesting()) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return domReady();

              case 3:
                this.discoverComponents(function (el) {
                  _this9.initializeComponent(el);
                }); // It's easier and more performant to just support Turbolinks than listen
                // to MutationObserver mutations at the document level.

                document.addEventListener("turbolinks:load", function () {
                  _this9.discoverUninitializedComponents(function (el) {
                    _this9.initializeComponent(el);
                  });
                });
                this.listenForNewUninitializedComponentsAtRunTime(function (el) {
                  _this9.initializeComponent(el);
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }(),
    discoverComponents: function discoverComponents(callback) {
      var rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(function (rootEl) {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(function (el) {
        return el.__x === undefined;
      }).forEach(function (rootEl) {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime(callback) {
      var _this10 = this;

      var targetNode = document.querySelector('body');
      var observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      var observer = new MutationObserver(function (mutations) {
        if (_this10.pauseMutationObserver) return;

        for (var i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(function (node) {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;

              _this10.discoverUninitializedComponents(function (el) {
                _this10.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(function () {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//require('./bootstrap');
__webpack_require__(/*! ./alpine */ "./resources/js/alpine.js");

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./resources/js/app.js ./resources/css/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yansan/Projects/lost/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/yansan/Projects/lost/resources/css/app.css */"./resources/css/app.css");


/***/ })

/******/ });