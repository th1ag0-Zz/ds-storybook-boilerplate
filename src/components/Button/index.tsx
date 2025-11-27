import { buttonStyles } from './styles';
import type { IButtonProps } from './types';

const Button = (props: IButtonProps) => {
  return (
    <div className={buttonStyles()} {...props}>
      Button
    </div>
  );
};

Button.displayName = 'Button';

export default Button;