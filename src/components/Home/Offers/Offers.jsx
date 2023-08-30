import styles from "./offers.module.scss";

import DJ_Image from "assets/images/dj.png";
import Offers_Image from "assets/images/offers.png";
import Cocktail_Image from "assets/images/cocktail.png";
import NearYou_Image_1 from "assets/images/near_you-1.png";
import NearYou_Image_2 from "assets/images/near_you-2.png";

import Events from "./components/Events";
import OffersEl from "./components/Offers";
import EdCoin from "./components/Edcoin";
import RestaurantsSlider from "./components/RestaurantsSlider";
import NearUser from "./components/NearUser";
import AvailableNow from "./components/AvailableNow";
import Favorites from "./components/Favorites";

export default function Offers(props) {
  return (
    <section className={styles.offers__container}>
      <div className={styles.offers__container__inner}>
        <Events imgSrc={DJ_Image} />

        <OffersEl imgSrc={Offers_Image} />

        <EdCoin imgSrc={Cocktail_Image} />

        <RestaurantsSlider />

        <NearUser data={[NearYou_Image_1, NearYou_Image_2]} />

        <AvailableNow />

        <Favorites />
      </div>
    </section>
  );
}
