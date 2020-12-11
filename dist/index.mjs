import{Injectable as r,BadRequestException as e,ConflictException as t,ForbiddenException as n,GoneException as o,InternalServerErrorException as i,NotFoundException as s}from"@nestjs/common";import{IsUUID4 as c}from"@nestjsi/class-validator";class BadRequestError extends Error{constructor(r="Bad Request"){super(r),this.name="BadRequestError"}}class ConflictError extends Error{constructor(r="Conflict"){super(r),this.name="ConflictError"}}class ForbiddenError extends Error{constructor(r="Forbidden"){super(r),this.name="ForbiddenError"}}class GoneError extends Error{constructor(r="Gone"){super(r),this.name="GoneError"}}class InternalServerError extends Error{constructor(r="Internal Server Error"){super(r),this.name="InternalServerError"}}class NotFoundError extends Error{constructor(r="Not Found"){super(r),this.name="NotFoundError"}}function __decorate(r,e,t,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(r,e,t,n);else for(var c=r.length-1;c>=0;c--)(o=r[c])&&(s=(i<3?o(s):i>3?o(e,t,s):o(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}var extendStatics=function(r,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)};function __extends(r,e){function __(){this.constructor=r}extendStatics(r,e),r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)}function isFunction(r){return"function"==typeof r}var u=!1,a={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack;u=r},get useDeprecatedSynchronousErrorHandling(){return u}};function hostReportError(r){setTimeout((function(){throw r}),0)}var b={closed:!0,next:function(r){},error:function(r){if(a.useDeprecatedSynchronousErrorHandling)throw r;hostReportError(r)},complete:function(){}},p=function(){return Array.isArray||function(r){return r&&"number"==typeof r.length}}();function isObject(r){return null!==r&&"object"==typeof r}var l=function(){function UnsubscriptionErrorImpl(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,e){return e+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}return UnsubscriptionErrorImpl.prototype=Object.create(Error.prototype),UnsubscriptionErrorImpl}(),h=function(){function Subscription(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._ctorUnsubscribe=!0,this._unsubscribe=r)}return Subscription.prototype.unsubscribe=function(){var r;if(!this.closed){var e=this._parentOrParents,t=this._ctorUnsubscribe,n=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof Subscription)e.remove(this);else if(null!==e)for(var i=0;i<e.length;++i){e[i].remove(this)}if(isFunction(n)){t&&(this._unsubscribe=void 0);try{n.call(this)}catch(e){r=e instanceof l?flattenUnsubscriptionErrors(e.errors):[e]}}if(p(o)){i=-1;for(var s=o.length;++i<s;){var c=o[i];if(isObject(c))try{c.unsubscribe()}catch(e){r=r||[],e instanceof l?r=r.concat(flattenUnsubscriptionErrors(e.errors)):r.push(e)}}}if(r)throw new l(r)}},Subscription.prototype.add=function(r){var e=r;if(!r)return Subscription.EMPTY;switch(typeof r){case"function":e=new Subscription(r);case"object":if(e===this||e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if(!(e instanceof Subscription)){var t=e;(e=new Subscription)._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var n=e._parentOrParents;if(null===n)e._parentOrParents=this;else if(n instanceof Subscription){if(n===this)return e;e._parentOrParents=[n,this]}else{if(-1!==n.indexOf(this))return e;n.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[e]:o.push(e),e},Subscription.prototype.remove=function(r){var e=this._subscriptions;if(e){var t=e.indexOf(r);-1!==t&&e.splice(t,1)}},Subscription.EMPTY=function(r){return r.closed=!0,r}(new Subscription),Subscription}();function flattenUnsubscriptionErrors(r){return r.reduce((function(r,e){return r.concat(e instanceof l?e.errors:e)}),[])}var f=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),d=function(r){function Subscriber(e,t,n){var o=r.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=b;break;case 1:if(!e){o.destination=b;break}if("object"==typeof e){e instanceof Subscriber?(o.syncErrorThrowable=e.syncErrorThrowable,o.destination=e,e.add(o)):(o.syncErrorThrowable=!0,o.destination=new y(o,e));break}default:o.syncErrorThrowable=!0,o.destination=new y(o,e,t,n)}return o}return __extends(Subscriber,r),Subscriber.prototype[f]=function(){return this},Subscriber.create=function(r,e,t){var n=new Subscriber(r,e,t);return n.syncErrorThrowable=!1,n},Subscriber.prototype.next=function(r){this.isStopped||this._next(r)},Subscriber.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},Subscriber.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},Subscriber.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},Subscriber.prototype._next=function(r){this.destination.next(r)},Subscriber.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},Subscriber.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},Subscriber.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},Subscriber}(h),y=function(r){function SafeSubscriber(e,t,n,o){var i,s=r.call(this)||this;s._parentSubscriber=e;var c=s;return isFunction(t)?i=t:t&&(i=t.next,n=t.error,o=t.complete,t!==b&&(isFunction((c=Object.create(t)).unsubscribe)&&s.add(c.unsubscribe.bind(c)),c.unsubscribe=s.unsubscribe.bind(s))),s._context=c,s._next=i,s._error=n,s._complete=o,s}return __extends(SafeSubscriber,r),SafeSubscriber.prototype.next=function(r){if(!this.isStopped&&this._next){var e=this._parentSubscriber;a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},SafeSubscriber.prototype.error=function(r){if(!this.isStopped){var e=this._parentSubscriber,t=a.useDeprecatedSynchronousErrorHandling;if(this._error)t&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(e.syncErrorThrowable)t?(e.syncErrorValue=r,e.syncErrorThrown=!0):hostReportError(r),this.unsubscribe();else{if(this.unsubscribe(),t)throw r;hostReportError(r)}}},SafeSubscriber.prototype.complete=function(){var r=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var wrappedComplete=function(){return r._complete.call(r._context)};a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,wrappedComplete),this.unsubscribe()):(this.__tryOrUnsub(wrappedComplete),this.unsubscribe())}else this.unsubscribe()}},SafeSubscriber.prototype.__tryOrUnsub=function(r,e){try{r.call(this._context,e)}catch(r){if(this.unsubscribe(),a.useDeprecatedSynchronousErrorHandling)throw r;hostReportError(r)}},SafeSubscriber.prototype.__tryOrSetError=function(r,e,t){if(!a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,t)}catch(e){return a.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=e,r.syncErrorThrown=!0,!0):(hostReportError(e),!0)}return!1},SafeSubscriber.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},SafeSubscriber}(d);var S=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function identity(r){return r}function pipeFromArray(r){return 0===r.length?identity:1===r.length?r[0]:function piped(e){return r.reduce((function(r,e){return e(r)}),e)}}var _=function(){function Observable(r){this._isScalar=!1,r&&(this._subscribe=r)}return Observable.prototype.lift=function(r){var e=new Observable;return e.source=this,e.operator=r,e},Observable.prototype.subscribe=function(r,e,t){var n=this.operator,o=function toSubscriber(r,e,t){if(r){if(r instanceof d)return r;if(r[f])return r[f]()}return r||e||t?new d(r,e,t):new d(b)}(r,e,t);if(n?o.add(n.call(o,this.source)):o.add(this.source||a.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),a.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},Observable.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(e){a.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=e),!function canReportError(r){for(;r;){var e=r,t=e.closed,n=e.destination,o=e.isStopped;if(t||o)return!1;r=n&&n instanceof d?n:null}return!0}(r)?console.warn(e):r.error(e)}},Observable.prototype.forEach=function(r,e){var t=this;return new(e=getPromiseCtor(e))((function(e,n){var o;o=t.subscribe((function(e){try{r(e)}catch(r){n(r),o&&o.unsubscribe()}}),n,e)}))},Observable.prototype._subscribe=function(r){var e=this.source;return e&&e.subscribe(r)},Observable.prototype[S]=function(){return this},Observable.prototype.pipe=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return 0===r.length?this:pipeFromArray(r)(this)},Observable.prototype.toPromise=function(r){var e=this;return new(r=getPromiseCtor(r))((function(r,t){var n;e.subscribe((function(r){return n=r}),(function(r){return t(r)}),(function(){return r(n)}))}))},Observable.create=function(r){return new Observable(r)},Observable}();function getPromiseCtor(r){if(r||(r=Promise),!r)throw new Error("no Promise impl found");return r}function getSymbolIterator(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var E=getSymbolIterator();var subscribeTo=function(r){if(r&&"function"==typeof r[S])return i=r,function(r){var e=i[S]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(r)};if((o=r)&&"number"==typeof o.length&&"function"!=typeof o)return n=r,function(r){for(var e=0,t=n.length;e<t&&!r.closed;e++)r.next(n[e]);r.complete()};if(function isPromise(r){return!!r&&"function"!=typeof r.subscribe&&"function"==typeof r.then}(r))return t=r,function(r){return t.then((function(e){r.closed||(r.next(e),r.complete())}),(function(e){return r.error(e)})).then(null,hostReportError),r};if(r&&"function"==typeof r[E])return e=r,function(r){for(var t=e[E]();;){var n=void 0;try{n=t.next()}catch(e){return r.error(e),r}if(n.done){r.complete();break}if(r.next(n.value),r.closed)break}return"function"==typeof t.return&&r.add((function(){t.return&&t.return()})),r};var e,t,n,o,i,s=isObject(r)?"an invalid object":"'"+r+"'";throw new TypeError("You provided "+s+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")},v=function(r){function SimpleInnerSubscriber(e){var t=r.call(this)||this;return t.parent=e,t}return __extends(SimpleInnerSubscriber,r),SimpleInnerSubscriber.prototype._next=function(r){this.parent.notifyNext(r)},SimpleInnerSubscriber.prototype._error=function(r){this.parent.notifyError(r),this.unsubscribe()},SimpleInnerSubscriber.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},SimpleInnerSubscriber}(d),m=function(r){function SimpleOuterSubscriber(){return null!==r&&r.apply(this,arguments)||this}return __extends(SimpleOuterSubscriber,r),SimpleOuterSubscriber.prototype.notifyNext=function(r){this.destination.next(r)},SimpleOuterSubscriber.prototype.notifyError=function(r){this.destination.error(r)},SimpleOuterSubscriber.prototype.notifyComplete=function(){this.destination.complete()},SimpleOuterSubscriber}(d);function catchError(r){return function catchErrorOperatorFunction(e){var t=new w(r),n=e.lift(t);return t.caught=n}}var w=function(){function CatchOperator(r){this.selector=r}return CatchOperator.prototype.call=function(r,e){return e.subscribe(new O(r,this.selector,this.caught))},CatchOperator}(),O=function(r){function CatchSubscriber(e,t,n){var o=r.call(this,e)||this;return o.selector=t,o.caught=n,o}return __extends(CatchSubscriber,r),CatchSubscriber.prototype.error=function(e){if(!this.isStopped){var t=void 0;try{t=this.selector(e,this.caught)}catch(e){return void r.prototype.error.call(this,e)}this._unsubscribeAndRecycle();var n=new v(this);this.add(n);var o=function innerSubscribe(r,e){if(!e.closed)return r instanceof _?r.subscribe(e):subscribeTo(r)(e)}(t,n);o!==n&&this.add(o)}},CatchSubscriber}(m);let g=class BadRequestInterceptor{intercept(r,t){return t.handle().pipe(catchError(r=>{throw r instanceof BadRequestError?new e(r.message.replace(/"/g,"'")):r}))}};g=__decorate([r()],g);let x=class ConflictInterceptor{intercept(r,e){return e.handle().pipe(catchError(r=>{throw r instanceof ConflictError?new t(r.message.replace(/"/g,"'")):r}))}};x=__decorate([r()],x);let P=class ForbiddenInterceptor{intercept(r,e){return e.handle().pipe(catchError(r=>{throw r instanceof ForbiddenError?new n(r.message.replace(/"/g,"'")):r}))}};P=__decorate([r()],P);let I=class GoneInterceptor{intercept(r,e){return e.handle().pipe(catchError(r=>{throw r instanceof GoneError?new o(r.message.replace(/"/g,"'")):r}))}};I=__decorate([r()],I);let T=class InternalServerErrorInterceptor{intercept(r,e){return e.handle().pipe(catchError(r=>{throw r instanceof InternalServerError?new i(r.message.replace(/"/g,"'")):r}))}};T=__decorate([r()],T);let R=class NotFoundInterceptor{intercept(r,e){return e.handle().pipe(catchError(r=>{throw r instanceof NotFoundError?new s(r.message.replace(/"/g,"'")):r}))}};R=__decorate([r()],R);class UUID4Pipe{}__decorate([c(),function __metadata(r,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(r,e)}("design:type",String)],UUID4Pipe.prototype,"id",void 0);export{BadRequestError,g as BadRequestInterceptor,ConflictError,x as ConflictInterceptor,ForbiddenError,P as ForbiddenInterceptor,GoneError,I as GoneInterceptor,InternalServerError,T as InternalServerErrorInterceptor,NotFoundError,R as NotFoundInterceptor,UUID4Pipe};
//# sourceMappingURL=index.mjs.map
