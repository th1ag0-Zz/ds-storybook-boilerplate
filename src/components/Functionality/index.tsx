import { Children, type FC } from 'react';


import type { FunctionalityProps } from './types';

const Functionality: FC<FunctionalityProps> = ({ list }) => {
  if (!list?.length) {
    return null;
  }

  return (
    <>
      <h2>Funcionalidades</h2>

      {Children.toArray(
        list.map(item => (
          <div className="flex items-center mb-2">
            <strong className="ml-2">{item}</strong>
          </div>
        )),
      )}
    </>
  );
};

export default Functionality;
