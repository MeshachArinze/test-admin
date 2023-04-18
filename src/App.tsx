// in src/App.tsx
import React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import { PostList, PostEdit } from "./Posts";
import { UserList } from "./components/Users";
import jsonServerProvider from "ra-data-json-server";

const httpClient = (url, options = {}) => {
  options.user = {
    authenticated: true,
    token: "SRTRDFVESGNJYTUKTYTHRG",
  };
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com", httpClient);
console.log(jsonServerProvider("https://jsonplaceholder.typicode.com"));


const App = () => (
  <Admin dataProvider={dataProvider} title="example admin">
    <Resource name="posts" list={PostList} edit={PostEdit} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
);
export default App;
