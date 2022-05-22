import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import OverlayButton from 'components/Button/OverlayButton';
import { mainMenu } from 'pages/index';

type Inputs = {
  Email: string;
  Username: string;
  Password: string;
};

// @ts-ignore
const SignUp: NextPage = () => {
  const router = useRouter();
  const target = useRef(null);
  const [show, setShow] = useState(false);
  const [typeOfMessage, setTypeOfMessage] = useState('');
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const data = new FormData();
    data.append('email', formData['Email']);
    data.append('password', formData['Password']);
    data.append('username', formData['Username']);
    fetch('/api/register', {
      method: 'POST',
      body: data,
    })
      .then((resp) => {
        if (resp.status === 200) {
          setShow(false);
          alert('A confirmation email has been sent to your email');
          document.location.reload();
        } else if (resp.status === 403) {
          setShow(true);
          setTypeOfMessage('email is taken');
        } else if (resp.status === 504) {
          setShow(true);
          setTypeOfMessage('email server not available');
        } else if (resp.status === 409) {
          setShow(true);
          setTypeOfMessage('username is taken');
        } else if (resp.status === 410) {
          setShow(true);
          setTypeOfMessage('unexpected error');
        }
      })
      .catch((err) => {
        document.location.reload();
        console.error(err);
      });
  };
  if (false) return router.replace('/');
  else {
    return (
      <div className="flex flex-row gap-2">
        <form onSubmit={handleSubmit(onSubmit)} className="basis-1/2 py-2 px-6">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={'email'}
              {...register('Email', { required: true })}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={'username'}
              {...register('Username', { required: true, maxLength: 15, min: 3 })}
            />
          </div>
          <div className="mb-6">
            <label>Password</label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder={'password'}
              {...register('Password', { required: true, min: 3 })}
            />
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
        <div className="basis-1/2 py-24 px-6">
          After registration, you will receive an email to your email. After clicking on the link in the email, your
          account will be confirmed and you will be able to log in. By clicking &quot;Create an account&quot;, you
          accept the user agreement and privacy policy
        </div>
      </div>
    );
  }
};

export const getStaticProps = async () => {
  return {
    props: {
      mainMenu,
    },
  };
};

export default SignUp;
