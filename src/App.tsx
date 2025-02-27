/* eslint-disable max-len */
import { Header } from './modules/shared/components/Header';
import { Main } from 'modules/shared/components/Main';
import { Footer } from './modules/shared/components/Footer/Footer';
import { MenuProvider } from 'contexts/MenuContext/MenuContext';
import { ProductsProvider } from 'contexts/ProductsContext/ProductsContext';

export const App: React.FC = () => (
  <MenuProvider>
    <ProductsProvider>
      <div className="App">
        <Header />

        <Main />

        <Footer />
      </div>
    </ProductsProvider>
  </MenuProvider>
);
