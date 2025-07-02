import Timer from "@/entities/timer/Timer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TimerApp",
  description: "Сколько времени до лета?",
};

export default function Summer() {
  return <Timer mode="summer" />;
}
