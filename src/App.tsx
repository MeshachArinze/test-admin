// in src/App.tsx
import React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import { UserList } from "./components/Users";
import jsonServerProvider from "ra-data-json-server";

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: "application/json" });
//   }
//   // add your own headers here
//   options.headers.set("X-Custom-Header", "foobar");
//   return fetchUtils.fetchJson(url, options);
// };

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
console.log(jsonServerProvider("https://jsonplaceholder.typicode.com"));



// const dataProvider = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => JSON.parse(json));
// }

const App = () => (
  <Admin dataProvider={dataProvider} title="example admin">
    <Resource name="users" list={UserList} />
  </Admin>
);
export default App;
