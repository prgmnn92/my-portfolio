import Head from "next/head";
import Banner from "../components/Banner";
import BlogList from "../components/BlogList";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import LatestNews from "../components/LatestNews";
import { getSortedPostsData } from "../lib/posts";

import styles from "../styles/Home.module.css";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Phillip Pargmann | Home</title>
        <meta
          name="description"
          content="Phillip Pargmann Frontend Developer Portfolio Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Container>
        <Banner />
        <section className="py-8 md:pt-4 md:pb-16">
          <FeaturedProjects />
        </section>
        <section className="py-8 md:py-16">
          <LatestNews />
        </section>
        {/* <section className="py-8 md:py-16">
          <BlogList blogData={allPostsData} />
        </section> */}
        <section id="contact" className="py-8 md:py-16">
          <ContactForm />
        </section>
        <Footer />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
