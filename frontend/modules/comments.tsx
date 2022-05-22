import { DataSet, useDataSource } from 'modules/datasourse';

export type CommentsTypes = {
  username: string;
  text: string;
};

/// Comments data adapter
export function CommentsAdapter(data: DataSet<CommentsTypes>): CommentsTypes[] {
  // @ts-ignore
  return (data.map(({username, text}) => ({
    username,
    text,
  })));
}

/// Profile info data adapter
export function ProfileInfoAdapter(data: DataSet<CommentsTypes>): CommentsTypes[] {
  console.log(data)
  // @ts-ignore
  return (data.map(({username, text}) => ({
    username,
    text,
  })));
}

/// Comments data provider hook
export function useCommentsDataset() {
  return useDataSource<CommentsTypes>('/api/quote_get');
}