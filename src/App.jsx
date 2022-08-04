import { Container } from 'react-bootstrap';
import { DrinkModal } from './components/DrinkModal';
import { DrinksList } from './components/DrinksList';
import { FormDrinks } from './components/FormDrinks';
import { CategoriesProvider } from './context/CategoriesProvider';
import { DrinksProvider } from './context/DrinksProvider';


function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1> Recetas de Bebidas </h1>
        </header>

        <Container className='mt-3'>
          <FormDrinks/>
          <DrinksList/>
          <DrinkModal/>
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  )
}

export default App
