import { BrowserRouter, Routes, Route } from "react-router-dom";

export function renderComponent(route, component) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route} element={component} />
      </Routes>
    </BrowserRouter>
  );
}
