import useSWR from 'swr';

const fetcher = async (uri: string, params: Record<string, never>) => {
  const searchParams = new URLSearchParams(params);
  const res = await window.fetch(`${uri}?${searchParams}`);
  if (res.ok) {
    return res.json();
  } else throw new Error(res.statusText);
};

export type DataSet<T> = {
  data: never[][];
};

/// Data source interface
export interface DataSource<T> {
  dataSet: DataSet<T>;
  isLoading: boolean;
  isError: never;
}

/// Data adapter
export type DataAdapter<T> = (data: DataSet<T>) => T[];

/// Hook to get datasource
export function useDataSource<T>(uri: string, params: Record<string, string | number> = {}): DataSource<T> {
  const { data, error } = useSWR([uri, params as Record<string, never>], fetcher);
  return {
    dataSet: data,
    isLoading: !error && !data,
    isError: error as never,
  };
}