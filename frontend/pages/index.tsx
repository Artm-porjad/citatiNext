import type { NextPage } from 'next';
import { MenuItem } from 'modules/session';
import CommentForm from 'components/Forms/CommentForm';
import { CommentsAdapter, useCommentsDataset } from 'modules/comments';
import Comment from 'components/Comments/Comment';
import { OnlineAdapter, useOnlineDataset } from 'modules/online';
import Online from 'components/Online/Online';
// @ts-ignore
import Cookies from 'js-cookie';

const Home: NextPage = () => {
  const dataCommentsSource = useCommentsDataset();
  const dataOnlineSource = useOnlineDataset();
  return (
    <div>
      <div className="flex h-full items-center justify-center">
        <h1 className="text-3xl uppercase">Home page</h1>
      </div>
      <div className="flex flex-row gap-2">
        <div className="basis-1/4">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl uppercase">Online list</h1>
          </div>
          {!dataOnlineSource.isLoading &&
            !dataOnlineSource.isError &&
            OnlineAdapter(dataOnlineSource.dataSet).map((online, index) => (
              <Online key={index} username={online.username} />
            ))}
        </div>
        <div className="basis-3/4">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl uppercase">Comments</h1>
          </div>
          <div className="px-64">
            {!dataCommentsSource.isLoading &&
              !dataCommentsSource.isError &&
              CommentsAdapter(dataCommentsSource.dataSet).map((comment, index) => (
                <Comment key={index} username={comment.username} text={comment.text} />
              ))}
          </div>
        </div>
      </div>
      {Cookies.get('auth') ? (
        <CommentForm className="" />
      ) : (
        <div>Чтобы оставить комментарий, зайдите в аккаунт или зарегистрируйтесь</div>
      )}
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
