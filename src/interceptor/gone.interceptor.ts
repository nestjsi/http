import { Observable, ObservableInput } from "rxjs";
import { catchError } from "rxjs/operators";
import { CallHandler, ExecutionContext, GoneException, Injectable, NestInterceptor } from "@nestjs/common";

import { GoneError } from "../error";

@Injectable()
export class GoneInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: unknown /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof GoneError) {
            throw new GoneException(error.message.replace(/"/g, "'"));
          } else {
            throw error;
          }
        },
      ),
    );
  }
}
