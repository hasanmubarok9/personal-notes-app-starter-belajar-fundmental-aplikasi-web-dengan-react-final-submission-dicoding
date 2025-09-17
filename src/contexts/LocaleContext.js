import React from 'react';

const LocaleContext = React.createContext();

export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Cunsomer;

export default LocaleContext;
