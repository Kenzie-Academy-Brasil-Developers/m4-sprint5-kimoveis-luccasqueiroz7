import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { Schedule } from "../../entities/schedule.entity";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

export const scheduleCreateService = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest) => {
  const scheduleRepository = AppDataSource.getRepository(Schedule);
  const propertyRepository = AppDataSource.getRepository(Property);

  const propertyInvalidId = await propertyRepository.findOneBy({
    id: propertyId,
  });

  if (!propertyInvalidId) {
    throw new AppError(404, "Invalid id");
  }
  const scheduleDate = await scheduleRepository.findOneBy({ date });
  const scheduleHour = await scheduleRepository.findOneBy({ hour });

  let dateSchedule: string | Date | number = date.replace("/", "-");
  dateSchedule = new Date(dateSchedule);
  dateSchedule = dateSchedule.getDay();

  if (Number(dateSchedule) < 1 || Number(dateSchedule) > 5) {
    throw new AppError(400, "out of service day");
  }

  const hourSchedule = hour.slice(0, -3);

  if (Number(hourSchedule) > 18 || 8 > Number(hourSchedule)) {
    throw new AppError(400, "out of service hours");
  }

  if (scheduleDate && scheduleHour) {
    throw new AppError(400, "time is already scheduled");
  }

  const schedule = new Schedule();
  schedule.date = date;
  schedule.hour = hour;
  schedule.property = propertyId;
  schedule.user = userId;

  await scheduleRepository.save(schedule);

  return;
};
