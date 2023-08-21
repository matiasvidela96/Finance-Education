import { Tweet } from "react-tweet";
import { TweetProps } from "tweet";

function TweetComponent({ id }: TweetProps) {
  return (
    <div>
      <Tweet id={id} />
    </div>
  );
}

export default TweetComponent;
//
