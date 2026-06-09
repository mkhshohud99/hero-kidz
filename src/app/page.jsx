import Banner from "@/components/Home/Banner";
import Products from "@/components/Home/Products";

export const metadata = {
  title: "Hero Kidz | Home",
  description:
    "Discover quality toys and products for kids. Shop the latest collections at Hero Kidz.",
};

export default function Home() {
  return (
    <main className="space-y-20">
      <section>
        <Banner />
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <Products />
      </section>
    </main>
  );
}