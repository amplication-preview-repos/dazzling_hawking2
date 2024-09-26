import { Module } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";
import { ScheduleController } from "./schedule.controller";
import { ScheduleResolver } from "./schedule.resolver";

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, ScheduleResolver],
  exports: [ScheduleService],
})
export class ScheduleModule {}
