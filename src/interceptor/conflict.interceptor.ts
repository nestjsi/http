import {
  //
  CallHandler,
  ConflictException,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";

import {
  //
  Observable,
  ObservableInput,
  throwError,
} from "rxjs";
import {
  //
  catchError,
} from "rxjs/operators";

import { ConflictError } from "../error/conflict.error";
import { objectGetClass } from "../util/object-get-class";

@Injectable()
export class ConflictInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: any /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof ConflictError || objectGetClass(error) === "ConflictError") {
            throw new ConflictException(error.message.replace(/"/g, "'"));
          } else {
            return throwError(error);
          }
        },
      ),
    );
  }
}
