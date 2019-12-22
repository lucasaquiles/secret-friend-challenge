import React from 'react';
import Header from '../../components/Header';

import { Container, Input } from './styles';

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
                    <button type="button">Create Event</button>
                </Input>
            </Container>
        </>
    );
}