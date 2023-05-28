import { Container, Form, Rodape, Botaoadm,Pontoadm, Titulo1,
  Botaologado, PontoLogado, Titulo2, Labelj, Labelg, Labelb, Labela, Labelq,Labelw,
  PontoLigado,Titulo3, Botaoligado, 
  Logados, Time, Dados} from "./Styles";
import { BotaoGenerico } from "../../components";

function Home() {

  return (
<Container>
    <Form>
    <Rodape>

</Rodape>
<PontoLogado>
  <Titulo2>
   LIGUE SEU PONTO
  </Titulo2>
  <Labelj> JOGADOR: </Labelj>
  <Labelg> JOGO: </Labelg>
 
<Botaologado>
<BotaoGenerico height = "100%" width ="100%" name= "LIGAR PONTO" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03" />
</Botaologado>
</PontoLogado>
<Logados>
<Dados> JOGADOR</Dados>
<Dados> JOGO</Dados>
<Dados> INÍCIO</Dados>
<Dados> TEMPO</Dados>
</Logados>

    </Form>
       
</Container>




  )
  

}
  
export default Home;