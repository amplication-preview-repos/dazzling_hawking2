import { Injectable } from "@nestjs/common";

@Injectable()
export class ScheduleService {
  constructor() {}
  async Create(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
