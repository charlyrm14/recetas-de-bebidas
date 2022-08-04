import { Col, Card, Button } from 'react-bootstrap';
import { BiRightArrowCircle } from "react-icons/bi";
import { useDrinks } from '../hooks/useDrinks';


export function Drink ( { drink } ) {

    const { handleModalClick, handleDrinkIdClick } = useDrinks();

    return (
        <Col md={6} lg={3}>

            <Card className='mb-4 border-0 card-bd-transparent '>
                <Card.Img variant='top' src={ drink.strDrinkThumb } alt={ drink.strDrink } className='card-radius'/>
                <Card.Body className='card-bd-transparent'>
                    <Card.Title className='fs-6'> { drink.strDrink } </Card.Title>
                    <Button className='text-uppercase mt-2 card-bd-transparent btn-text-card border-0 w-100 fw-bold'
                            onClick={ () => { 
                                handleModalClick(),
                                handleDrinkIdClick( drink.idDrink ) 
                            }}> 
                        Ver Receta <BiRightArrowCircle/>
                    </Button>
                </Card.Body>
            </Card>

        </Col>
    )
}