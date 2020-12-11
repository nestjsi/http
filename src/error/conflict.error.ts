export class ConflictError extends Error implements Error {
  public message: string;
  public constructor(message: string = "Conflict") {
    super(message);
    this.name = "ConflictError";
  }
}
