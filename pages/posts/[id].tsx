import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { getAllPostIds, getPostData } from "lib/posts";

import Date from "components/date";
import { H2, H3, H4, Paragraph, Ul } from "components/Styleguide/Text";

const components = {
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  ul: Ul,
};

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    description: string;
    content: string;
    date: string;
    tags: Array<string>;
    mdxSource: MDXRemoteSerializeResult;
  };
}) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <meta name="description" content={postData.description} />
      <article>
        <h1 className="text-3xl font-serif font-bold md:text-4xl md:mx-5">
          {postData.title}
        </h1>
        <div className="pb-5 md:mx-5">
          <div className="text-black inline-block pr-8">
            <Date dateString={postData.date} />
          </div>
          <div className="text-m pt-2 font-semibold inline-block">
            [
            {postData.tags?.map((tag, index) => (
              <span className="font-mono text-sm leading-4" key={index}>
                {tag}
                {postData.tags.length - 1 !== index && ", "}
              </span>
            ))}
            ]
          </div>
        </div>

        <MDXRemote
          {...postData.mdxSource}
          components={{
            ...components,
            Image,
            Link,
          }}
        />
      </article>
    </>
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
      mdxSource: postData.mdxSource,
    },
  };
};
