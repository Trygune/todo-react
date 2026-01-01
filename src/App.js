import './App.css';
import { 
  Header,
  TodoApp,
  Footer,
} from './Components';

function App() {
  return (
    <div className='app'>
      <Header />
      <TodoApp/>
      <Footer/>
    </div>
  );
}

export default App;
