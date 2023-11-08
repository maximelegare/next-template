import * as nodemailer from "nodemailer";
import { type MailOptions } from "nodemailer/lib/json-transport";

import { env } from "~/env.mjs";

interface EmailContact {
  name: string;
  image: string;
  email: string;
  link: string;
  toEmail: string;
}

export class Emailer {
  private readonly transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // user: env.USER_GMAIL,
        // pass: env.USER_GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  public sendEmail(mailOptions: MailOptions) {
    return this.transporter.sendMail(mailOptions);
  }

  public sendFriendRequest({
    toEmail,
    email,
    name,
    image,
    link,
  }: EmailContact) {
    return this.sendEmail(
      sendFriendRequestTemplate({ toEmail, email, name, image, link })
    );
  }
}

export const emailer = new Emailer();

export const sendFriendRequestTemplate = ({
  email,
  name,
  image,
  link,
  toEmail,
}: EmailContact) => {
  return {
    // from: env.USER_GMAIL,
    to: toEmail,
    subject: `PARTAGO - Invitation de ${name}`,
    html: `
    <div
    style="
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
    "
  >
    <div
      style="
        margin-bottom: 20px;
        text-align: center;
        color: #354281;
        font-size: 1.1em;
        font-weight: bold;
        max-width: 250px;
      "
    >
      Vous avez une nouvelle requete d'ami!
    </div>

    <div
      style="
        max-width: 250px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
        border-radius: 10px;
        background-color: #CACFEB;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        color: #667CE9;
        padding: 15px;
      "
    >
      <div
        style="
          margin: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
      <img
      alt=""
      src="${image}"
      style="
        width: 60px;
        height: 60px;
        border-radius: 999999px;
        margin-bottom: 20px;
        border-width: 2px;
        border-color: white;
        border-style: solid;
      "
    />
        <div style="text-align:center; font-weight: bold; color: #354281; ">
          ${name}
        </div>
        <div style="margin-bottom: 20px;">${email}</div>
        <a href="${link}" style="text-decoration: underline; margin-bottom:20px; ">
          ${link}
        </a>
      </div>
    </div>
  </div>
    `,
  } as MailOptions;
};
