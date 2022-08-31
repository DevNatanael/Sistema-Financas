import * as C from "./styles";
import {Item} from '../../types/Item'
import {TableItem} from '../TableItem'

type Props = {
  list: Item[]
}

export const TableArea = ({list}:Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={140}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={140}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={50}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index)=>(
          <TableItem  key={index} item={item}/>
        ))}


      </tbody>
    </C.Table>
  );
};
