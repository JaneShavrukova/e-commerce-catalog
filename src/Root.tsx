import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage/HomePage';
import { CartPage } from './modules/CartPage/CartPage';
import { ContactsPage } from './modules/ContactsPage/ContactsPage';
import { NotFoundPage } from './modules/NotFoundPage/NotFoundPage';
import { ProductsPage } from './modules/ProductsPage/ProductsPage';
import { FavoritesPage } from './modules/FavoritesPage/FavoritesPage';

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path=":category" element={<ProductsPage />}>
          <Route path=":id" element={<ProductsPage />} />
        </Route>

        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="cart" element={<CartPage />} />

        <Route path="contacts" element={<ContactsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
