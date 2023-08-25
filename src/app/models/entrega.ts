import { Pacote } from "./pacote";
import { Usuario } from "./usuario";

export class Entrega{

  id: number;
  entregadorId: Usuario[] | any;
  pacoteId: Pacote[] | any;
  dataColeta: string;
  dataEntrega: string;
  enderecoColetaId: String[];
  pagamento: String[];
  status: number;
  valor: number;
  desconto: number;
  obs: string;
  ativo: boolean;

}
