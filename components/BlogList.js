import React from "react";

const BlogItem = (props) => {
  return (
    <a
      className="drop-shadow bg-white rounded-2xl p-4 flex justify-between mb-4"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <span className="mr-2 md:mr-4 font-bold">{props.id}</span>
        <span>{props.title}</span>
      </div>
      <span className="pl-2 font-semibold">{props.category}</span>
    </a>
  );
};

const BlogList = () => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl text-brick-red font-medium pb-4 md:pb-8">
        blog and latest thoughts ✏️
      </h2>
      <BlogItem
        title="Starting into a new life as a digital nomad"
        category="life"
        id="01"
        href="https://medium.com/@pargmann92/starting-into-a-new-life-as-a-digital-nomad-d57b82fa4922"
      />
    </div>
  );
};

export default BlogList;
