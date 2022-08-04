import { Modal, Image, Row, Col } from 'react-bootstrap';
import { useDrinks } from '../hooks/useDrinks';
import { BiDrink, BiWindowClose } from "react-icons/bi";


export function DrinkModal () {

    const { modal, handleModalClick, recipe, loading } = useDrinks();


    const showIngredients = () => {

        let ingredients = [];

        for (let index = 1; index <= 15; index++) {
            if ( recipe[`strIngredient${index}`] ) {
                ingredients.push(
                    <li key={ index }> { recipe[`strIngredient${index}`] } { recipe[`strMeasure${index}`] } </li>
                )
            }
        }

        return ingredients;

    }
    
    return (
        !loading && (
            <Modal  size="lg" 
                    show={ modal } 
                    onHide={  handleModalClick } 
                    className='rounded-3'>

                <Modal.Header closeButton>
                    <Modal.Title> { recipe.strDrink } <BiDrink/> </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <Image 
                                src={ recipe.strDrinkThumb }
                                alt={ recipe.strDrink }
                                className='w-75 card-radius img-fluid mt-3'/>
                        </Col>
                        <Col md={6}>
                            <div className='p-3'>
                                <h3> Instrucciones </h3>
                                <p> { recipe.strInstructions } </p>
                                <h3> Ingredientes </h3>
                                <p> { showIngredients() } </p>
                            </div>
                        </Col>
                    </Row> 
                </Modal.Body>

            </Modal>
        )
    )

}