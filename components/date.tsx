import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time className="block font-mono text-sm pb-1" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
