import { Avaliacao } from "./avaliacao";
import { Endereco } from "./endereco";
import { Veiculo } from "./veiculo";

export class Usuario{

  id: number;
  nome: string;
  cpfOuCnpj: string;
  dataNascimento: string;
  dataCadastro: string;
  tipoCliente: string;
  categoria: string;
  endereco: Endereco[] | any;
  email: string;
  senha: string;
  telefone: string[];
  ativo: boolean;
  perfis: string | any;
  avaliacao: Avaliacao[];
  avaliacaoRef: Avaliacao[];
  veiculo: Veiculo;

}
