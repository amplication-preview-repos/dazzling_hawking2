import { registerEnumType } from "@nestjs/graphql";

export enum Status {
    Pending = "pending",
    Cancel = "cancel",
    Complete = "complete"
}

registerEnumType(Status, {
    name: "Status",
  });