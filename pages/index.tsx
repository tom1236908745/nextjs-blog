import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedMembers } from "../lib/utils";
import Link from "next/link";
import { GetStaticProps } from "next";


export default function Post({
  allMembersData,
}: {
  allMembersData: {
    name: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allMembersData.map(({ name }) => (
            <li className={utilStyles.listItem} key={name}>
              <Link href="/posts/[name]" as={`/posts/${name}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allMembersData = getSortedMembers();
  return {
    props: {
      allMembersData,
    },
  };
};
