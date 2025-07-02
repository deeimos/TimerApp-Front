"use client";

import useMounted from "@/shared/hooks/useMounted";
import { EventType } from "@/shared/types/events.type";
import getCurrentDate from "@/shared/utils/getCurrentDate";
import getNewYearDate from "@/shared/utils/getNewYearDate";
import getSummerDate from "@/shared/utils/getSummerDate";
import getTimeDifference from "@/shared/utils/getTimeDifference";
import { useEffect, useState } from "react";

const getEvenentDate = (mode: EventType) => {
  switch (mode) {
    case "new-year":
      return getNewYearDate();
    case "summer":
      return getSummerDate();
    case "custom": // для кастомного события нужен бек, временно лето
      return getSummerDate();
  }
};

interface ITimer {
  mode: EventType;
}
export default function Timer({ mode }: ITimer) {
  const mounted = useMounted();
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [eventDate, setEventDate] = useState(getEvenentDate(mode));
  const [timeDifference, setTimeDifference] = useState(getTimeDifference(currentDate, eventDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = getCurrentDate();
      setCurrentDate(now);
      setTimeDifference(getTimeDifference(now, eventDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div>
        <p>Current Date:</p>
        <p>year: {currentDate.year}</p>
        <p>month: {currentDate.month}</p>
        <p>week: {currentDate.week}</p>
        <p>day: {currentDate.day}</p>
        <p>hour: {currentDate.hour}</p>
        <p>minute: {currentDate.minute}</p>
        <p>second: {currentDate.second}</p>
      </div>
      <div>
        <p>Event Date:</p>
        <p>year: {eventDate.year}</p>
        <p>month: {eventDate.month}</p>
        <p>week: {eventDate.week}</p>
        <p>day: {eventDate.day}</p>
        <p>hour: {eventDate.hour}</p>
        <p>minute: {eventDate.minute}</p>
        <p>second: {eventDate.second}</p>
      </div>
      <div>
        <p>Time Difference:</p>
        <p>year: {timeDifference.years}</p>
        <p>month: {timeDifference.months}</p>
        <p>week: {timeDifference.weeks}</p>
        <p>day: {timeDifference.days}</p>
        <p>hour: {timeDifference.hours}</p>
        <p>minute: {timeDifference.minutes}</p>
        <p>second: {timeDifference.seconds}</p>
      </div>
    </div>
  );
}
