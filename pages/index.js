import Head from "next/head";
import Link from "next/link";

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
  </>
);

export default Index;
