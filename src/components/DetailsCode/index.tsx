import type { FC } from 'react';

import type { DetailsCodeProps } from './types';

const DetailsCode: FC<DetailsCodeProps> = ({
  children,
  summary = '',
}) => {
  if (!children) {
    return null;
  }

  return (
    <details className="my-4 [&+&]:mt-0 focus:outline-none active:outline-none focus-visible:outline-none focus-within:outline-none">
      <summary className="flex items-center list-none gap-1 w-max select-none cursor-pointer focus:outline-none active:outline-none focus-visible:outline-none focus-within:outline-none">
        <section
          className={`flex items-center gap-1 [&>h1]:m-0 [&>h2]:m-0 [&>h3]:m-0 [&>h4]:m-0 [&>p]:m-0 [&>span]:m-0 [&>label]:m-0 [&>caption]:m-0`}
        >
          <p>{summary}</p>
        </section>
      </summary>

      {children}
    </details>
  );
};

export default DetailsCode;
