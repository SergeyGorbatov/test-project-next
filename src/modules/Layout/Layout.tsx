import { Footer, Header } from '@/components';
import { ILayoutProps } from '@/modules/Layout/types';

export const Layout = ({ children }: ILayoutProps) => (
  <div className="flex flex-col h-full min-h-screen justify-between bg-gray-500">
    <Header />

    <main className="flex flex-col grow h-full">
      {children}
    </main>

    <Footer />
  </div>
);
