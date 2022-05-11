import { DataSet, useDataSource } from 'modules/datasourse';

export type OnlineTypes = {
  username: string;
};

/// Comments data adapter
export function OnlineAdapter(data: DataSet<OnlineTypes>): OnlineTypes[] {
  return data.comments.map(([username]) => ({
    username,
  }));
}

/// Comments data provider hook
export function useCommentsDataset() {
  return useDataSource<OnlineTypes>('/api/online_get');
}
