export class ExtendedError extends Error implements Error {
  public readonly message: string;
  public readonly data?: Record<string, unknown>;
  public constructor(message: string = "Error", data: unknown = undefined) {
    super(message);
    if (data && typeof data === "object") {
      this.data = data as Record<string, unknown>;
    }
  }
  public toJSON(): Record<string, unknown> {
    if (this.data) {
      return JSON.parse(JSON.stringify(this.data));
    } else {
      return { message: this.message };
    }
  }
  public toString(): string {
    return JSON.stringify(this.toJSON());
  }
}
