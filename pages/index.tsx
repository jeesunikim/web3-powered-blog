import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

import { selectSetSharedTopics } from "store/slices/blogSettingSlice";
import { getSortedPostsData } from "lib/posts";

import { siteTitle } from "components/layout";
import { BlogWalletInfo } from "components/BlogWalletInfo";
import { BlogThumbnail } from "components/BlogThumbnail";
import { DramaticUnderline } from "components/DramaticUnderline";

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
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="m-5 grid grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-3 md:gap-x-4 lg:px-8 lg:py-4">
        <div className="col-span-2">
          <BlogWalletInfo />
        </div>
        <div className="flex flex-col h-full">
          <div>
            <h1 className="m-auto font-serif font-bold text-xl inline">
              your blog title
            </h1>
          </div>
          <div>
            <p className="font-medium font-mono text-xs inline">
              you can write whatever you want here — you can also delete
            </p>
            <p className="font-medium font-mono text-xs leading-7 pt-2">
              Please let me know if you need any help! README can be found{" "}
              <Link href="https://github.com/jeesunikim/web3-powered-blog">
                <a target="_blank">here</a>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto py-9 max-w-sm md:m-5 md:max-w-none md:pt-0 md:pb-14 lg:px-8">
        <div className="flex pb-8 md:h-24">
          {Boolean(sharedTopics.length) && (
            <div className="flex m-auto flex-col transition ease-in-out text-center">
              <p className="font-mono text-sm pb-1">
                based on the NFTs we share, I think you might like the following
                topics 🥰
              </p>
              <div>
                {sharedTopics.map((topic, index) => (
                  <DramaticUnderline
                    classNames="mr-10 inline"
                    key={`${topic} + ${index}`}
                  >
                    <Link href="#" key={`${topic} + ${index}`}>
                      <a className="text-center font-serif font-semibold text-2xl italic no-underline">
                        {topic}
                      </a>
                    </Link>
                  </DramaticUnderline>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-y-9 justify-items-center grid-cols-1 md:gap-6 md:grid-cols-3 md:gap-y-12">
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
    </>
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
