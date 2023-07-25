import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/Maquinas.jpg";
import image2 from "@/assets/Espalda.png";
import image3 from "@/assets/Bicicleta2.png";
import image4 from "@/assets/Maquinas4.png";
import image5 from "@/assets/Barra.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Instalaciones";

const classes: Array<ClassType> = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Instalaciones = ({ setSelectedPage }: Props) => {
  return (
  //  <div className="mt-20 bg-white">
     <section id="instalaciones" className="w-full bg-gray-20 pt-20 pb-28">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Instalaciones)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Nuestras instalaciones</HText>
            <p className="py-5">
            Descubre nuestras instalaciones de primer nivel. Espacios diseñados para potenciar tu entrenamiento y ayudarte a alcanzar tus metas fitness. Equipamiento moderno y un ambiente motivador te esperan para que disfrutes de una experiencia única en nuestro gimnasio.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px]   overflow-x-auto overflow-y-hidden sm:ml-12 md:ml-24">
          <ul className="whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  //  </div>
  );
};

export default Instalaciones;
