interface IFeature {
  key: string;
  description: string | string[];
  example?: string | string[];
}

export interface CodeDocumentationTableProps {
  codesList: Array<IFeature>;
  titles?: IFeature;
}
