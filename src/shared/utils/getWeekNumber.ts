export default function getWeekNumber(date: Date): number {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = (date.getTime() - firstDay.getTime()) / 86400000 + 1;
  return Math.ceil(dayOfYear / 7);
}
