interface IProps {
  name: string;
  type: string;
  description: string;
  defaultValue: string;
}

interface IDocPropTableProps {
  props: IProps[];
}

export type { IProps, IDocPropTableProps };
