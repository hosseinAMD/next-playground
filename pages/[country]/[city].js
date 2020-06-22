import { useRouter } from "next/router";

const CityItem = () => {
  const router = useRouter();
  const { country, city } = router.query;

  return (
    <>
      <h2>
        {city} is placed in {country}
      </h2>
    </>
  );
};

export default CityItem;
