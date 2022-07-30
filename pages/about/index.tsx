import Head from "next/head";

import { Layout } from "components/layout";

const About: React.FC = () => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>
    <h2 className="font-mono font-bold text-3xl text-black pb-2">About Me</h2>
    <section>
      <p>Tell us about you :)</p>
    </section>
  </Layout>
);

export default About;
