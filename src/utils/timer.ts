import dayjs, { Dayjs } from "dayjs";

export default function timer(
  time: string | number | Date | Dayjs | null | undefined,
  type = "all"
) {
  return dayjs(time).format(
    type === "all" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
  );
}
