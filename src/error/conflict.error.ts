import { ExtendedError } from "./extended.error";

export class ConflictError extends ExtendedError implements Error {
  public constructor(message?: unknown, data?: unknown) {
    if (typeof message === "string") {
      super(message, data);
    } else {
      if (message && typeof message === "object") {
        super("Conflict", message);
      } else {
        super("Conflict", data);
      }
    }
    this.name = "ConflictError";
  }
}
