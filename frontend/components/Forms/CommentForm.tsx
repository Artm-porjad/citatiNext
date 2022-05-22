import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface CommentFormProps {
  className?: string;
}

type Inputs = {
  Text: string;
};

const CommentForm: FC<CommentFormProps> = ({ className }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData, event) => {
    const data = new FormData();
    data.append('text', formData['Text']);
    fetch('/api/quote_post', {
      method: 'POST',
      body: data,
    }).finally(() => document.location.reload());
    // @ts-ignore
    event.preventDefault();
  };

  return (
    <div className="px-16">
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <div className="grid grid-flow-row auto-rows-max gap-4">
          <input
            type="text"
            {...register('Text', { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            className="neutral on_surface text-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="submit"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
