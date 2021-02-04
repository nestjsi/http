import {
  //
  BadRequestException,
  CallHandler,
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

import { BadRequestError } from "../error/bad-request.error";
import { objectGetClass } from "../util/object-get-class";

@Injectable()
export class BadRequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: any /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof BadRequestError || objectGetClass(error) === "BadRequestError") {
            throw new BadRequestException(error.message.replace(/"/g, "'"));
          } else {
            return throwError(error);
          }
        },
      ),
    );
  }
}
