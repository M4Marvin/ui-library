import { Loader2 } from 'lucide-react';
import React from 'react';

const Loading = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  );
};

export default Loading;