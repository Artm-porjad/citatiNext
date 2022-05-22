import React, { FC } from 'react';
import Link from "next/link"

type CommentType = {
  username: string;
  text: string;
  type?: string
};

const Comment: FC<CommentType> = ({ username, text ,type='link'}) => {
  if (type === 'link'){
    return (
      <div className="neutral filled odd:bg-opacity-25 py-1">
        <div className={"w-auto font-normal text-base hover:bg-gray-300"}>{username}</div>
        <div className=" w-auto font-normal text-sm ">{text}</div>
      </div>
    );
  } else{
    return (
      <div className="neutral filled odd:bg-opacity-25 py-1">
        <div className={"w-auto font-normal text-base hover:bg-gray-300"}>{username}</div>
        <div className=" w-auto font-normal text-sm ">{text}</div>
      </div>
    );
  }

};

export default Comment;
