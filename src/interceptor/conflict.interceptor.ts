import { Observable, ObservableInput } from "rxjs";
import { catchError } from "rxjs/operators";
import { CallHandler, ConflictException, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";

import { ConflictError } from "../error";

@Injectable()
export class ConflictInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: unknown /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof ConflictError) {
            throw new ConflictException(error.message.replace(/"/g, "'"));
          } else {
            throw error;
          }
        },
      ),
    );
  }
}
