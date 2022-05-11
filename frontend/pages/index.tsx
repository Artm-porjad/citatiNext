import type { NextPage } from 'next';
import { MenuItem } from 'modules/session';
import CommentForm from 'components/Forms/CommentForm';
import { CommentsAdapter, useCommentsDataset } from 'modules/comments';
import { DataAdapter, DataSource } from 'modules/datasourse';
import Comment from 'components/Comments/Comment';
import { OnlineAdapter } from 'modules/online';
import Online from "components/Online/Online"

const Home: NextPage = () => {
  const dataSource = useCommentsDataset();
  return (
    <div className="grid grid-cols-1">
      <div className="flex h-full items-center justify-center">
        <h1 className="text-3xl uppercase">Home page</h1>
      </div>
      <div>
        {!dataSource.isLoading &&
          !dataSource.isError &&
        CommentsAdapter(dataSource.dataSet).map((comment, index) =>
          <col  key={index}>
          <Comment username={comment.username} text={comment.text} />
        </col>)}
        {!dataSource.isLoading &&
        !dataSource.isError &&
        OnlineAdapter(dataSource.dataSet).map((online, index) =>
          <col  key={index}>
            <Online username={online.username} />
          </col>)}
      </div>
      <CommentForm className="my-2 w-full h-full " />
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
