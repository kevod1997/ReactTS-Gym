import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Equipamiento de última generación",
    description:
      "Contamos con equipos de vanguardia que te brindarán la mejor experiencia de entrenamiento. Desde máquinas de alta calidad hasta herramientas especializadas para el entrenamiento de musculación. ¡Descubre un nuevo nivel de excelencia!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Obtén asesoramiento personalizado",
    description:
      "Nuestro equipo de expertos está comprometido en brindarte la mejor asistencia necesaria para alcanzar tus metas. Te ofrecemos asesoramiento personalizado y rutinas diseñadas específicamente para tu entrenamiento de musculación.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Entrenadores especializados",
    description:
      "Contamos con entrenadores profesionales y altamente capacitados en el entrenamiento de musculación. Ellos te guiarán en cada paso del camino, asegurándose de que realices los ejercicios de manera correcta y segura. ¡Entrena con los mejores!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>ENTRENA CON LOS MEJORES PARA LOGRAR TUS METAS.</HText>
          <p className="my-5 text-sm">
            Ofrecemos equipos de musculación de clase mundial, profesores y asistencia para ayudarte a alcanzar tus objetivos de musculación con facilidad. Brindamos atención personalizada a cada uno de nuestros miembros.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        </motion.div>
    </section>
  );
};

export default Benefits;
