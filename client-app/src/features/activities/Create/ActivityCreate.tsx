import React from "react";
import { Button, Card, CardContent, Form, FormGroup, FormInput, FormTextArea, Input, Segment } from "semantic-ui-react";

export default function ActivityCreate(){
    return(
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title'/>
                <Form.TextArea placeholder='Description'/>
                <Form.Input placeholder='Category'/>
                <Form.Input placeholder='Date'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Venue'/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button floated='right' type='button' content='Cancel'/>
            </Form>            
        </Segment>
    )
}