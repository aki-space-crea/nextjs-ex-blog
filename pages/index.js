import Head from "next/head";
import untilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  console.log(allPostsData);
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={untilStyles.headingMd}>
        <p>[Hi! I'm Kuroda Aki]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${untilStyles.headingMd}${untilStyles.padding1px}`}>
        <h2 className={untilStyles.headingLg}>Blog</h2>
        <ul className={untilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={untilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={untilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
