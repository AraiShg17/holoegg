export const saveTime = (): void => {
  const now = new Date();
  now.setHours(now.getUTCHours() + 9);
  localStorage.setItem("time", now.toString());
};
