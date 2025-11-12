import { ReactNode, useState } from 'react';
import SideMenu from '@/components/side-menu/side-menu';

interface PageBodySectionProps {
  children?: ReactNode;
}

const PageBodySection = ({ children }: PageBodySectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="flex">
        <SideMenu />
        <main className="min-h-screen flex-1 bg-[#F5F8FB] pt-8 pb-14 pl-8 pr-20">
          {children}
        </main>
      </div>
    </section>
  );
};

export default PageBodySection;
