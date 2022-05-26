export const dateFinder = (days: number) => {
  const date: Date = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const result = [year, month, day].join('-');
  return result;
};

export default dateFinder;
