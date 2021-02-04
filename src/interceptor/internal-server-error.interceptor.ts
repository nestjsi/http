import {
  //
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
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

import { InternalServerError } from "../error/internal-server-error.error";
import { objectGetClass } from "../util/object-get-class";

@Injectable()
export class InternalServerErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: any /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof InternalServerError || objectGetClass(error) === "InternalServerError") {
            throw new InternalServerErrorException(error.message.replace(/"/g, "'"));
          } else {
            return throwError(error);
          }
        },
      ),
    );
  }
}
