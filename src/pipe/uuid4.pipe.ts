import { IsUUID4 } from "@nestjsi/class-validator";

export class UUID4Pipe {
  @IsUUID4()
  public readonly id: string;
}
