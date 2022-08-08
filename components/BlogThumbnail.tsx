import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

import { selectSetSharedTopics } from "store/slices/blogSettingSlice";

import Date from "components/date";
import { DramaticUnderline } from "components/DramaticUnderline";

const IMAGE_HEIGHT_DESKTOP = 658;
const NO_IMAGE_HEIGHT_DESKTOP = 356;

type BlogThumbnailProps = {
  href: string;
  blogDate: string;
  blogTitle: string;
  image: string;
  tags: Array<string>;
};

export const BlogThumbnail: React.FC<BlogThumbnailProps> = ({
  href,
  blogDate,
  blogTitle,
  image,
  tags,
}) => {
  const sharedTopics = useSelector(selectSetSharedTopics);
  const getBlogMatchingTopics =
    sharedTopics &&
    sharedTopics.filter((topic: string) => tags?.includes(topic));
  const hasSharedTopics = Boolean(getBlogMatchingTopics.length);

  return (
    <Link href={href}>
      <a className="no-underline flex flex-col">
        <div>
          <div className="relative overflow-hidden">
            {image ? (
              <Image
                className="align-self-center rounded-2xl"
                src={image}
                width={566}
                height={IMAGE_HEIGHT_DESKTOP}
                alt={`${blogTitle} blog image`}
              />
            ) : (
              <div
                className="flex justify-center items-center"
                style={{ height: NO_IMAGE_HEIGHT_DESKTOP }}
              >
                your post image
              </div>
            )}
          </div>
          <div className="px-2 text-slate-800">
            <div className="text-sm">
              [
              {tags?.map((tag, index) => (
                <span className="font-mono text-xs leading-4" key={index}>
                  {tag}
                  {tags.length - 1 !== index && ", "}
                </span>
              ))}
              ]
            </div>
            <Date dateString={blogDate} />

            {hasSharedTopics ? (
              <DramaticUnderline classNames="inline-block">
                <h3 className="font-serif font-semi text-lg leading-6 text-slate-800">
                  {blogTitle}
                </h3>
              </DramaticUnderline>
            ) : (
              <h3 className="font-serif font-semi text-lg leading-6 text-slate-800">
                {blogTitle}
              </h3>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};
