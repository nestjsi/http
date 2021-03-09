import { ExtendedError } from "./extended.error";

export class ForbiddenError extends ExtendedError implements Error {
  public message: string;
  public constructor(message: string = "Forbidden") {
    super(message);
    this.name = "ForbiddenError";
  }
}
