import { DataSet, useDataSource } from 'modules/datasourse';

export type CommentsTypes = {
  username: string;
  text: string;
};

/// Comments data adapter
export function CommentsAdapter(data: DataSet<CommentsTypes>): CommentsTypes[] {
  return (data.comments.map(([username, text]) => ({
    username,
    text,
  })));
}

/// Comments data provider hook
export function useCommentsDataset() {
  return useDataSource<CommentsTypes>('/api/quote_get');
}
