import { useEffect, useState } from 'react';
import { initializeIcons } from '@fluentui/react';
import { GroupCallLocator, GroupLocator } from '@azure/communication-calling';
import {
  getGroupIdFromUrl,
  createGroupId
} from './AppUtils';
import { CallScreen } from './CallScreen';
import { HomeScreen } from './HomeScreen';
import { CommunicationIdentityClient } from '@azure/communication-identity';
//import { CommunicationUserIdentifier } from '@azure/communication-common';
/*import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import { ChatClient } from '@azure/communication-chat';*/

initializeIcons();

type AppPages = 'home' | 'call';

const App = (): JSX.Element => {
  const [page, setPage] = useState<AppPages>('home');

  // User credentials to join the meeting
  const [token, setToken] = useState<string>('');
  //const [userId, setUserId] = useState<CommunicationUserIdentifier>();
  
  // Call details to join a call
  // These details are collected from the user on the home screen
  const [displayName, setDisplayName] = useState<string>('');
  const [callLocator, setCallLocator] = useState<GroupLocator>(createGroupId());
  //const [threadId, setThreadId] = useState<string>('');

  // Enter the connection string which is a prerequisite
  const connectionString = 'ENTER CONNECTION STRING';

  // Get Azure Communications Service token from the server
  useEffect(() => {
    (async () => {
      const identityClient = new CommunicationIdentityClient(connectionString);
      try {
        let identityTokenResponse = await identityClient.createUserAndToken(["voip"]);
        const { token } = identityTokenResponse;
        setToken(token);
        //setUserId(user);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  
  // Currently working on chat.

  /*useEffect(() => {
    (async () => {
      const identityClient = new CommunicationIdentityClient(connectionString);
      try {
        let identityTokenResponse = await identityClient.createUserAndToken(["voip","chat"]);
        const { token, user } = identityTokenResponse;
        setToken(token);
        const chatClient = new ChatClient('ENTER ENDPOINT', new AzureCommunicationTokenCredential(token));
        const threadId = (await chatClient.createChatThread({ topic: 'Chat' })).chatThread?.id ?? '';
        await chatClient!.getChatThreadClient(threadId).addParticipants({
          participants: [{ id: user, displayName: displayName }]
        });
        setThreadId(threadId);
      } catch (e) {
        console.error(e);
      }
    })();
  },[displayName]);*/
  
  
  switch (page) {
    case 'home': {
      const joiningExistingCall: boolean = !!getGroupIdFromUrl();
      return (
        <HomeScreen
          joiningExistingCall={joiningExistingCall}
          startCallHandler={(callDetails) => {
            setDisplayName(callDetails.displayName);
            const callLocator = getGroupIdFromUrl() || createGroupId();
            setCallLocator(callLocator);

            // Update the window URL to have a joinable link
            // We can share this link so that participants can join
            if (!joiningExistingCall) {
              const joinParam = '?groupId=' + (callLocator as GroupCallLocator).groupId;
              window.history.pushState({}, document.title, window.location.origin + joinParam);
            }
            setPage('call');
          }}
        />
      );
    }
    case 'call': {
      return (
        <CallScreen
          token={token}
          //userId={userId!}
          displayName={displayName}
          callLocator={callLocator}
          //threadId={threadId}
        />
      );
    }
    default:
      return <>Invalid page</>;
  }
};

export default App;