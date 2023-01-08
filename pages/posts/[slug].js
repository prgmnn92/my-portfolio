import React from "react";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import markdownToHtml from "../../lib/markdownToHtml";
import Container from "../../components/Container";
import cn from "classnames";

import Image from "next/image";

const Posts = (props) => {
  const { title, date, content, image, id } = props.post;
  console.log(props.post);
  console.log(image);
  return (
    <div>
      <Container>
        <Image
          src={image}
          alt={`Cover Image for ${title}`}
          className={cn("shadow-sm w-full max-h-[430px] object-cover", {
            "hover:shadow-lg transition-shadow duration-200": id,
          })}
          width={1300}
          height={430}
        />
        <h1 className="py-8 text-3xl">{title}</h1>
        <div
          // className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "image",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Posts;
