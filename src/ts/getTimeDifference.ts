export const getTimeDifference = (): number => {
  const storedTime = localStorage.getItem("time");
  if (!storedTime) {
    return 0;
  }
  const now = new Date();
  now.setHours(now.getUTCHours() + 9);
  const diffMs = now.getTime() - new Date(storedTime).getTime();
  return Math.floor(diffMs / (60 * 1000)); // Convert milliseconds to minutes
};
