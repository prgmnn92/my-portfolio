import Link from "next/link";
import React from "react";

const BlogItem = (props) => {
  return (
    <Link
      className="flex justify-between p-4 mb-4 bg-white drop-shadow rounded-2xl"
      href={props.href}
      as={props.as}
    >
      <div>
        <span className="mr-2 font-bold md:mr-4">{props.id}</span>
        <span>{props.title}</span>
      </div>
      <span className="pl-2 font-semibold">{props.category}</span>
    </Link>
  );
};

const BlogList = ({ blogData }) => {
  return (
    <div>
      <h2 className="pb-4 text-xl font-medium md:text-3xl text-brick-red md:pb-8">
        blog and latest thoughts ✏️
      </h2>
      {blogData.map((item, id) => (
        <BlogItem
          title={item.title}
          category={item.category}
          id={("0" + (id + 1)).slice(-2)}
          key={item.id}
          content={item.content}
          as={`/posts/${item.id}`} // TODO: change to slug
          href="/posts/[slug]"
        />
      ))}
    </div>
  );
};

export default BlogList;
