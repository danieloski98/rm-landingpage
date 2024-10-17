import { FaceBookIcon, InstagramIcon, YoutubeIcon } from "@/svg";
import Link from "next/link";
import React from "react";

export default function SocialMedia() {
    return (
        <div className=' flex gap-4 items-center ' >
            <Link href={""} target="_blank" >
                <FaceBookIcon />
            </Link>
            <Link href={"https://www.instagram.com/rhema.mena?igsh=dmhrNXBrMGlrNmFi"} target="_blank" >
                <InstagramIcon />
            </Link>
            <Link href={""} target="_blank" >
                <YoutubeIcon />
            </Link>
    </div>
  );
}
