import type { NextPage } from 'next';
import { MenuItem } from 'modules/session';
import Comment from 'components/Forms/Comment';

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="flex h-full items-center justify-center">
        <h1 className="text-3xl uppercase">Home page</h1>
      </div>
      <Comment className="my-2 w-full h-full "/>
    </div>
  );
};

export const mainMenu: MenuItem[] = [{ path: '/', label: 'Home' }];

export const getStaticProps = async () => {
  return {
    props: {
      mainMenu,
    },
  };
};

export default Home;
