import { useParams } from "react-router-dom";
import { getWork } from "../../data";

const StudyCase = () => {
  const params = useParams();
  let data;
  if (params.studyCase) data = getWork(params.studyCase);

  return (
    <div className="StudyCase">
      <h3>{data?.title}</h3>
      <p>
        {data?.content}
      </p>
    </div>
  );
};

export default StudyCase;
