import React from "react";
import Link from "next/link";
import Image from "next/image";

import Date from "components/date";

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
}) => (
  <Link href={href}>
    <a className="mr-24 no-underline flex flex-col">
      <div className="bg-gray-900 flex-">
        <div className="relative">
          {image ? (
            <Image
              className="align-self-center"
              src={image}
              width={566}
              height={IMAGE_HEIGHT_DESKTOP}
              alt="Ze'ev"
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
        <div className="pb-3 px-4">
          <div>
            [
            {tags?.map((tag, index) => (
              <span className="font-mono text-sm leading-4" key={index}>
                {tag}
                {tags.length - 1 !== index && ", "}
              </span>
            ))}
            ]
          </div>
          <Date dateString={blogDate} />

          <h3 className="font-serif font-normal text-lg leading-6">
            {blogTitle}
          </h3>
        </div>
      </div>
    </a>
  </Link>
);
