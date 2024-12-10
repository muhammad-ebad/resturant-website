import MainCourse from "../components/MainCourse/MainCourse";
import Experiences from "../components/Experience/Experience";
import Dessert from "../components/Desserts.tsx/Desserts";
import Drink from "../components/Drinks/Drinks";
import HeroSection from "./Hero";
import PartnersAndClients from "../components/ParentClient/page";
import StarterMenu from "../components/startMenu/page";

export default function Menu() {
  return (
<div>
    <HeroSection />
    <StarterMenu />
    <MainCourse />
    <Experiences />
    <Dessert />
    <Drink />
    <PartnersAndClients />
</div>
  );
}
