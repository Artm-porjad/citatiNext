import React, { FC } from 'react';

type CommentType = {
  username: string;
  text: string;
};

const Comment: FC<CommentType> = ({ username, text }) => {
  return (
    <div>
      <a href={'/profile/' + username}>{username}</a>
      <div className="Comment-text">{text}</div>
    </div>
  );
};

export default Comment;
