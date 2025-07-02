import { DateType } from "../types/date.type";
import getDateType from "./getDateType";

export default function getCurrentDate(): DateType {
  return getDateType(new Date());
}
