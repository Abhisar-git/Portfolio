import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "../components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <div className = "relative bg-black text-white flex items-center justify-center flex-col mx-auto sm:px-10 px-5 ">
        <div className="max-w-7xl w-full ">
         <FloatingNav navItems = {navItems}/>
         <Hero/> 
         <Grid/>
         <RecentProjects/>
         <Approach/>
         <Footer/>
        </div>
      </div>
    </main>
  );
}
