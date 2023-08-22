import { Usuario } from "./usuario";

export class Pacote{

  id: number;
  descricao: string;
  porte: string;
  contratanteId: Usuario | any;
  nomeDestinatario: string;
  cepDestinatario: string;
  enderecoEntrega: string;
  valor: number;
  obs: string;
  ativo: boolean;

}
