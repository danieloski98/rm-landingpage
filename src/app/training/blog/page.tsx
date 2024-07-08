'use client';
import React from "react";
import CustomInput from "@/components/shared/customInput";
import { SearchNormal} from 'iconsax-react'
import BlogTab from "@/components/blog/BlogTab";
import BlogHeader from "@/components/blog/Header";
import ContentArea from "@/components/blog/ContentArea";

// REMEBER TO USE NEXTJS ssr FOR DATA FETCHING

export default function BlogPage() {
    const [active, setActive] = React.useState<string>("Articles");
    return (
        <div className="w-full h-full">
            {/* HEADER SECTION */}
            <BlogHeader />
            {/* TAB SECTION */}
            <BlogTab value={active} onClick={(data) => setActive(data)} />

            {/* MAIN CONTENT AREA */}
            <ContentArea />

        </div>
    )
}