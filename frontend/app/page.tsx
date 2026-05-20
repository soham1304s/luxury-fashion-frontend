import { BrandStory } from "@/sections/BrandStory";
import { FeaturedCollection } from "@/sections/FeaturedCollection";
import { Hero } from "@/sections/Hero";
import { Lookbook } from "@/sections/Lookbook";
import { NewArrivals } from "@/sections/NewArrivals";
import { Newsletter } from "@/sections/Newsletter";
import { SocialWall } from "@/sections/SocialWall";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <NewArrivals />
      <Lookbook />
      <SocialWall />
      <Newsletter />
    </>
  );
}
