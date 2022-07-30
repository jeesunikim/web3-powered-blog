import utilStyles from "styles/utils.module.css";

import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

import { selectSetSharedTopics } from "store/slices/blogSettingSlice";
import { getSortedPostsData } from "lib/posts";

import { Layout, siteTitle } from "components/layout";
import { BlogWalletInfo } from "components/BlogWalletInfo";
import { BlogThumbnail } from "components/BlogThumbnail";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    image: string;
    tags: string[];
  }[];
}) {
  const sharedTopics = useSelector(selectSetSharedTopics);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="flex flex-col h-full">
            <h1
              className="m-auto font-serif font-bold"
              style={{ fontSize: "5.5rem" }}
            >
              Your Blog Title
            </h1>
            {Boolean(sharedTopics.length) && (
              <div className="flex m-auto flex-col transition ease-in-out text-center	">
                <p className="font-mono text-sm pb-1">
                  based on the NFTs we share, I think you might like the
                  following topics 🥰
                </p>
                <div>
                  {sharedTopics.map((topic, index) => (
                    <Link href="#" key={`${topic} + ${index}`}>
                      <a className="text-center	 font-serif font-semibold text-2xl pr-10 italic">
                        {topic}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <BlogWalletInfo />
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className="grid grid-cols-3 gap-4">
          {allPostsData.map(({ id, date, title, image, tags }) => (
            <BlogThumbnail
              href={`/posts/${id}`}
              blogDate={date}
              blogTitle={title}
              image={image}
              tags={tags}
              key={id}
            />
          ))}
        </div>
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
