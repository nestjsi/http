export class InternalServerError extends Error {
  public message: string;
  public constructor(message: string = "Internal Server Error") {
    super(message);
    this.name = "InternalServerError";
  }
}
