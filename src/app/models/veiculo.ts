import { Usuario } from "./usuario";

export class Veiculo{

  id: number;
  porte: string;
  placa: string;
  marca: string;
  modelo: string;
  ano: string;
  cor: string;
  usuario: Usuario;
  ativo: boolean;

}
