import React from "react";
import Image from "next/image";
import { setCookie } from "cookies-next";
import checkdata from "@/store/checklang";

const languages = [
  { label: "Arabic", value: "/auto/ar", image: "/images/flag1.png" },
  { label: "Farsi", value: "/auto/fa", image: "/images/flag2.jpg" },
  { label: "Turkish", value: "/auto/tr", image: "/images/flag3.png" },
  { label: "English", value: "/auto/en", image: "/images/flag4.png" },
  { label: "Spanish", value: "/auto/es", image: "/images/flag5.png" },
  { label: "French", value: "/auto/fr", image: "/images/flag6.png" },
  { label: "Portuguese", value: "/auto/pt", image: "/images/flag7.png" },
  { label: "Italian", value: "/auto/it", image: "/images/flag8.png" },
];

export default function LanguageSelector() {
  const { setCheck } = checkdata((state) => state);

  const handleLanguageChange = (value: string) => {
    setCookie("googtrans", decodeURI(value));
    setCheck(value);
    window.location.reload();
  };

  return (
    <select
      onChange={(e) => handleLanguageChange(e.target.value)}
      className="p-2 border rounded bg-transparent text-white"
    >
      {languages.map((lang) => (
        <option
          key={lang.value}
          value={lang.value}
          className="bg-slate-500 text-white"
        >
          {lang.label}
        </option>
      ))}
    </select>
  );
}
