import React from 'react';
import MyUrlField from './MyUrlField';
import { List,Responsive, SimpleList, Datagrid, TextField, EditButton,SimpleForm,
       TextInput, Edit,  DateInput, Create,  DateField,required, Filter,
       ReferenceInput, SelectInput  } from 'react-admin';

export const PostList = (props) => (

    <List filters={<PostFilter />} {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name"/>
                    <MyUrlField source="category"/>
                    <EditButton  label="Edit"/>
                </Datagrid>
            }
        />
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="category" validate={required()} />
            <DateInput label="Publication date" source="published_at" />
                <Datagrid>
                    <DateField source="created_at" />
                    <EditButton label="Edit" />
                </Datagrid>
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="category" options={{ multiLine: true }} />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="choice" source="choice" reference="choice" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
);







