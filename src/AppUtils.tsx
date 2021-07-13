import { GroupLocator } from '@azure/communication-calling';
import { v1 as generateGUID } from 'uuid';

// Get group id from the url's query params.
export const getGroupIdFromUrl = (): GroupLocator | undefined => {
  const urlParams = new URLSearchParams(window.location.search);
  const gid = urlParams.get('groupId');
  return gid ? { groupId: gid } : undefined;
};

export const createGroupId = (): GroupLocator => ({ groupId: generateGUID() });