import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export default Path;
