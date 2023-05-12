export const getFormattedTime = (): { hhmm: string; full: string } => {
  const now = new Date();
  now.setHours(now.getUTCHours() + 9);
  const hhmm =
    ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2);

  const yyyy = now.getFullYear();
  const mm = ("0" + (now.getMonth() + 1)).slice(-2);
  const dd = ("0" + now.getDate()).slice(-2);
  const full = `${yyyy}-${mm}-${dd} ${hhmm}`;

  return { hhmm, full };
};
