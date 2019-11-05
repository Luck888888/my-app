import React from 'react';
import MyUrlField from './MyUrlField';
import {
    List, Responsive, SimpleList, Datagrid, TextField, EditButton, SimpleForm,
    TextInput, Edit, DateInput, DateField, required, Create, Filter,
    ReferenceInput, SelectInput
} from 'react-admin';

export const UserList = (props) => (
    <List filters={<PostFilter/>} {...props}>
        <Responsive
            small={
                <SimpleList
                    key={record => record.id}
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="name"/>
                    <MyUrlField source="iosLink"/>
                    <MyUrlField source="androidLink"/>
                    <MyUrlField source="logo"/>

                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()}/>
            <TextInput source="iosLink" validate={required()}/>
            <TextInput source="androidLink" validate={required()}/>
            <TextInput source="logo" validate={required()}/>
            <DateInput label="Publication date" source="published_at"/>
            <Datagrid>
                <DateField source="created_at"/>
                <EditButton/>
            </Datagrid>
        </SimpleForm>
    </Edit>
);


export const UserCreate = (props) => (
    <Create title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="iosLink" validate={required()}/>
            <TextInput source="androidLink" validate={required()}/>
            <TextInput source="logo" validate={required()}/>

            <DateInput label="Publication date" source="published_at" defaultValue={new Date()}/>
        </SimpleForm>
    </Create>
);

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="choice" source="choice" reference="choice" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
);





