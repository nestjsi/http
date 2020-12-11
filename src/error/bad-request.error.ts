export class BadRequestError extends Error implements Error {
  public message: string;
  public constructor(message: string = "Bad Request") {
    super(message);
    this.name = "BadRequestError";
  }
}
