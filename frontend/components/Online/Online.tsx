import React, { FC } from 'react';

type OnlineType = {
  username: string;
};

const Online: FC<OnlineType> = ({ username }) => {
  return (
    <div>
      <div className="UserInfo-name">{username}</div>
    </div>
  );
};

export default Online;
