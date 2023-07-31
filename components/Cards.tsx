import Link from "next/link";

type CardsProps = {
  title: string;
  description: string;
  link: string;
  target?: string;
  tags?: string[];
};

function Cards({ title, description, link, tags, target }: CardsProps) {
  const targetValue = target ? target : "_self";
  return (
    <>
      <Link href={link} target={targetValue}>
        <div className=" max-w-md rounded overflow-hidden shadow-lg  hover:bg-purple-800 ">
          <img
            className="w-full"
            src="images/hero-image-01.jpg"
            alt="Descriptive Alternative Text"
          />
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-withe text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Finance
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Important
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #News
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Cards;
