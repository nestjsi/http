import { ExtendedError } from "./extended.error";

export class GoneError extends ExtendedError implements Error {
  public constructor(message?: unknown, data?: unknown) {
    if (typeof message === "string") {
      super(message, data);
    } else {
      if (message && typeof message === "object") {
        super("Gone", message);
      } else {
        super("Gone", data);
      }
    }
    this.name = "GoneError";
  }
}
