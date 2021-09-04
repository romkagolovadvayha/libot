import React from 'react';
import ST from './styles';
import Table from '../../../styles/components/table';

export function Presenter() {
    return (
        <Table.Container>
            <Table.Header>
                <Table.HeaderItemList>
                    <Table.HeaderItem>#</Table.HeaderItem>
                    <Table.HeaderItem>Название</Table.HeaderItem>
                </Table.HeaderItemList>
            </Table.Header>
            <Table.Body>
                <Table.BodyItemList>
                    <Table.BodyItem>1</Table.BodyItem>
                    <Table.BodyItem>Бот номер 1</Table.BodyItem>
                </Table.BodyItemList>
                <Table.BodyItemList>
                    <Table.BodyItem>1</Table.BodyItem>
                    <Table.BodyItem>Бот номер 1</Table.BodyItem>
                </Table.BodyItemList>
            </Table.Body>
        </Table.Container>
    );
}
