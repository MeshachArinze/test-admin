import {
  SimpleForm,
  Edit,
  TextInput,
  ReferenceInput,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
} from "react-admin";

import React from "react";

export const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);
