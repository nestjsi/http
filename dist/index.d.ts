import { Observable } from "rxjs";
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";

export class ExtendedError extends Error implements Error {
  public readonly message: string;
  public readonly data?: Record<string, unknown>;
  public constructor(message?: string, data?: unknown);
  public toJSON(): Record<string, unknown>;
  public toString(): string;
}

export class BadRequestError extends ExtendedError implements Error {
  public readonly message: string;
  public readonly data?: Record<string, unknown>;
  constructor(message?: unknown, data?: unknown);
}
export class ConflictError extends ExtendedError implements Error {
  public readonly message: string;
  public readonly data?: Record<string, unknown>;
  constructor(message?: unknown, data?: unknown);
}
export class ForbiddenError extends ExtendedError implements Error {
  public readonly message: string;
  public readonly data?: Record<string, unknown>;
  constructor(message?: unknown, data?: unknown);
}
export class GoneError extends ExtendedError implements Error {
  public readonly message: string;
  public readonly data?: Record<string, unknown>;
  constructor(message?: unknown, data?: unknown);
}
export class InternalServerError extends ExtendedError implements Error {
  public readonly message: string;
  public readonly data?: Record<string, unknown>;
  constructor(message?: unknown, data?: unknown);
}
export class NotFoundError extends ExtendedError implements Error {
  public readonly message: string;
  public readonly data?: Record<string, unknown>;
  constructor(message?: unknown, data?: unknown);
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
