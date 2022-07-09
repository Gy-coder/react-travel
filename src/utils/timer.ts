import dayjs, { Dayjs } from "dayjs";

type Time = string | number | Date | Dayjs | null | undefined;

export default function timer(time: Time, type = "all") {
  return dayjs(time).format(
    type === "all" ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
  );
}
