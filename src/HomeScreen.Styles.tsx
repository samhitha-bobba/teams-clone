import { IStackTokens, mergeStyles } from '@fluentui/react';

export const containerTokens: IStackTokens = {
  childrenGap: '6rem'
};
export const headerStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '1.5rem', // 20px
  lineHeight: '1.75rem', // 28px
  width: '20rem',
  marginBottom: '1.5rem'
});
export const bodyItemStyle = mergeStyles({
  marginTop: '1.25rem'
});
export const buttonStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '0.875rem', // 14px
  height: '2.75rem',
  width: '100%',
  marginTop: '2.125rem',
  maxWidth: '18.75rem',
  minWidth: '12.5rem'
});
export const videoCameraIconStyle = mergeStyles({
  marginRight: '0.375rem',
  fontSize: '1.375rem'
});
export const mainContainerStyle = mergeStyles({
  maxWidth: '80rem',
  width: '100%',
  height: '100%',
  
});