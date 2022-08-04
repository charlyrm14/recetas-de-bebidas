import { useDrinks } from "../hooks/useDrinks"
import { Row } from 'react-bootstrap';
import { Drink } from "./Drink";


export function DrinksList () {

    const { drinks } = useDrinks();
    
    return (
        <Row className="mt-5">
            {
                drinks.map( drink => (
                    <Drink key={ drink.idDrink }
                            drink={ drink }/>
                ))
            }
        </Row>
    )
}