import Blogpost from "@/components/homepage/blogpost";
import Discoverapp from "@/components/homepage/discoverapp";
import Herosection from "@/components/homepage/herosection";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar"; 

export default function Home() {
  return (
    <main className="flex w-screen overflow-x-hidden min-h-screen flex-col items-center ">
      <Navbar />
      <div className=" max-w-[1440px] w-full " >
        <div className=" w-full px-[94px] " >
          <Herosection />
        </div>
        <Blogpost />
        <div className=" w-full px-[94px] " >
          <Discoverapp />
        </div>
        <div className=" w-full px-[94px] " >
          <Footer />
        </div>
      </div>
    </main>
  );
}
