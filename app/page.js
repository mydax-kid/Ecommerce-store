// import ProductList from "@/components/ProductList";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductGrid from "@/components/ProductGrid";
import Slider from "@/components/Slider";
import Subscribe from "@/components/Subscribe.jsx";

export default function Home() {
  return (
    <main className="w-full">
      <Slider/>
      <FeaturedProducts type='featured' />
      <ProductGrid/>
      <FeaturedProducts type='trending' />
      <Subscribe/>
    </main>
  )
}
 