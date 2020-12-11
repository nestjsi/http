export class GoneError extends Error implements Error {
  public message: string;
  public constructor(message: string = "Gone") {
    super(message);
    this.name = "GoneError";
  }
}
