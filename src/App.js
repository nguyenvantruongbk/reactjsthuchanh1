import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    // <></> The rong de cac phan tu ben trong ngang hang nhau
    <>
      {/* { Header o day} */}
      {/* { Menu o day} */}
      <Router>
        <Route path='/' Component={Home} />
        <Route paht='/' Component={Aboutus}/>

      </Router>
      {/* {{Footer o day}} */}

    </>
  );
}

export default App;
