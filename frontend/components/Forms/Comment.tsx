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
    <div className="flex h-full items-center justify-center w-1/2">
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <div className="grid grid-flow-row auto-rows-max">
          <p>
            <b>Комментарий</b>
          </p>
          <input type="text" {...register('Text', { required: true })} className="border-2 border-slate-400" />
          <button type="submit" className="text-2xl border-2 border-slate-400 border-double">
            Закоментить
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
