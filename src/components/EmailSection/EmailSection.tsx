"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "../Reveal";
import Image from "next/image";

const EmailSection = ({ id }: { id: string }) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [validate, setValidate] = useState<string>("");

  const sendEmail = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    if (!form.current) {
      console.error("Form reference is not set");
      return;
    }

    const email = form.current.email.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setValidate("Please enter a valid email address");
      return;
    }

    if (!form.current) {
      setValidate("Please fill in all fields");
      return;
    }

    if (email)
      try {
        await emailjs.sendForm(
          "service_uslipyo",
          "template_2atmtkp",
          form.current,
          "iT91ZsthnS02_yFOG"
        );
      } catch (error) {
        console.log(error);
      }
  };

  const handleButtonClick = () => {
    sendEmail();
  };

  useEffect(() => {
    if (isMessageSent) {
      const timer = setTimeout(() => {
        setIsMessageSent(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isMessageSent]);

  return (
    <section
      className="w-full max-w-[1440px] grid md:grid-cols-2 my-12 md:md-12 py-24 gap-4 relative px-10"
      id={id}>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 mt-24 md:mt-0 transform -translate-x-1/2 -translate-y-1/2" />
      <Reveal>
        <div className="z-10 mb-10 md:mb-0">
          <h1 className="font-bold text-white my-2">Let's Connect</h1>
          <p className="text-[#ADB7BE] mb-4 max-w-md">Follow my social media</p>
          <div className="socials flex flex-row gap-4">
            <Link href={"https://wa.me/6285724367468"}>
              <Image
                src={"/img/Email/whatsapp.svg"}
                alt="github"
                width={30}
                height={30}
              />
            </Link>
            <Link href={"https://www.instagram.com/haniffthn__"}>
              <Image
                src={"/img/Email/instagram.svg"}
                alt="github"
                width={30}
                height={30}
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/haniep-fathan"}>
              <Image
                src={"/img/Email/linkedin.svg"}
                alt="github"
                width={30}
                height={30}
              />
            </Link>
            <Link href={"https://www.github.com/HanifFathan10"}>
              <Image
                src={"/img/Email/github.svg"}
                alt="github"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 z-[100]">
          <div>
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="haniffathan@example.com"
              className="bg-secondary border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full px-4 py-2 mb-4"
            />
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Just saying Hi"
              className="bg-secondary border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-secondary border border-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full px-4 py-2"
              placeholder="Let's talk about..."
              cols={5}
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleButtonClick}
            className="bg-sky-800 hover:bg-cyan-300 text-white hover:text-[#212121] font-medium py-2.5 px-5 transition-all rounded-lg w-full focus:ring-2 focus:ring-slate-500">
            Send Message
          </button>
          <div className="">
            {isMessageSent && (
              <div className="flex justify-center">
                <p className="text-md text-center lg:text-lg font-semibold text-[#ADB7BE]">
                  Thank you for joining, sending message success!!
                </p>
              </div>
            )}

            {validate && (
              <div className="flex justify-center">
                <p className="text-md text-center lg:text-lg font-semibold text-[#ADB7BE]">
                  {validate}
                </p>
              </div>
            )}
          </div>
        </form>
      </Reveal>
    </section>
  );
};

export default EmailSection;
