import MainHeader from "../components/post/MainHeader";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
