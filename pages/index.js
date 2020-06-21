import Head from "next/head";
import Link from "next/link";

const cityList = [
  {
    country: "USA",
    city: "NewYork",
  },
  {
    country: "Spain",
    city: "Madrid",
  },
  {
    country: "England",
    city: "London",
  },
];

const Index = () => (
  <>
    <Head>
      <title>Next Playground</title>
    </Head>
    <div>
      <Link href="/about">
        <a>About App</a>
      </Link>
    </div>
    <hr />
    <ul>
      {cityList.map((item, index) => (
        <li key={index}>
          <Link as={`/${item.country}/${item.city}`} href="/[country]/[city]">
            <a>
              {item.country}-{item.city}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Index;
