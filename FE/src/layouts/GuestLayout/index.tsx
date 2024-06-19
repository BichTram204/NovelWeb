import Header from "./components/header";

type Props = {
  children: React.ReactNode;
};
const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
    </>
  );
};
export default GuestLayout;
