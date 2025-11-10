import { ReactNode } from 'react';

interface PageBodySectionProps {
  children?: ReactNode;
}

const PageBodySection = ({ children }: PageBodySectionProps) => {
  return <section>{children}</section>;
};

export default PageBodySection;
