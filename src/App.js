
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import { Container,Content ,Row,Column} from "./style";


const App = () => {
  return (
    <Container>
      <Content>
         <Input/>

         <Row>
           <Buttons label={'7'}/>
           <Buttons label={'8'}/>
           <Buttons label={'9'}/>
           <Buttons label={'-'}/>
         </Row>
         
         <Row>
           <Buttons label={'4'}/>
           <Buttons label={'5'}/>
           <Buttons label={'6'}/>
           <Buttons label={'+'}/>
         </Row>
         <Row>
           <Buttons label={'1'}/>
           <Buttons label={'2'}/>
           <Buttons label={'3'}/>
           <Buttons label={'='}/>
         </Row>

      </Content>
    </Container>
  );
}

export default App;
