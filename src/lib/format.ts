import type { Entry } from './bio';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Dates are split by hand: new Date() reads them as UTC and can shift the month
const monthYear = (iso: string) => {
  const [year, month] = iso.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

export const dateRange = (start: string, end: string) =>
  `${monthYear(start)} – ${end === 'Present' ? end : monthYear(end)}`;

const numericMonth = (yearMonth: string) => {
  const [year, month] = yearMonth.split('-');
  return `${month}/${year}`;
};

const monthIndex = (yearMonth: string) => {
  const [year, month] = yearMonth.split('-').map(Number);
  return year * 12 + month;
};

export const projectWhen = (start: string, end?: string) => {
  if (!end) return numericMonth(start);
  return `${numericMonth(start)} – ${end === 'Ongoing' ? end : numericMonth(end)}`;
};

// The final month counts, so April to June is 3 months
export const projectDuration = (start: string, end?: string) => {
  if (end === 'Ongoing') return 'Ongoing';
  if (!end) return undefined;
  const months = monthIndex(end) - monthIndex(start) + 1;
  if (months <= 0) return undefined;
  return `${months} month${months === 1 ? '' : 's'}`;
};

// A Map keeps first-seen order, so groups stay in the order of the data
export const groupByCompany = (entries: Entry[]) => {
  const groups = new Map<string, Entry[]>();
  for (const entry of entries) {
    groups.set(entry.company, [...(groups.get(entry.company) ?? []), entry]);
  }
  return [...groups].map(([name, roles]) => ({ name, first: roles[0], roles }));
};
