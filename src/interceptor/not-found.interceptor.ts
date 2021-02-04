import {
  //
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
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

import { NotFoundError } from "../error/not-found.error";
import { objectGetClass } from "../util/object-get-class";

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: any /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof NotFoundError || objectGetClass(error) === "NotFoundError") {
            throw new NotFoundException(error.message.replace(/"/g, "'"));
          } else {
            return throwError(error);
          }
        },
      ),
    );
  }
}
