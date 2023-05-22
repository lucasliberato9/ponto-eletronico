import { Botaoadm,Pontoadm, Titulo1,Botaologado, PontoLogado, Titulo2, Labelj, Labelg, Labelb, Labela, Labelq,Labelw, PontoLigado,Titulo3, Botaoligado } from "./Styles";
import { BotaoGenerico } from "../../components";

function Home() {

  return (
    // Admin ponto
  
    <Pontoadm>
      <Titulo1>
        ADMINISTRE SEU PONTO
      </Titulo1>
      <Botaoadm> 
        <BotaoGenerico height = "70px" width ="117px" name= "Login/Cadastre-se" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03" />
        </Botaoadm>
    </Pontoadm>

    // Ligar o ponto
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

// Desligar o ponto
/*
<PontoLigado>
      <Titulo3>
      SEU PONTO ESTÁ LIGADO
      </Titulo3>
      <Labelw> JOGADOR: </Labelw>
      <Labelq> JOGO: </Labelq>
      <Labelb> INÍCIO</Labelb>
      <Labela> TEMPO </Labela>
      <Botaoligado> 
       <BotaoGenerico height = "56px" width ="117px" name= "Desligar Ponto" backgroundColor= "#BC0E03" color="#d9d9d9" hoverBackgroundColor="#990D03" />
        </Botaoligado>
      
      </PontoLigado>
     */
  )
  

}
  
export default Home;