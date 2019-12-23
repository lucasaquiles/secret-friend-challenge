import React from 'react';
import Header from '../../components/Header';

import { Form, Input } from '@rocketseat/unform';

import { Container, Inputs } from './styles';

export default function CreateEvent() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit} className="form">
          <h2>Create Event</h2>
          <div>
            <label>Theme</label>
            <Input name="theme" />
          </div>
          <div>
            <label>Description</label>
            <Input name="description" />
          </div>
          <div>
            <label>Event Date</label>
            <Input name="event_date" type="date" />
          </div>
          <div>
            <label>Owner Name</label>
            <Input name="owner.name" />
          </div>
          <div>
            <label>Owner E-mail</label>
            <Input name="owner.email" type="email" />
          </div>
          <div>
            <button type="submit" className="button">Save</button>
          </div>

        </Form>
      </Container>
    </>
  );
}
