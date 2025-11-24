"use client";

import useTimer from "@/shared/hooks/useTimer";
import { EventType } from "@/shared/types/events.type";
import TimeProgressBar from "@/shared/ui/TimeProgressBar";

interface ITimer {
  mode: EventType;
}
export default function Timer({ mode }: ITimer) {
  const timer = useTimer(mode);
  if (!timer) return null;

  const { current, total } = timer;

  return (
    <div>
      <TimeProgressBar label="Месяцы" current={current.months} max={total.months} />
      <TimeProgressBar label="Недели" current={current.weeks} max={total.weeks} />
      <TimeProgressBar label="Дни" current={current.days} max={total.days} />
      <TimeProgressBar label="Часы" current={current.hours} max={total.hours} />
      <TimeProgressBar label="Минуты" current={current.minutes} max={total.minutes} />
      <TimeProgressBar label="Секунды" current={current.seconds} max={total.seconds} />
    </div>
  );
}
