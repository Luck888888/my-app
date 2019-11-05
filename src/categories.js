import React from 'react';
import MyUrlField from './MyUrlField';
import {
    List, Responsive, SimpleList, Datagrid, TextField, EditButton, SimpleForm,
    TextInput, Edit, DateInput, required, Create, Filter,
    ReferenceInput, SelectInput, BooleanField, BooleanInput, NumberInput, NumberField
} from 'react-admin';

export const CategoriesList = (props) => (
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
                    <TextField source="id"/>
                    <TextField source="name"/>
                    <MyUrlField source="url"/>
                    <NumberField source="order"/>
                    <BooleanField source="show"/>


                    <EditButton/>
                </Datagrid>
            }
        />
    </List>
);

const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const CategoriesEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="url" validate={required()}/>
            <NumberInput source="order" validate={required()}/>
            <BooleanInput source="show" validate={required()}/>
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()}/>
        </SimpleForm>
    </Edit>
);


export const CategoriesCreate = (props) => (
    <Create title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="url" validate={required()}/>
            <NumberInput source="order" validate={required()}/>
            <BooleanInput source="show" validate={required()}/>
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


