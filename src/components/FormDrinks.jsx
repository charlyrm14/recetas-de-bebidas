import { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { BiDrink, BiListOl, BiSearch, BiErrorCircle } from "react-icons/bi";
import { useCategories } from '../hooks/useCategories';
import { useDrinks } from '../hooks/useDrinks';


export function FormDrinks () {

    const [ search, setSearch ] = useState({
        name:       '',
        category:   ''
    });

    const [ alert, setAlert ] = useState('');

    const { categories }    = useCategories();
    const { consultDrink }  = useDrinks();

    const handleSubmit = e => {
        e.preventDefault();

        if ( Object.values( search ).includes('') ) {

            setAlert('Todos los campos son obligatorios');

            setTimeout(() => {
                setAlert('');
            }, 3000 );

            return;
        }

        setAlert('');
        consultDrink( search );
    }

    return (
        <Form onSubmit={ handleSubmit }>

            { alert && 
                <Alert variant='danger' className='text-center text-uppercase'> { alert } <BiErrorCircle/> </Alert> 
            }

            <Row className='align-items-center'>

                <Col md={5}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-5'> Nombre Bebida <BiDrink/> </Form.Label>

                        <Form.Control 
                            type="text" 
                            placeholder="Ejemplo: Tequila, Vodka, etc..." 
                            name="name"
                            value={ search.name }
                            onChange={ e => setSearch({
                                ...search,
                                [ e.target.name ] : e.target.value
                            }) }/>

                    </Form.Group>

                </Col>

                <Col md={5}> 

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-5'> Categoría Bebida <BiListOl/> </Form.Label>

                        <Form.Select
                            name='category'
                            value={ search.category }
                            onChange={ e => setSearch({
                                ...search,
                                [ e.target.name ] : e.target.value
                            }) }>

                            <option> Selecciona </option>
                            {
                                categories.map( category => (
                                    <option 
                                        key={ category.strCategory }
                                        value={ category.strCategory }> 
                                            { category.strCategory } 
                                    </option>
                                ))
                            }

                        </Form.Select>

                    </Form.Group>

                </Col>

                <Col md={2}>
                    <Button variant="dark" className='mt-3 w-100' type='submit'>
                        Buscar Bebidas <BiSearch/>
                    </Button>
                </Col>

            </Row>


        </Form>
    )
}