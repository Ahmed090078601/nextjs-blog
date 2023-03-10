import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={(date, 'LLLL d, yyyy')}>{dateString}</time>;
}