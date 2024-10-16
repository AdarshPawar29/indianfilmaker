// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// declare module "nodemailer";

// export const runtime = "edge";

// export async function POST(req: Request) {
//   const { to, subject, body } = await req.json();

//   const transporter = nodemailer.createTransport({
//     // Configure your email service here
//     host: "smtp.example.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: '"Your Name" <your-email@example.com>',
//       to,
//       subject,
//       text: body,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Failed to send email:", error);
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

//Mock API
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "Hello from Next.js!" });
}
