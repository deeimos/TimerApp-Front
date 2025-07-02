export default function isSummer(): boolean {
  const currentMonth = new Date().getMonth() + 1;
  return currentMonth > 5 && currentMonth < 9;
}
