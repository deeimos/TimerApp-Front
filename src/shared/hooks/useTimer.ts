"use client";

import useMounted from "@/shared/hooks/useMounted";
import { EventType } from "@/shared/types/events.type";
import getCurrentDate from "@/shared/utils/getCurrentDate";
import getEventDate from "@/shared/utils/getEventDate";
import getStart from "@/shared/utils/getStart";
import getTimeDifference from "@/shared/utils/getTimeDifference";
import { useEffect, useState } from "react";

const getEvent = (mode: EventType) => {
  if (mode === "custom") return getEventDate("summer"); // для кастомного события нужен бек, временно лето
  else return getEventDate(mode);
};

const getStartDate = (mode: EventType) => {
  if (mode === "custom") return getStart("summer"); // для кастомного события нужен бек, временно лето
  else return getStart(mode);
};

export default function useTimer(mode: EventType) {
  const mounted = useMounted();

  const [eventDate, setEventDate] = useState(getEvent(mode));
  const [startDate, setStartDate] = useState(getStartDate(mode));
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [currentDifference, setCurrentDifference] = useState(getTimeDifference(startDate, currentDate));
  const [totalDifference, setTotalDifference] = useState(getTimeDifference(startDate, eventDate));

  useEffect(() => {
    if (!mounted) return;

    let timeoutId: NodeJS.Timeout;

    const sync = () => {
      const now = getCurrentDate();
      setCurrentDate(now);
      setCurrentDifference(getTimeDifference(startDate, now));

      const msUntilNextSecond = 1000 - (Date.now() % 1000);
      timeoutId = setTimeout(sync, msUntilNextSecond);
    };

    sync();

    return () => clearTimeout(timeoutId);
  }, [mounted, startDate]);

  return mounted ? { current: currentDifference, total: totalDifference } : null;
}