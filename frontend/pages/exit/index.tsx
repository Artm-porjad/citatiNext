import useSWR from 'swr';
import { NextPage } from 'next';

export const fetcher = async (uri: string) => {
  const res = await window.fetch(`${uri}`);
  if (res.ok) {
    console.log('exit')
  } else throw new Error(res.statusText);
};

const Exit: NextPage = () => {
  const { data: todos } = useSWR('/api/exit', fetcher);

  return null
}

export default Exit;
