import Blogpost from "@/components/homepage/blogpost";
import Discoverapp from "@/components/homepage/discoverapp";
import Herosection from "@/components/homepage/herosection";

export default function Home() {
  return (
    <div className=" w-full " >
      <div className=" w-full px-[94px] " >
        <Herosection />
      </div>
      <Blogpost />
      <div className=" w-full px-[94px] " >
        <Discoverapp />
      </div>
    </div>
  );
}
