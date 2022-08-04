import { useState, useEffect, createContext } from "react";
import axios from 'axios';

const DrinksContext  = createContext();

const DrinksProvider = ( { children } ) => {

    const [ drinks, setDrinks ]     = useState([]);
    const [ modal, setModal ]       = useState(false);
    const [ drinkID, setDrinkID ]   = useState(null);
    const [ recipe, setRecipe ]     = useState({});
    const [ loading, setLoading ]   = useState(false);

    useEffect( () => {

        setLoading( true );

        const getRecipe = async () => {

            if ( !drinkID ) return

            try {

                const url       = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ drinkID }`;
                const { data }  = await axios( url );

                setRecipe(data.drinks[0]);
                
            } catch ( error ) {
                console.log( error );
            } finally {
                setLoading( false )
            }

        }

        getRecipe();

    }, [ drinkID ]);


    const consultDrink = async ( dataUser ) => {

        try {

            const url      = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ dataUser.name }&c=${ dataUser.category }`;
            const { data } = await axios( url );

            setDrinks( data.drinks );

            
        } catch ( error ) {
            console.log( error );
        }

    }

    const handleModalClick = () => {
        setModal(!modal);
    }

    const handleDrinkIdClick = ( id ) => {
        setDrinkID( id );
    }

    return (
        <DrinksContext.Provider
            value={{
                consultDrink,
                drinks,
                handleModalClick,
                modal,
                handleDrinkIdClick,
                recipe,
                loading
            }}>
            { children }
        </DrinksContext.Provider>
    )

}

export {
    DrinksProvider
}

export default DrinksContext;