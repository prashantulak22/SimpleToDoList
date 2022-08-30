import React from 'react';
import { Table, Button, TableCell } from 'semantic-ui-react';
import {Todo} from '../Model'


interface Props{
    APIData: Todo[];
    setData:(data: Todo) => void;
    onDelete: (id: number) => void;
    handleDone: (id: number) => void

}

const TodoTable: React.FC<Props>= ({APIData, setData, onDelete,handleDone }) => {
   
    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Todo Items</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                    <Table.HeaderCell>Done</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {APIData.map((data) => {
                    return (
                        <Table.Row>
                            <TableCell>{data.todo}</TableCell>
                            <Table.Cell>
                                <Button onClick={() => setData(data)}>Update</Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button  onClick={() => handleDone(data.id)}>Done</Button>
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>

    )
}

export default TodoTable
