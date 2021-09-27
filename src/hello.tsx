import React from 'react';
import {useRemoteMessage} from './remoteStates';
import {Inner} from './Inner';

export default function Hello() {
  const remoteMessage = useRemoteMessage()
  const {isLoading, data, error} = remoteMessage;
  return <div>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error: {error?.message}</div>}
    {data !== undefined && <div>Hello, {data}</div>}
    <button onClick={() => remoteMessage.refetch()}>Reload</button>
    <hr/>
    <Inner/>
  </div>;
};
