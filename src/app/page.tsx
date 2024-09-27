import HomeFooter from "@/components/home/home-footer/footer";
import HomeMembers from "@/components/home/home-members/members";
import HomeProjects from "@/components/home/home-project";
import HomeService from "@/components/home/home-service/service";
import HomeHeader from "@/components/home/home-header/homeGrid";

export default function Home() {
  return (

    <div className="overflow-hidden">
      <HomeHeader/>
      <HomeMembers/>
      <HomeProjects/>
      <HomeService/>
      <HomeFooter/>
      </div>

  );
}
