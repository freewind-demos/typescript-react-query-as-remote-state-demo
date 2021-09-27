import {useQuery} from 'react-query';
import fetchRemoteMessage from './fetchRemoteMessage';

export const useRemoteMessage = () => {
  return useQuery('fetchRemoteMessage', () => fetchRemoteMessage('RemoteHello1'))
}
