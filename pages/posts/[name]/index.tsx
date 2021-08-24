import Head from "next/head";
import Layout, { siteTitle } from "../../../components/layout";
import utilStyles from "../../../styles/utils.module.css";
import { getSortedPostsData, getAllMembers } from "../../../lib/members";
import Link from "next/link";
import Date from "../../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    name: string;
    title: string;
    id: string;
  }[];
}) {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{name}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, name, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${name}/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllMembers();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsData = getSortedPostsData(params.name as string);
  return {
    props: {
      allPostsData,
    },
  };
};
