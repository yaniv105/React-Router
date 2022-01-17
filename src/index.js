import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Invoices from "./routes/invoices";
import Expenses from "./routes/expenses";
import Invoice from "./routes/invoice";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} >
          <Route index element={
            <main style={{ padding: "1rem" }}>
              <p>select an invoice</p>
            </main>
          } />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<main style={{ padding: "1rem" }}>
          <p>theres nothing here</p>
        </main>}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);