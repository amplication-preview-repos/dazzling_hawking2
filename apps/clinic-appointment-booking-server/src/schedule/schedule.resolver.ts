import * as graphql from "@nestjs/graphql";
import { ScheduleService } from "./schedule.service";

export class ScheduleResolver {
  constructor(protected readonly service: ScheduleService) {}

  @graphql.Query(() => String)
  async Create(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.Create(args);
  }
}
