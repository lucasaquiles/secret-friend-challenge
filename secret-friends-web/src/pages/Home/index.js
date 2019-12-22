import React from 'react';
import Header from '../../components/Header';

import { Container, Input } from './styles';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <Input>
                    <input
                        placeholder="E-mail"
                    />
                    <p>OU</p>
                    <Link to="/event/new" className="button">Create Event</Link>
                </Input>
            </Container>
        </>
    );
}