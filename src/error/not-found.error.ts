export class NotFoundError extends Error {
  public message: string;
  public constructor(message: string = "Not Found") {
    super(message);
    this.name = "NotFoundError";
  }
}
