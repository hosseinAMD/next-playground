import { useRouter } from "next/router";

const CountryItem = () => {
  const router = useRouter();
  const { country } = router.query;

  return (
    <>
      <h2>We are in {country} !!</h2>
    </>
  );
};

export default CountryItem;
