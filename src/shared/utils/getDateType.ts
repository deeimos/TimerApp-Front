import { DateType } from "../types/date.type";
import getWeekNumber from "./getWeekNumber";

export default function getDateType(now: Date): DateType {
  return {
    msFullDate: now.getTime(),
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    week: getWeekNumber(now),
    day: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
}
