import { DataSet, useDataSource } from 'modules/datasourse';

export type OnlineTypes = {
  username: string;
};

/// Comments data adapter
export function OnlineAdapter(data: DataSet<OnlineTypes>): OnlineTypes[] {
  // @ts-ignore
  return data.map(({username}) => ({
    username,
  }));
}

/// Comments data provider hook
export function useOnlineDataset() {
  return useDataSource<OnlineTypes>('/api/online_get');
}
