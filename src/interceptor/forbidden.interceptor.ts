import { Observable, ObservableInput } from "rxjs";
import { catchError } from "rxjs/operators";
import { CallHandler, ExecutionContext, ForbiddenException, Injectable, NestInterceptor } from "@nestjs/common";

import { ForbiddenError } from "../error";

@Injectable()
export class ForbiddenInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: unknown /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof ForbiddenError) {
            throw new ForbiddenException(error.message.replace(/"/g, "'"));
          } else {
            throw error;
          }
        },
      ),
    );
  }
}
