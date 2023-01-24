import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

import { Page1 } from './pages/Page1';
import { NotFound } from './pages/NotFound';
import { Page2 } from './pages/Page2';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2/42">Page 2 - 42</Link>
          </li>
          <li>
            <Link to="/page2/43">Page 2 - 43</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/" element={<Navigate to="/page1" />} />
          <Route path="/page2/:petId" element={<Page2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
