import utilStyles from "styles/utils.module.css";

import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData } from "lib/posts";

import Date from "components/date";
import { Layout, siteTitle } from "components/layout";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout isHome>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p style={{ textAlign: "center" }}>
          <a
            href="https://buildspace.so/nights-weekends"
            target="_blank"
            rel="noreferrer"
          >
            Nights and Weekends (N & W
          </a>
          ) wkly ✨ updates ✨
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
