import { useEffect, useState } from 'react';
import { GroupCallLocator } from '@azure/communication-calling';
//import { CommunicationUserIdentifier } from '@azure/communication-common';
import { CallAdapter, 
  CallComposite, 
  createAzureCommunicationCallAdapter, 
  /*ChatAdapter,
  ChatComposite,
  createAzureCommunicationChatAdapter*/ 
} from '@azure/communication-react';

export interface CallScreenProps {
  token: string;
  callLocator: GroupCallLocator;
  //threadId: string;
  displayName: string;
  //userId: CommunicationUserIdentifier;
}

export const CallScreen = (props: CallScreenProps): JSX.Element => {
  const { /*userId,*/ token, callLocator, /*threadId,*/ displayName } = props;
  //const endpointUrl = 'ENTER END POINT URL HERE';
  const [callAdapter, setCallAdapter] = useState<CallAdapter>();
  //const [chatAdapter, setChatAdapter] = useState<ChatAdapter>();
  useEffect(() => {
    const createAdapter = async (): Promise<void> => {
      setCallAdapter(await createAzureCommunicationCallAdapter(token, callLocator, displayName));
      //setChatAdapter(await createAzureCommunicationChatAdapter(token, endpointUrl, threadId, displayName));
    };
    createAdapter();
  }, [/*userId,*/ token, callLocator, displayName/*, threadId*/]);
  return (
    <>
      {callAdapter && <CallComposite adapter={callAdapter}/>}
      {/*chatAdapter && <ChatComposite adapter={chatAdapter} />*/}
    </>
    
  );
};