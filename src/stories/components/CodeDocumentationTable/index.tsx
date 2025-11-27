import { Children, type FC, type ReactNode } from 'react';
import type { CodeDocumentationTableProps } from './types';

const CodeDocumentationTable: FC<CodeDocumentationTableProps> = ({ codesList, titles }) => {
  const renderContent = (text: string[] | string): ReactNode | null => {
    if (!text.length) {
      return null;
    }

    if (typeof text === 'string') {
      return <p dangerouslySetInnerHTML={{ __html: text }} />;
    }

    return Children.toArray(text.map(renderContent));
  };

  const getTextTitle = (text?: string[] | string) => {
    if (!text?.length) {
      return 'Descrição';
    }

    if (typeof text === 'string') {
      return text;
    }

    return text.join(', ');
  };

  return (
    <table>
      <thead>
        <tr>
          <th className="text-left">{titles?.key ?? 'Key'}</th>
          <th className="text-left">{getTextTitle(titles?.description)}</th>
          {titles?.example && <th className="text-left">{titles?.example}</th>}
        </tr>
      </thead>
      <tbody>
        {codesList.map(({ key, description, example }) => (
          <tr key={key}>
            <td>
              <div
                className="bg-gray-50 rounded-md w-fit px-2"
                style={{
                  boxShadow:
                    'inset 0 -0.05em 0.5em #ddeaf814, inset 0 0.05em #f1f7feb5, inset 0 0.25em 0.5em #d8f4f609, inset 0 -0.1em rgba(0, 0, 0, 0.9), 0 0 0 0.075em #d9edff40, 0 0.08em 0.17em rgba(0, 0, 0, 0.95)',
                  wordSpacing: '-0.1em',
                }}
              >
                {key}
              </div>
            </td>

            <td className="text-left">
              <p className="mt-0 mb-0">{renderContent(description)}</p>
            </td>

            {example && (
              <td className="text-left">
                <p className="mt-0 mb-0">{renderContent(example)}</p>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CodeDocumentationTable;
