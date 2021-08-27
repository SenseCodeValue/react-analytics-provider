import React from 'react';
import {useAnalyticsContext} from '../../contexts/useAnalyticsContext';
import {UnknownRecord} from '../../types/common';

export interface AnalyticsImpressionProps {
  children: React.ReactNode;
  name: string;
  // TODO: modify params type
  params: UnknownRecord;
}

export const AnalyticsImpression = ({children, name, params}: AnalyticsImpressionProps) => {
  const analytics = useAnalyticsContext();

  React.useEffect(() => {
    analytics.onImpression(name, params);
  }, [analytics, name, params]);

  return <>{children}</>;
};
