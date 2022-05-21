import { useState } from 'react';
import './App.css';
import Paragraph from './components/Paragraph';
import TextInput from './components/TextInput';
import UnorderedList from './components/UnorderedList';

function App() {
  let [text, setText] = useState('');
  let [items, setItems] = useState([]);

  return (
    <>
      <h1>Hello, world!</h1>
      <TextInput 
        onClickHandlerAddItem={(e) => {
          e.preventDefault();
          let newItems = items.slice();
          newItems.push(e.target['0'].value);
          setItems(newItems);
        }} 
        onChangeHandler={(e) => {setText(e.target.value)}}
      />
      <Paragraph value={text} ></Paragraph>
      <UnorderedList items={items}/>
    </>
  );
}

export default App;
