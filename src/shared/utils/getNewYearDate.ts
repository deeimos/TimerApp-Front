import { DateType } from "../types/date.type";
import getDateType from "./getDateType";

export default function getNewYearDate(): DateType {
  const now = new Date();
  return getDateType(new Date(now.getFullYear() + 1, 0, 1));
}
