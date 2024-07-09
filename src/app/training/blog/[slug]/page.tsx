import ContentSection from "@/components/blog/singlepage/Content";
import ContentHeader from "@/components/blog/singlepage/ContentHeader";

export default function PostPage() {
    return (
        <div className="w-full h-auto bg-white">
            {/* BANNER SECTION */}
            <ContentHeader />

            <ContentSection />
        </div>
    )
}