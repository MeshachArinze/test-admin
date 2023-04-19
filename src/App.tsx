// in src/App.tsx
import React from "react";
import { Dashboard } from "./Dashboard";
import { fetchUtils, Admin, Resource } from "react-admin";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { UserList } from "./components/Users";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./Posts";
import { authProvider } from "./authProvider";


const httpClient = (url: any, options = {}) => {
  options.user = {
    authenticated: true,
    token: "SRTRDFVESGNJYTUKTYTHRG",
  };
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com", httpClient);
console.log(jsonServerProvider("https://jsonplaceholder.typicode.com"));


const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}

  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      icon={UserIcon}
      recordRepresentation="name"
    />
  </Admin>
);
export default App;
