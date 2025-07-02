import Timer from "@/entities/timer/Timer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TimerApp",
  description: "Сколько времени до Нового Года?",
};

export default function NewYear() {
  return <Timer mode="new-year" />;
}
