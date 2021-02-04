import {
  //
  CallHandler,
  ExecutionContext,
  ForbiddenException,
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

import { ForbiddenError } from "../error/forbidden.error";
import { objectGetClass } from "../util/object-get-class";

@Injectable()
export class ForbiddenInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: any /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof ForbiddenError || objectGetClass(error) === "ForbiddenError") {
            throw new ForbiddenException(error.message.replace(/"/g, "'"));
          } else {
            return throwError(error);
          }
        },
      ),
    );
  }
}
