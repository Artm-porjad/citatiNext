import useSWR from 'swr';
import { NextPage } from 'next';
// @ts-ignore
import Cookies from 'js-cookie';
import {useRouter} from "next/router";


export const fetcher = async (uri: string) => {
  const res = await window.fetch(`${uri}`);
  if (res.ok) {
    console.log('exit')
  } else throw new Error(res.statusText);
};

const Exit: NextPage = () => {
  const router = useRouter();
  const { data: todos } = useSWR('/api/exit', fetcher);
  if (Cookies.get("auth")) {
    router.replace('/');
  }

  return null
}

export default Exit;
