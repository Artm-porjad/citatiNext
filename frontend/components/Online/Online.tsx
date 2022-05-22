import React, { FC } from 'react';

type OnlineType = {
  username: string;
};

const Online: FC<OnlineType> = ({ username }) => {
  return (
    <div className="flex items-center justify-center neutral filled odd:bg-opacity-25 py-1">
      <a href={'/profile/' + username} className="w-auto font-normal text-base hover:bg-gray-300">{username}</a>
    </div>
  );
};

export default Online;
