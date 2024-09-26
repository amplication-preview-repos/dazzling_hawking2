import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ScheduleService } from "./schedule.service";

@swagger.ApiTags("schedules")
@common.Controller("schedules")
export class ScheduleController {
  constructor(protected readonly service: ScheduleService) {}

  @common.Post("/create")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Create(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.Create(body);
      }
}
