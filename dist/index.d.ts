import { Observable } from "rxjs";
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";

export class BadRequestError extends Error implements Error {
  message: string;
  constructor(message?: string);
}
export class ConflictError extends Error implements Error {
  message: string;
  constructor(message?: string);
}
export class ForbiddenError extends Error implements Error {
  message: string;
  constructor(message?: string);
}
export class GoneError extends Error implements Error {
  message: string;
  constructor(message?: string);
}
export class InternalServerError extends Error {
  message: string;
  constructor(message?: string);
}
export class NotFoundError extends Error {
  message: string;
  constructor(message?: string);
}
export class BadRequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export class ConflictInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export class ForbiddenInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export class GoneInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export class InternalServerErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export class UUID4Pipe {
  readonly id: string;
}
