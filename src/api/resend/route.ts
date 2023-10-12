import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailSection/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest, res: NextResponse) {
  const { body } = await req.json();
  const { email, subject, message }: any = body;

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["haniffathan33@gmail.com", email],
      subject: "Hello world",
      react: EmailTemplate({ title: subject, message: message }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
