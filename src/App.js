
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import { Container,Content ,Row} from "./style";
import { useState } from "react";


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber,setFirstNumber] = useState('0');
  const [operation , setOperation] = useState('')



  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0');
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
   
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleRemNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const rem = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('x')
    }else{
      const rem = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(rem));
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const rem = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(rem));
      setOperation('')
    }
  }

  
  const handleEquals = () => {
    if(firstNumber || '0' && operation || '' && currentNumber || '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
        break;
        case '-':
          handleRemNumbers();
        break;
        case 'x':
          handleMultNumbers();
        break;
        case '/':
          handleDivNumbers();
        break;
        default:
          break;
      }
  }
}


  return (
    <Container>
      <Content>
         <Input value={currentNumber}/>

         <Row>
           <Buttons label={'0'}  onClick={() => handleAddNumber ('0')}/>
           <Buttons label={'c'}  onClick={handleOnClear}/>
           <Buttons label={'X'}  onClick={handleMultNumbers}/>
           <Buttons label={'/'}  onClick={handleDivNumbers}/>
         </Row>

         <Row>
           <Buttons label={'7'}  onClick={() => handleAddNumber ('7')}/>
           <Buttons label={'8'}  onClick={() => handleAddNumber ('8')}/>
           <Buttons label={'9'}  onClick={() => handleAddNumber ('9')}/>
           <Buttons label={'-'}  onClick={ handleRemNumbers}/>
         </Row>
         
         <Row>
           <Buttons label={'4'}  onClick={() => handleAddNumber ('4')}/>
           <Buttons label={'5'}  onClick={() => handleAddNumber ('5')}/>
           <Buttons label={'6'}  onClick={() => handleAddNumber ('6')}/>
           <Buttons label={'+'}  onClick={handleSumNumbers}/>
         </Row>
         <Row>
           <Buttons label={'1'}  onClick={() => handleAddNumber ('1')}/>
           <Buttons label={'2'}  onClick={() => handleAddNumber ('2')}/>
           <Buttons label={'3'}  onClick={() => handleAddNumber ('3')}/>
           <Buttons label={'='}  onClick={handleEquals}/>
         </Row>

      </Content>
    </Container>
  );
}

export default App;
