import dayjs from "dayjs";
import { DateType, DifferenceType } from "../types/date.type";

export default function getTimeDifference(startDate: DateType, endDate: DateType): DifferenceType {
  const start = dayjs(startDate.msFullDate);
  const end = dayjs(endDate.msFullDate);

  const msDuration = end.diff(start);

  return {
    msDuration,
    years: end.diff(start, "year"),
    months: end.diff(start, "month"),
    weeks: end.diff(start, "week"),
    days: end.diff(start, "day"),
    hours: end.diff(start, "hour"),
    minutes: end.diff(start, "minute"),
    seconds: end.diff(start, "second"),
  };
}
