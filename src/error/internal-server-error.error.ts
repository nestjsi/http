import { ExtendedError } from "./extended.error";

export class InternalServerError extends ExtendedError {
  public constructor(message?: unknown, data?: unknown) {
    if (typeof message === "string") {
      super(message, data);
    } else {
      if (message && typeof message === "object") {
        super("Internal Server Error", message);
      } else {
        super("Internal Server Error", data);
      }
    }
    this.name = "InternalServerError";
  }
}
