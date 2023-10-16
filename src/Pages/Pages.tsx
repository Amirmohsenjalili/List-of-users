import { Route, Routes } from "react-router-dom";
import { SignIn } from "./Singin";
import { Home } from "./Home";
import { AddUser } from "./AddUser";
import { NotFound } from "./NotFound";
import { Layout } from "../Layout";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/&" element={<Layout />}>
        <Route path="ListUser" element={<Home />} />
        <Route path="AddUser" element={<AddUser />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
