import utilStyles from "styles/utils.module.css";

import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getAllPostIds, getPostData } from "lib/posts";

import Date from "components/date";
import { Layout } from "components/layout";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="prose lg:prose-xl">
        <h2 className="text-3xl font-bold text-orange-300">{postData.title}</h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
