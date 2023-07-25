import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText1.png";
import HomePageGraphic from "@/assets/HomePageGraphic2.png";
import SponsorFox from "@/assets/SponsorFox.png";
import SponsorOlav from "@/assets/SponsorOlav2.png";
import SponsorEna from "@/assets/SponsorEna.png";
import SponsorGatorade from "@/assets/SponsorGatorade.png"

import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 pt-1 md:pt-16 ">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 md:pb-8"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm font-semibold">
            Experimenta una comunidad de apoyo y motivación en nuestro gimnasio, donde todos crecemos juntos.
            </p>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, y: 50 },
             visible: { opacity: 1, y: 0 },
           }}
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </motion.div>
      </motion.div>

      {/* SPONSORS */}

      {isAboveMediumScreens && (
        <div className="h-auto w-full bg-gray-50 py-4 pl-40">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-center mx-20 gap-20">
              <img alt="fox-sponsor" src={SponsorFox} />
              <img alt="olavarria-sponsor" src={SponsorOlav} />
              <img alt="ena-sponsor" src={SponsorEna} />
              <img alt="gatorade-sponsor" src={SponsorGatorade} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
