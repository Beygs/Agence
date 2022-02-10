import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getWork } from "../../data";

const StudyCase = () => {
  const params = useParams();
  let data;
  if (params.studyCase) data = getWork(params.studyCase);

  return (
    <motion.div
      className="StudyCase"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "linear",
      }}
      key={data?.name}
    >
      <h3>{data?.title}</h3>
      <p>
        {data?.content}
      </p>
    </motion.div>
  );
};

export default StudyCase;
