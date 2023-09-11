// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import UpdateInvoiceSeqNo from "@/utilities/UpdateInvoiceSeqNo";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  new UpdateInvoiceSeqNo().updateInvoiceSeqNo(req.body.invoiceNo);
  res.status(200).json({ updated: true });
}
