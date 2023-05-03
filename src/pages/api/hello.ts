import type { NextApiRequest, NextApiResponse } from "next";
import type { ApiResponseBase } from "types";

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponseBase<any>>) {
  Math.random() > 0.5
    ? res.status(200).json({ success: true, data: {} })
    : res.status(400).json({ success: false, message: "error" });
}
