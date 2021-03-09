import { ExtendedError } from "./extended.error";

export class BadRequestError extends ExtendedError implements Error {
  public constructor(message?: unknown, data?: unknown) {
    if (typeof message === "string") {
      super(message, data);
    } else {
      if (message && typeof message === "object") {
        super("Bad Request", message);
      } else {
        super("Bad Request", data);
      }
    }
    this.name = "BadRequestError";
  }
}
