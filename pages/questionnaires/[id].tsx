import { GetStaticProps, GetStaticPaths } from 'next';

import { Question } from '../../interfaces';
import { questionnaire } from '../../utils/questionnaire';
import Questionnaire from '../../components/layout/Questionnaire';
import Layout from '../../components/Layout';

type Props = {
  item: Question;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <p>
        <span style={{ color: 'red' }}>Error:</span> {errors}
      </p>
    );
  }

  return (
    <Layout>
      <Questionnaire item={item} />
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = questionnaire.map((question: any) => ({
    params: { id: question.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = questionnaire.find((data: any) => data.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
