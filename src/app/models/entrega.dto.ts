import { PagamentoDTO } from "./pagamento.dto";
import { RefDTO } from "./ref.dto";

export class EntregaDTO{

  cliente: RefDTO;
  pagamento: PagamentoDTO;

}
