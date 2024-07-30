import Footer from "@/components/home/home-footer/footer";
import Members from "@/components/home/home-members/members";
import Projects from "@/components/home/home-project";
import Service from "@/components/home/home-service/service";
import HomeHeader from "@/components/home/home-header/homeGrid";

export default function Home() {
  return (

    <div className="overflow-hidden">
      <HomeHeader/>
      <Members/>
      <Projects/>
      <Service/>
      <Footer/>
      </div>

  );
}
