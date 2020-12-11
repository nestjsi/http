import { Observable, ObservableInput } from "rxjs";
import { catchError } from "rxjs/operators";
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, NotFoundException } from "@nestjs/common";

import { NotFoundError } from "../error";

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: unknown /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof NotFoundError) {
            throw new NotFoundException(error.message.replace(/"/g, "'"));
          } else {
            throw error;
          }
        },
      ),
    );
  }
}
