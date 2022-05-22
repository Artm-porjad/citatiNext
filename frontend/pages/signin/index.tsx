import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import OverlayButton from 'components/Button/OverlayButton';
import { mainMenu } from 'pages/index';
// @ts-ignore
import Cookies from 'js-cookie';

type Inputs = {
  Email: string;
  Password: string;
  Check: string;
};

// @ts-ignore
const SignIn: NextPage = () => {
  const router = useRouter();
  const target = useRef(null);
  const [typeOfMessage, setTypeOfMessage] = useState('');
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();
  if (Cookies.get("auth")) {
    router.replace('/');
  }
  const onSubmit: SubmitHandler<Inputs> = (formData, event) => {
    const data = new FormData();
    data.append('password', formData['Password']);
    data.append('email', formData['Email']);
    data.append('remember_me', formData['Check']);
    fetch('/api/login', {
      method: 'POST',
      body: data,
    })
      .then((resp) => {
        if (resp.status === 200) {
          setShow(false);
          document.location.reload();
        } else if (resp.status === 403) {
          setShow(true);
          setTypeOfMessage('login or password is not correct');
        } else if (resp.status === 410) {
          setShow(true);
          setTypeOfMessage('unexpected error');
        }
      })
      .catch((err) => {
        document.location.reload();
        console.error(err);
      });
    // @ts-ignore
    event.preventDefault();
  };

  return (
    <div className="flex flex-row gap-2">
      <form onSubmit={handleSubmit(onSubmit)} className="basis-1/2 py-2 px-6">
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={'email'}
            {...register('Email', { required: true })}
          />
        </div>
        <div className="mb-6">
          <label>Password</label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={'password'}
            {...register('Password', { required: true, min: 3 })}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              {...register('Check', {})}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800"
            />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <button
          className="neutral on_surface text-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          type="submit"
          ref={target}
        >
          Submit
        </button>
        <OverlayButton target={target} show={show} type={typeOfMessage} />
      </form>
      <div className="basis-1/2 py-32 px-6">
        By clicking &quot;Submit&quot;, you accept the user agreement and privacy policy.
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      mainMenu,
    },
  };
};

export default SignIn;
