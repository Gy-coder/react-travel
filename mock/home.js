import { defineMock } from "umi";

export default defineMock({
  "POST /api/commons/citys": (req, res) => {
    res.status(200).json([
      [
        { label: "杭州", value: "10001" },
        { label: "苏州", value: "10002" },
      ],
    ]);
  },
});
