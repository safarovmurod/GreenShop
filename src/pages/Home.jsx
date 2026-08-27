import { useState } from "react";
import HeroSection from "../components/Home/HeroSection";
import ShopSection from "../components/Home/ShopSection";
import PromoBanners from "../components/Home/PromoBanners";
import BlogSection from "../components/Home/blogPosts";
import MobileSearch from "../components/Home/MobileSearch";

export default function Home() {
  // Ҷустуҷӯ ва филтрҳои мобилӣ дар ин ҷо нигоҳ дошта мешаванд
  const [search, setSearch] = useState("");
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
