"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "@/components/NavBar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Send the form data to the email API
    // const response = await fetch("/api/send-email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     to: "adarshpawar28@gmail.com",
    //     subject: `New message from ${formData.name}`,
    //     body: formData.message,
    //   }),
    // });

    // if (response.ok) {
    //   console.log("Email sent successfully");
    // } else {
    //   console.error("Failed to send email");
    // }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#1c1d20";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="bg-[#1c1d20]">
      <NavigationBar className="theme-dark" />
      <div className="min-h-screen text-white font-neue">
        <div className="container mx-auto px-4 py-16 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-start">
            <div className="col-span-2">
              <h1 className="flex-col w-full contact-h1 leading-tight">
                <span className="flex items-center">Let&apos;s start a</span>
                <span>project together</span>
              </h1>
            </div>
            <div className="hidden md:flex flex-col items-start self-end">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="/DSC07033.jpg"
                  alt="Profile"
                  width={256}
                  height={256}
                />
              </div>
              <div className="arrow relative -bottom-8">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-90"
                >
                  <path
                    d="M2.76923 0H12V9.23077"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="12"
                    y1="0"
                    x2="0"
                    y2="12"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 md:pr-16">
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="hidden">
                  <label htmlFor="tel">Phone Number</label>
                  <input type="text" id="form-tel" name="tel" tabIndex={-1} />
                </div>
                {[
                  {
                    number: "01",
                    label: "What's your name?",
                    name: "name",
                    placeholder: "Christopher Nolan",
                  },
                  {
                    number: "02",
                    label: "What's your email?",
                    name: "email",
                    type: "email",
                    placeholder: "chris.batman@gmail.com",
                  },
                  {
                    number: "03",
                    label: "What's the name of your organization?",
                    name: "company",
                    placeholder: "Wayne Enterprises",
                  },
                  {
                    number: "04",
                    label: "What services are you looking for?",
                    name: "service",
                    placeholder:
                      "Photography, Videography, make a movie ;) etc.",
                  },
                  {
                    number: "05",
                    label: "Your message",
                    name: "message",
                    placeholder: "Hello Bhavesh, can you help me with ... *",
                    isTextarea: true,
                  },
                ].map((field) => (
                  <div key={field.number} className="form-col">
                    <h5 className="text-sm text-gray-400 mb-2">
                      {field.number}
                    </h5>
                    <label
                      htmlFor={`form-${field.name}`}
                      className="block text-2xl font-light mb-2"
                    >
                      {field.label}
                    </label>
                    {field.isTextarea ? (
                      <textarea
                        id={`form-${field.name}`}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 focus:border-white transition-colors text-lg py-2 px-0 resize-none"
                        placeholder={field.placeholder}
                        rows={4}
                        required
                      />
                    ) : (
                      <input
                        type={field.type || "text"}
                        id={`form-${field.name}`}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 focus:border-white transition-colors text-lg py-2 px-0"
                        placeholder={field.placeholder}
                        required
                      />
                    )}
                  </div>
                ))}
                <div className="btn-contact-send">
                  <motion.button
                    type="submit"
                    className="btn btn-round bg-[#455ce9] text-white px-8 py-4 rounded-full text-lg font-light"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send it!
                  </motion.button>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/3 space-y-16 mt-16 md:mt-0">
              <div>
                <h5 className="text-sm text-gray-400 mb-4">Contact Details</h5>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="mailto:info@indianfilmaker.com"
                      className="hover:underline"
                    >
                      info@indianfilmaker.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+919619511017" className="hover:underline">
                      +91 96195 11017
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm text-gray-400 mb-4">Business Details</h5>
                <ul className="space-y-2">
                  <li>Bhavesh K.</li>
                  <li>CoC: 92411711</li>
                  <li>VAT: NL866034080B01</li>
                  <li>Location: Mumbai</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm text-gray-400 mb-4">Socials</h5>
                <ul className="space-y-2">
                  {[
                    {
                      name: "YouTube",
                      url: "https://www.youtube.com/@BhaveshKatwaleplus",
                    },
                    {
                      name: "Instagram",
                      url: "https://www.instagram.com/indianfilmaker/",
                    },
                    {
                      name: "Twitter",
                      url: "https://twitter.com/indianfilmaker",
                    },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/indianfilmaker/",
                    },
                  ].map((social) => (
                    <li key={social.name}>
                      <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {social.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
