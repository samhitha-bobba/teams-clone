import { useState } from 'react';
import { Stack, PrimaryButton, Image } from '@fluentui/react';
import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';
import {
  containerTokens,
  headerStyle,
  bodyItemStyle,
  buttonStyle,
  mainContainerStyle,
  videoCameraIconStyle
} from './HomeScreen.Styles';
import { localStorageAvailable, getDisplayNameFromLocalStorage, saveDisplayNameToLocalStorage } from './LocalStorage';
import { DisplayNameField } from './DisplayNameField';

export interface HomeScreenProps {
  startCallHandler(callDetails: { displayName: string;}): void;
  joiningExistingCall: boolean;
}

export const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const headerTitle = 'Welcome to Microsoft Teams clone';
  const buttonText = 'Join call';

  // Get display name from local storage if available
  const defaultDisplayName = localStorageAvailable ? getDisplayNameFromLocalStorage() : null;
  const [displayName, setDisplayName] = useState<string | undefined>(defaultDisplayName ?? undefined);
  const buttonEnabled = displayName;

  return (
    <Stack className={mainContainerStyle} horizontalAlign="center" verticalAlign="center" tokens={containerTokens}>
      <Image alt="Welcome to the Microsoft Teams Clone"/>
      <div>
        <div className={headerStyle}>{headerTitle}</div>
        <div className={bodyItemStyle}>
          <DisplayNameField
            defaultName={displayName}
            setName={setDisplayName}
          />
        </div>
        <PrimaryButton
          disabled={!buttonEnabled}
          className={buttonStyle}
          onClick={() => {
            if (displayName) {
              saveDisplayNameToLocalStorage(displayName);
              props.startCallHandler({ displayName });
            }
          }}
        >
          <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
          {buttonText}
        </PrimaryButton>
      </div>
    </Stack>
  );
};