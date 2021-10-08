import { ChangeEvent, useState } from "react";
import { Form } from 'semantic-ui-react';

type LinkStationFormProps = {
    onSubmit: (x: string, y: string) => void;
}

const LinkStationForm = (props: LinkStationFormProps) => {
    const { onSubmit } = props;
    const [ x, setX ] = useState('');
    const [ y, setY ] = useState('');

    const handleChangeX = (e: ChangeEvent<HTMLInputElement>) => {
        setX(e.target.value);
    }

    const handleChangeY = (e: ChangeEvent<HTMLInputElement>) => {
        setY(e.target.value);
    }
    
    return <Form onSubmit={() => onSubmit(x,y)}>
        <Form.Group>
        <Form.Input
            placeholder='Enter x-coordinate'
            name='x'
            value={x}
            onChange={handleChangeX}
        />
        <Form.Input
            placeholder='Enter y-coordinate'
            name='y'
            value={y}
            onChange={handleChangeY}
        />
        <Form.Button content='Submit' />
        </Form.Group>
    </Form>
}

export default LinkStationForm;