import type { QuickLinkCardProps } from './types';

const QuickLinkCard = ({
  icon: Icon,
  iconColor,
  title,
  description,
  linkText,
  href,
}: QuickLinkCardProps) => {
  return (
    <div className="max-w-80 min-h-80 flex flex-col justify-evenly gap-2 p-8 border border-gray-200 rounded-lg">
      <div className="flex flex-col gap-2">
        <Icon color={iconColor} className="w-14 h-14 text-white" />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
      <a href={href} className="text-blue-500">
        {linkText}
      </a>
    </div>
  );
};

export default QuickLinkCard;
