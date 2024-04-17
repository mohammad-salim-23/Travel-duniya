import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// when you click view details button click you come here
const Destinations = () => {
  const { id: paramId } = useParams();
  const loader = useLoaderData();
  console.log(loader);
  const [details, setDetails] = useState(null);
  console.log(paramId);

  useEffect(() => {
    fetch("../../public/tour.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const foundId = data?.find((detail) => detail?.id == parseInt(paramId));
        console.log(foundId);

        setDetails(foundId);
      });
  }, [paramId]);
  console.log(details);
  if (!details) {
    <h2>Loading.....</h2>;
    return;
  }

  // const { image, place_name, location, description } = details;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={details?.image}
            className="max-w-sm rounded-lg shadow-2xl"
            alt={details?.place_name}
          />
          <div>
            <h1 className="text-5xl font-bold text-purple-400">
              {details?.place_name}
            </h1>
            <h3 className="text-2xl font-semibold">
              Location: {details?.location}
            </h3>
            <p className="py-6">{details?.description}</p>
            <button className="btn bg-purple-500">Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
