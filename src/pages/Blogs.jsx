import BlogHero from "../components/Blogs/BlogHero";
import FeaturedArticle from "../components/Blogs/FeaturedArticle";
import ArticleGrid from "../components/Blogs/ArticleGrid";
import BlogNewsletter from "../components/Blogs/BlogNewsletter";

export default function Blogs() {
  return (
    <main>
      <BlogHero />
      <FeaturedArticle />
      <ArticleGrid />
      <BlogNewsletter />
    </main>
  );
}
