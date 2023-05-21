import { Botaoadm,Pontoadm, Titulo1,Botaologado, PontoLogado, Titulo2, Labelj, Labelg, Labelb, Labela } from "./Styles";
import { BotaoGenerico } from "../../components";

function Home() {

  return (
  /*
    <Pontoadm>
      <Titulo1>
        ADMINISTRE SEU PONTO
      </Titulo1>
      <Botaoadm> 
        <BotaoGenerico name= "Login/Cadastre-se" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03" />
        </Botaoadm>
    </Pontoadm>
*/
/*
<PontoLogado>
      <Titulo2>
       LIGUE SEU PONTO
      </Titulo2>
      <Labelj> JOGADOR: </Labelj>
      <Labelg> JOGO: </Labelg>

      <Botaologado> 
        <BotaoGenerico height = "56px" width ="117px" name= "LIGAR PONTO" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03" />
        </Botaologado>
      
      
    </PontoLogado>
 */

<PontoLogado>
      <Titulo2>
      SEU PONTO ESTÁ LIGADO
      </Titulo2>
      <Labelj> JOGADOR: </Labelj>
      <Labelg> JOGO: </Labelg>
      <Labelb> INÍCIO</Labelb>
      <Labela> TEMPO </Labela>
      <Botaologado> 
        <BotaoGenerico width ="80px" name= "DESLIGAR PONTO" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03" />
        </Botaologado>
      
      </PontoLogado>
      
  )
  

}
  
export default Home;