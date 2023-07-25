import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-4 py-12 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-gray-20 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold p-2">{title}</h4>
      <p className="mt-3">{description}</p>

    </motion.div>
  );
};

export default Benefit;
