import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  color: red;
  background: blue;
  text-transform: uppercase;
`;

function App() {
  return (
    <div className='App'>
      Styled components
      <Button>click me</Button>
    </div>
  );
}

export default App;
