import { Table } from './components/Table';

import { IDocPropTableProps } from './types';

export const DocPropTable = ({ props }: IDocPropTableProps) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head className="w-[100px]">Nome</Table.Head>
          <Table.Head>Tipo</Table.Head>
          <Table.Head>Descrição</Table.Head>
          <Table.Head className="text-right">Valor padrão</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props?.map(prop => (
          <Table.Row key={prop?.name}>
            <Table.Cell className="font-medium">{prop?.name}</Table.Cell>
            <Table.Cell>{prop?.type}</Table.Cell>
            <Table.Cell className="max-w-[350px]">{prop?.description}</Table.Cell>
            <Table.Cell className="text-right">{prop?.defaultValue}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
