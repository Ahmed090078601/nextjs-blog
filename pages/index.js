import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Ahmed Abbas, and I am a student of Sir Zia Khan.</p>
        <p>
        I am a NextJS developer. My batch number is 40, and my hometown is Islamabad.
          <br/>
        </p>
        <h1><a href="posts/pre-rendering">Posts</a></h1>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (

<li className={utilStyles.listItem} key={id}>
<Link href={`/posts/${id}`}>{title}</Link>
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