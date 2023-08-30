import { Nav, Footer } from "components";
import { ScrollToTopButton, SearchBar } from "components/Layouts";
import { Offers, ForYoy, RecentlyViewed } from "components/Home";

import "swiper/css";
import "swiper/css/pagination";

export default function Page() {
  return (
    <>
      <Nav />
      <SearchBar />
      <main>
        <Offers />
        <ForYoy />
        <RecentlyViewed />
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
}
