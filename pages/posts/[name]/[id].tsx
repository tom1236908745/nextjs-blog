import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/utils'
import Head from 'next/head'
import Date from '../../../components/date'
import utilStyles from '../../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from "next/router";

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Layout id name={name}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params)
  return {
    props: {
      postData
    }
  }
}
