import Head from 'next/head';
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'WebDEv News',
  description: 'GEt the latest news in websde',
};

export default Meta;
