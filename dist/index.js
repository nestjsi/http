"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@nestjs/common"),e=require("@nestjsi/class-validator");class ExtendedError extends Error{constructor(r="Error",e){super(r),e&&"object"==typeof e&&(this.data=e)}toJSON(){return this.data?JSON.parse(JSON.stringify(this.data)):{message:this.message}}toString(){return JSON.stringify(this.toJSON())}}class BadRequestError extends ExtendedError{constructor(r,e){"string"==typeof r?super(r,e):super("Bad Request",r&&"object"==typeof r?r:e),this.name="BadRequestError"}}class ConflictError extends ExtendedError{constructor(r,e){"string"==typeof r?super(r,e):super("Conflict",r&&"object"==typeof r?r:e),this.name="ConflictError"}}class ForbiddenError extends Error{constructor(r="Forbidden"){super(r),this.name="ForbiddenError"}}class GoneError extends ExtendedError{constructor(r,e){"string"==typeof r?super(r,e):super("Gone",r&&"object"==typeof r?r:e),this.name="GoneError"}}class InternalServerError extends ExtendedError{constructor(r,e){"string"==typeof r?super(r,e):super("Internal Server Error",r&&"object"==typeof r?r:e),this.name="InternalServerError"}}class NotFoundError extends ExtendedError{constructor(r,e){"string"==typeof r?super(r,e):super("Not Found",r&&"object"==typeof r?r:e),this.name="NotFoundError"}}function __decorate(r,e,t,n){var o,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(r,e,t,n);else for(var c=r.length-1;c>=0;c--)(o=r[c])&&(i=(s<3?o(i):s>3?o(e,t,i):o(e,t))||i);return s>3&&i&&Object.defineProperty(e,t,i),i}var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)};function __extends(r,e){function __(){this.constructor=r}extendStatics(r,e),r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}function isFunction(r){return"function"==typeof r}var t=!1,n={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack;t=r},get useDeprecatedSynchronousErrorHandling(){return t}};function hostReportError(r){setTimeout((function(){throw r}),0)}var o={closed:!0,next:function(r){},error:function(r){if(n.useDeprecatedSynchronousErrorHandling)throw r;hostReportError(r)},complete:function(){}},s=function(){return Array.isArray||function(r){return r&&"number"==typeof r.length}}();function isObject(r){return null!==r&&"object"==typeof r}var i=function(){function UnsubscriptionErrorImpl(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,e){return e+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}return UnsubscriptionErrorImpl.prototype=Object.create(Error.prototype),UnsubscriptionErrorImpl}(),c=function(){function Subscription(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._ctorUnsubscribe=!0,this._unsubscribe=r)}return Subscription.prototype.unsubscribe=function(){var r;if(!this.closed){var e=this._parentOrParents,t=this._ctorUnsubscribe,n=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof Subscription)e.remove(this);else if(null!==e)for(var c=0;c<e.length;++c){e[c].remove(this)}if(isFunction(n)){t&&(this._unsubscribe=void 0);try{n.call(this)}catch(e){r=e instanceof i?flattenUnsubscriptionErrors(e.errors):[e]}}if(s(o)){c=-1;for(var u=o.length;++c<u;){var a=o[c];if(isObject(a))try{a.unsubscribe()}catch(e){r=r||[],e instanceof i?r=r.concat(flattenUnsubscriptionErrors(e.errors)):r.push(e)}}}if(r)throw new i(r)}},Subscription.prototype.add=function(r){var e=r;if(!r)return Subscription.EMPTY;switch(typeof r){case"function":e=new Subscription(r);case"object":if(e===this||e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if(!(e instanceof Subscription)){var t=e;(e=new Subscription)._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var n=e._parentOrParents;if(null===n)e._parentOrParents=this;else if(n instanceof Subscription){if(n===this)return e;e._parentOrParents=[n,this]}else{if(-1!==n.indexOf(this))return e;n.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[e]:o.push(e),e},Subscription.prototype.remove=function(r){var e=this._subscriptions;if(e){var t=e.indexOf(r);-1!==t&&e.splice(t,1)}},Subscription.EMPTY=function(r){return r.closed=!0,r}(new Subscription),Subscription}();function flattenUnsubscriptionErrors(r){return r.reduce((function(r,e){return r.concat(e instanceof i?e.errors:e)}),[])}var u=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),a=function(r){function Subscriber(e,t,n){var s=r.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=o;break;case 1:if(!e){s.destination=o;break}if("object"==typeof e){e instanceof Subscriber?(s.syncErrorThrowable=e.syncErrorThrowable,s.destination=e,e.add(s)):(s.syncErrorThrowable=!0,s.destination=new p(s,e));break}default:s.syncErrorThrowable=!0,s.destination=new p(s,e,t,n)}return s}return __extends(Subscriber,r),Subscriber.prototype[u]=function(){return this},Subscriber.create=function(r,e,t){var n=new Subscriber(r,e,t);return n.syncErrorThrowable=!1,n},Subscriber.prototype.next=function(r){this.isStopped||this._next(r)},Subscriber.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},Subscriber.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},Subscriber.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},Subscriber.prototype._next=function(r){this.destination.next(r)},Subscriber.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},Subscriber.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},Subscriber.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},Subscriber}(c),p=function(r){function SafeSubscriber(e,t,n,s){var i,c=r.call(this)||this;c._parentSubscriber=e;var u=c;return isFunction(t)?i=t:t&&(i=t.next,n=t.error,s=t.complete,t!==o&&(isFunction((u=Object.create(t)).unsubscribe)&&c.add(u.unsubscribe.bind(u)),u.unsubscribe=c.unsubscribe.bind(c))),c._context=u,c._next=i,c._error=n,c._complete=s,c}return __extends(SafeSubscriber,r),SafeSubscriber.prototype.next=function(r){if(!this.isStopped&&this._next){var e=this._parentSubscriber;n.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},SafeSubscriber.prototype.error=function(r){if(!this.isStopped){var e=this._parentSubscriber,t=n.useDeprecatedSynchronousErrorHandling;if(this._error)t&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(e.syncErrorThrowable)t?(e.syncErrorValue=r,e.syncErrorThrown=!0):hostReportError(r),this.unsubscribe();else{if(this.unsubscribe(),t)throw r;hostReportError(r)}}},SafeSubscriber.prototype.complete=function(){var r=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var wrappedComplete=function(){return r._complete.call(r._context)};n.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,wrappedComplete),this.unsubscribe()):(this.__tryOrUnsub(wrappedComplete),this.unsubscribe())}else this.unsubscribe()}},SafeSubscriber.prototype.__tryOrUnsub=function(r,e){try{r.call(this._context,e)}catch(r){if(this.unsubscribe(),n.useDeprecatedSynchronousErrorHandling)throw r;hostReportError(r)}},SafeSubscriber.prototype.__tryOrSetError=function(r,e,t){if(!n.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,t)}catch(e){return n.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=e,r.syncErrorThrown=!0,!0):(hostReportError(e),!0)}return!1},SafeSubscriber.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},SafeSubscriber}(a);var b=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function identity(r){return r}function pipeFromArray(r){return 0===r.length?identity:1===r.length?r[0]:function piped(e){return r.reduce((function(r,e){return e(r)}),e)}}var l=function(){function Observable(r){this._isScalar=!1,r&&(this._subscribe=r)}return Observable.prototype.lift=function(r){var e=new Observable;return e.source=this,e.operator=r,e},Observable.prototype.subscribe=function(r,e,t){var s=this.operator,i=function toSubscriber(r,e,t){if(r){if(r instanceof a)return r;if(r[u])return r[u]()}return r||e||t?new a(r,e,t):new a(o)}(r,e,t);if(s?i.add(s.call(i,this.source)):i.add(this.source||n.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),n.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},Observable.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(e){n.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=e),!function canReportError(r){for(;r;){var e=r,t=e.closed,n=e.destination,o=e.isStopped;if(t||o)return!1;r=n&&n instanceof a?n:null}return!0}(r)?console.warn(e):r.error(e)}},Observable.prototype.forEach=function(r,e){var t=this;return new(e=getPromiseCtor(e))((function(e,n){var o;o=t.subscribe((function(e){try{r(e)}catch(r){n(r),o&&o.unsubscribe()}}),n,e)}))},Observable.prototype._subscribe=function(r){var e=this.source;return e&&e.subscribe(r)},Observable.prototype[b]=function(){return this},Observable.prototype.pipe=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return 0===r.length?this:pipeFromArray(r)(this)},Observable.prototype.toPromise=function(r){var e=this;return new(r=getPromiseCtor(r))((function(r,t){var n;e.subscribe((function(r){return n=r}),(function(r){return t(r)}),(function(){return r(n)}))}))},Observable.create=function(r){return new Observable(r)},Observable}();function getPromiseCtor(r){if(r||(r=Promise),!r)throw new Error("no Promise impl found");return r}function getSymbolIterator(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var f=getSymbolIterator();var subscribeTo=function(r){if(r&&"function"==typeof r[b])return s=r,function(r){var e=s[b]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(r)};if((o=r)&&"number"==typeof o.length&&"function"!=typeof o)return n=r,function(r){for(var e=0,t=n.length;e<t&&!r.closed;e++)r.next(n[e]);r.complete()};if(function isPromise(r){return!!r&&"function"!=typeof r.subscribe&&"function"==typeof r.then}(r))return t=r,function(r){return t.then((function(e){r.closed||(r.next(e),r.complete())}),(function(e){return r.error(e)})).then(null,hostReportError),r};if(r&&"function"==typeof r[f])return e=r,function(r){for(var t=e[f]();;){var n=void 0;try{n=t.next()}catch(e){return r.error(e),r}if(n.done){r.complete();break}if(r.next(n.value),r.closed)break}return"function"==typeof t.return&&r.add((function(){t.return&&t.return()})),r};var e,t,n,o,s,i=isObject(r)?"an invalid object":"'"+r+"'";throw new TypeError("You provided "+i+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")},h=function(r){function SimpleInnerSubscriber(e){var t=r.call(this)||this;return t.parent=e,t}return __extends(SimpleInnerSubscriber,r),SimpleInnerSubscriber.prototype._next=function(r){this.parent.notifyNext(r)},SimpleInnerSubscriber.prototype._error=function(r){this.parent.notifyError(r),this.unsubscribe()},SimpleInnerSubscriber.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},SimpleInnerSubscriber}(a),d=function(r){function SimpleOuterSubscriber(){return null!==r&&r.apply(this,arguments)||this}return __extends(SimpleOuterSubscriber,r),SimpleOuterSubscriber.prototype.notifyNext=function(r){this.destination.next(r)},SimpleOuterSubscriber.prototype.notifyError=function(r){this.destination.error(r)},SimpleOuterSubscriber.prototype.notifyComplete=function(){this.destination.complete()},SimpleOuterSubscriber}(a);function catchError(r){return function catchErrorOperatorFunction(e){var t=new y(r),n=e.lift(t);return t.caught=n}}var y=function(){function CatchOperator(r){this.selector=r}return CatchOperator.prototype.call=function(r,e){return e.subscribe(new S(r,this.selector,this.caught))},CatchOperator}(),S=function(r){function CatchSubscriber(e,t,n){var o=r.call(this,e)||this;return o.selector=t,o.caught=n,o}return __extends(CatchSubscriber,r),CatchSubscriber.prototype.error=function(e){if(!this.isStopped){var t=void 0;try{t=this.selector(e,this.caught)}catch(e){return void r.prototype.error.call(this,e)}this._unsubscribeAndRecycle();var n=new h(this);this.add(n);var o=function innerSubscribe(r,e){if(!e.closed)return r instanceof l?r.subscribe(e):subscribeTo(r)(e)}(t,n);o!==n&&this.add(o)}},CatchSubscriber}(d);exports.BadRequestInterceptor=class BadRequestInterceptor{intercept(e,t){return t.handle().pipe(catchError(e=>{throw e instanceof BadRequestError?new r.BadRequestException(e.message.replace(/"/g,"'")):e}))}},exports.BadRequestInterceptor=__decorate([r.Injectable()],exports.BadRequestInterceptor),exports.ConflictInterceptor=class ConflictInterceptor{intercept(e,t){return t.handle().pipe(catchError(e=>{throw e instanceof ConflictError?new r.ConflictException(e.message.replace(/"/g,"'")):e}))}},exports.ConflictInterceptor=__decorate([r.Injectable()],exports.ConflictInterceptor),exports.ForbiddenInterceptor=class ForbiddenInterceptor{intercept(e,t){return t.handle().pipe(catchError(e=>{throw e instanceof ForbiddenError?new r.ForbiddenException(e.message.replace(/"/g,"'")):e}))}},exports.ForbiddenInterceptor=__decorate([r.Injectable()],exports.ForbiddenInterceptor),exports.GoneInterceptor=class GoneInterceptor{intercept(e,t){return t.handle().pipe(catchError(e=>{throw e instanceof GoneError?new r.GoneException(e.message.replace(/"/g,"'")):e}))}},exports.GoneInterceptor=__decorate([r.Injectable()],exports.GoneInterceptor),exports.InternalServerErrorInterceptor=class InternalServerErrorInterceptor{intercept(e,t){return t.handle().pipe(catchError(e=>{throw e instanceof InternalServerError?new r.InternalServerErrorException(e.message.replace(/"/g,"'")):e}))}},exports.InternalServerErrorInterceptor=__decorate([r.Injectable()],exports.InternalServerErrorInterceptor),exports.NotFoundInterceptor=class NotFoundInterceptor{intercept(e,t){return t.handle().pipe(catchError(e=>{throw e instanceof NotFoundError?new r.NotFoundException(e.message.replace(/"/g,"'")):e}))}},exports.NotFoundInterceptor=__decorate([r.Injectable()],exports.NotFoundInterceptor);class UUID4Pipe{}__decorate([e.IsUUID4(),function __metadata(r,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(r,e)}("design:type",String)],UUID4Pipe.prototype,"id",void 0),exports.BadRequestError=BadRequestError,exports.ConflictError=ConflictError,exports.ForbiddenError=ForbiddenError,exports.GoneError=GoneError,exports.InternalServerError=InternalServerError,exports.NotFoundError=NotFoundError,exports.UUID4Pipe=UUID4Pipe;
//# sourceMappingURL=index.js.map
