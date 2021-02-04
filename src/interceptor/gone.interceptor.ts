import {
  //
  CallHandler,
  ExecutionContext,
  GoneException,
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

import { GoneError } from "../error/gone.error";
import { objectGetClass } from "../util/object-get-class";

@Injectable()
export class GoneInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: any /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof GoneError || objectGetClass(error) === "GoneError") {
            throw new GoneException(error.message.replace(/"/g, "'"));
          } else {
            return throwError(error);
          }
        },
      ),
    );
  }
}
