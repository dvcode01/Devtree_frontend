import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { getUserByHandle } from "../../api/DevtreeApi";

function HandleView() {
  const params = useParams();
  const handle = params.handle!;
  
  const { data, error, isLoading } = useQuery({
    queryFn: () => getUserByHandle(handle),
    queryKey: ['handle', handle]
  });

  console.log(data);
  console.log(error);
  console.log(isLoading);

  return (
    <div>HandleView</div>
  )
}

export default HandleView