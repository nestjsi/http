import { ExtendedError } from "./extended.error";

export class NotFoundError extends ExtendedError implements Error {
  public constructor(message?: unknown, data?: unknown) {
    if (typeof message === "string") {
      super(message, data);
    } else {
      if (message && typeof message === "object") {
        super("Not Found", message);
      } else {
        super("Not Found", data);
      }
    }
    this.name = "NotFoundError";
  }
}
