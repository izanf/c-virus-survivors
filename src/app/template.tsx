import Navbar from './components/Navbar';

const Template = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => (
  <>
    <header>
      <Navbar />
    </header>
    {children}
  </>
);

export default Template;
