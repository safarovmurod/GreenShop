import { useState } from "react";
import { useOutletContext } from "react-router";
import HeroSection from "../components/Home/HeroSection";
import ShopSection from "../components/Home/ShopSection";
import PromoBanners from "../components/Home/PromoBanners";
import BlogSection from "../components/Home/blogPosts";
import MobileSearch from "../components/Home/MobileSearch";

export default function Home() {
  // Ҷустуҷӯ дар Layout нигоҳ дошта мешавад (Header ҳам ҳамонро истифода мебарад)
  const { search, setSearch } = useOutletContext();
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <>
      <MobileSearch
        value={search}
        onChange={setSearch}
        onFilterClick={() => setFiltersOpen(true)}
      />
      <HeroSection />
      <ShopSection
        search={search}
        filtersOpen={filtersOpen}
        onCloseFilters={() => setFiltersOpen(false)}
      />
      <PromoBanners />
      <BlogSection />
    </>
  );
}
