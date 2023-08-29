import { Usuario } from "./usuario";

export class Endereco{

  id: number;
  logradouro: string;
  numero: string;
  cep: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  usuario: Usuario;
  ativo: boolean;

}
