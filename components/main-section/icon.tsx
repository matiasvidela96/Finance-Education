import * as logo from "@phosphor-icons/react";
import type { IconWeight } from "@phosphor-icons/react";
import Link from "next/link";

interface IconProps {
  name?: keyof typeof logo;
  size?: number;
  color?: string;
  weight?: IconWeight;
  title: string;
  description: string;
  link: string;
  target?: string;
}

export default function Icon({
  name,
  size,
  color,
  weight,
  title,
  description,
  link,
  target,
}: IconProps) {
  const IconComponent = name ? (logo[name] as React.ElementType) : null;
  const targetValue = target ? target : "_self";
  return (
    <>
      <Link
        href={link}
        target={targetValue}
        className="relative flex flex-col items-center hover:bg-zinc-700 hover:bg-opacity-25 rounded"
      >
        {IconComponent && (
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 mb-2 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center">
              <IconComponent size={size} color={color} weight={weight} />
            </div>
          </div>
        )}
        <div className="flex items-center justify-center">
          <h4 className="h4 mb-2">{title}</h4>
        </div>
        <div>
          <p className="text-lg text-gray-400 text-center">{description}</p>
        </div>
      </Link>
    </>
  );
}
