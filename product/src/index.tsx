import ReactDOM from 'react-dom/client';
import AppComponent from './App';

const rootElement = document.getElementsByTagName("product")[0] as HTMLElement

const root = ReactDOM.createRoot(rootElement);
const productId = rootElement.getAttribute("data-product-id");

root.render(
  <AppComponent productId={productId} />
);
