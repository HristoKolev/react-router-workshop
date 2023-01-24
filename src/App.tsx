import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Page1 } from './pages/Page1';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
