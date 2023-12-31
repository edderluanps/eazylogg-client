import { Endereco } from "./endereco";
import { Pacote } from "./pacote";
import { Usuario } from "./usuario";

export class Entrega{

  id: number;
  entregadorId: Usuario[] | any;
  pacoteId: Pacote[] | any;
  dataColeta: string;
  dataEntrega: string;
  enderecoColetaId: Endereco;
  pagamento: String[];
  status: any;
  valor: number;
  desconto: number;
  obs: string;
  codRastreamento: string;
  ativo: boolean;

}
