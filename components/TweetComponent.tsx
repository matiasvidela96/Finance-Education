import { Tweet } from "react-tweet";
type TweetProps = {
  id: string;
};
function TweetComponent({ id }: TweetProps) {
  return (
    <div>
      <Tweet id={id} />
    </div>
  );
}

export default TweetComponent;
//
