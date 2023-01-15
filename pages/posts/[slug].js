import React from "react";
import { getAllDocs, getDocBySlug } from "../../lib/posts";

import Container from "../../components/Container";
import cn from "classnames";
import markdownToHtml from "../../lib/markdownToHtml";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Posts = (props) => {
  const { meta, content, slug } = props;
  const { title, date, description, image } = meta;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/images/favicon.png" rel="shortcut icon" />
        <meta content={description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:site" content="@PargmannPhillip" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel="stylesheet"
        />
      </Head>
      <Container>
        <div className="max-w-screen-sm mx-auto">
          <Image
            src={image}
            alt={`Cover Image for ${title}`}
            className={cn("shadow-sm w-full max-h-[430px] object-cover", {
              "hover:shadow-lg transition-shadow duration-200": slug,
            })}
            width={1300}
            height={430}
          />
          {/* <ReactMarkdown className="prose">{content}</ReactMarkdown> */}
          <article
            className="m-auto prose lg:prose-xl sm:my-16"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Link href={"/"} className="underline">
            Go Back
          </Link>
        </div>
      </Container>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || "");

  return {
    props: {
      ...doc,
      content,
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}
export default Posts;

// TODO: setup SEO, Metatitle and so on
// TODO: fix slug issue
