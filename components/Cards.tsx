import Link from "next/link";
import { CardsProps } from "card";

function Cards({ title, description, link, tags, target, image }: CardsProps) {
  const targetValue = target ? target : "_self";
  return (
    <>
      <Link href={link} target={targetValue}>
        <div className=" max-w-md rounded overflow-hidden shadow-lg  hover:bg-purple-800 ">
          <img
            className="w-full"
            src={image}
            alt="Descriptive Alternative Text"
          />
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-withe text-base">{description}</p>
          </div>
          {/* tags */}
          <div className="px-6 pt-4 pb-2">
            {tags?.map((tag) => (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{tag.topic}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
}
export default Cards;
