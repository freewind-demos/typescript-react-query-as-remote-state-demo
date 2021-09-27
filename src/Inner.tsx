import React, {FC} from 'react';
import {useRemoteMessage} from './remoteStates';

type Props = {}

export const Inner: FC<Props> = ({}) => {
  const remoteMessage = useRemoteMessage()
  return <div>{remoteMessage.data}</div>;
}
