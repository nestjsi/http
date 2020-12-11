export class ForbiddenError extends Error implements Error {
  public message: string;
  public constructor(message: string = "Forbidden") {
    super(message);
    this.name = "ForbiddenError";
  }
}
