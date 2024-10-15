"use client";
import React from "react";
import Navbar from "./navbar";
import Footer from "../footer";
import { usePathname } from "next/navigation";

export default function Landingpagelayout({
  children,
  hidemena,
  hidefooterinfo,
}: Readonly<{
  children: React.ReactNode;
  hidemena?: boolean;
  hidefooterinfo?: boolean;
}>) {
  const pathname = usePathname();

  React.useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.defer = true;
    // Append script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="flex w-full overflow-x-hidden h-auto flex-col items-center ">
      <Navbar />
      <div
        className={` w-full lg:px-0  ${
          pathname === "/training/blog" ? "px-0" : "px-6"
        } `}
      >
        {children}
        <div className=" w-full lg:px-[94px] px-3 ">
          <Footer />
        </div>
      </div>
    </main>
  );
}
