"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = ({ id }: {id: any}) => {
  const form = useRef<HTMLFormElement | any>(null);

  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm("service_uslipyo", "template_2atmtkp", form.current, "iT91ZsthnS02_yFOG").then(
      (result) => {
        if (result) {
          setMessage(sendMessage);
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const sendMessage: any = () => {
    setIsMessageSent(true);
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:md-12 py-24 gap-4 relative" id={id}>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 mt-24 md:mt-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">Follow my social media😎</p>
        <div className="socials flex flex-row gap-4">
          <Link href={"github.com"}>
            <Image src={"/img/Email/whatsapp.svg"} alt="github" width={30} height={30} />
          </Link>
          <Link href={"github.com"}>
            <Image src={"/img/Email/instagram.svg"} alt="github" width={30} height={30} />
          </Link>
          <Link href={"github.com"}>
            <Image src={"/img/Email/linkedin.svg"} alt="github" width={30} height={30} />
          </Link>
          <Link href={"github.com"}>
            <Image src={"/img/Email/github.svg"} alt="github" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 z-[100]">
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input type="email" id="email" name="email" required placeholder="haniffathan@example.com" className="bg-[#18191E] border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 mb-4" />
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input type="text" id="subject" name="subject" required placeholder="Just saying Hi" className="bg-[#18191E] border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea name="message" id="message" className="bg-[#18191E] border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2" placeholder="Let's talk about..."></textarea>
          </div>
          <button type="submit" onClick={sendMessage} className="bg-purple-400 hover:bg-purple-800 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
          <div className="">
            {isMessageSent && (
              <div className="flex justify-center">
                <p className="text-md text-center lg:text-lg font-semibold text-[#ADB7BE]">Thank you for joining, sending message success!!</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
