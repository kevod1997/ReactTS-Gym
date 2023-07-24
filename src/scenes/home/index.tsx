import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText1.png";
import HomePageGraphic from "@/assets/HomePageGraphic2.png";
import SponsorFox from "@/assets/SponsorFox.png";
import SponsorOlav from "@/assets/SponsorOlav2.png";
import SponsorEna from "@/assets/SponsorEna.png";
import SponsorGatorade from "@/assets/SponsorGatorade.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 pt-1  md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
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

            <p className="mt-8 text-sm">
            Experimenta una comunidad de apoyo y motivación en nuestro gimnasio, donde todos crecemos juntos.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contactanos
            </ActionButton>


            {/* CAMBIAR LEARN MORE POR ICONO DE WA */}

            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
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
      {/* PONER SPONSORS ? PREGUNTAR POR ALGUNA EMPRESA */}
      {isAboveMediumScreens && (
        <div className="h-auto w-full bg-primary-100 py-4">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-24">
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
