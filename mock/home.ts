export default {
  "POST /api/commons/citys": (req: any, res: any) => {
    res.status(200).json([
      [
        { label: "杭州", value: "10001" },
        { label: "苏州", value: "10002" },
      ],
    ]);
  },
};
