import {
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, ObservableInput } from "rxjs";
import { catchError } from "rxjs/operators";

import { InternalServerError } from "../error";

@Injectable()
export class InternalServerErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        (error: unknown /*, caught: Observable<any>*/): ObservableInput<any> => {
          if (error instanceof InternalServerError) {
            throw new InternalServerErrorException(error.message.replace(/"/g, "'"));
          } else {
            throw error;
          }
        },
      ),
    );
  }
}
