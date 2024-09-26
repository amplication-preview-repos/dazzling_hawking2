import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Status } from "./Status";

class CreateSchedule {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    id!: number;

    @Field(() => Date)
    @Type(() => Date)
    date!: Date;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    mobileNumber!: number;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    tokenNumber!: string;

    @Field(() => Date)
    @Type(() => Date)
    expectedTime!: Date;

    @Field(() => Status)
    @ApiProperty({
        required: true,
        enum: Status
    })
    status!: "pending" | "cancel" | "complete";

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    patientName!: string;

    @Field(() => Date)
    @Type(() => Date)
    serveStartAt!: Date;

    @Field(() => Date)
    @Type(() => Date)
    serveEndAt!: Date;

    @Field(() => Date)
    @Type(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    @Type(() => Date)
    updatedAt!: Date;
}

export { CreateSchedule as CreateSchedule };