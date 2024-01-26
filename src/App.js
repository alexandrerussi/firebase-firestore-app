/* App.js */
import './App.css';
import Products from './Products';
import AddProductForm from './AddProductForm';

function App() {
  return (
    <div className="App">
      <h1>Produtos da Loja</h1>
      <AddProductForm />
      <Products />
    </div>
  );
}

export default App;
