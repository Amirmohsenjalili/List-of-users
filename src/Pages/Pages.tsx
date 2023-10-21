import { Route, Routes } from "react-router-dom";
import { SignIn } from "./Singin";
import { Home } from "./Home";
import { AddUser } from "./AddUser";
import { NotFound } from "./NotFound";
import { Layout } from "../Layout";
import { UsersDetail } from "./UsersDetail";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/&" element={<Layout />}>
        <Route path="ListUser" element={<Home />} />
        <Route path="AddUser" element={<AddUser />} />
        <Route path="UsersDetail/:id" element={<UsersDetail />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
