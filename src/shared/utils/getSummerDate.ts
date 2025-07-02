import { DateType } from "../types/date.type";
import getDateType from "./getDateType";
import dayjs from "dayjs";

export default function getSummerDate(): DateType {
  const now = dayjs();
  const year = now.year();

  const summerStart = dayjs(`${year}-06-01`);
  const summerEnd = dayjs(`${year}-09-01`);

  if (now.isBefore(summerStart)) return getDateType(summerStart.toDate());
  if (now.isBefore(summerEnd)) return getDateType(summerEnd.toDate());

  return getDateType(dayjs(`${year + 1}-06-01`).toDate());
}
