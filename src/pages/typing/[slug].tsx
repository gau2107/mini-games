import TextInput from "@/components/common/TextInput";
import Timer from "@/components/common/Timer";
import { GetServerSideProps, NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
type Paragraph = {
  id: number;
  content: string;
};
type ServerSideProps = {
  paragraph: Paragraph;
};

const Slug: NextPage<ServerSideProps> = ({ paragraph }) => {
  const [paragraphArray, setParagraphArray] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [userWpm, setUserWpm] = useState<number>();
  const [userAccuracy, setUserAccuracy] = useState<string>();
  const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false);

  useEffect(() => {
    let temp = paragraph.content;
    setParagraphArray(temp.split(""));
  }, [paragraph]);

  const timerEndCallbackFn = () => {
    setIsTestCompleted(true);
    const tempUserInputArr = userInput.split(" ");
    const tempPara = paragraph.content.split(" ");
    tempPara.slice(tempUserInputArr.length);
    let mismatchCount = 0;

    for (let i = 0; i < tempUserInputArr.length; i++) {
      if (tempUserInputArr[i] !== tempPara[i]) {
        mismatchCount++;
      }
    }
    let rightWords = tempUserInputArr.length - mismatchCount;
    let accuracy = (rightWords * 100) / tempUserInputArr.length;
    setUserAccuracy(accuracy.toString());
    setUserWpm(rightWords);
  };

  return (
    <div>
      <Timer timeInSeconds={60} timerEndCallbackFn={timerEndCallbackFn} />
      {paragraphArray.map((character, key) => {
        return (
          <span
            style={{
              color:
                key >= userInput.length
                  ? "black"
                  : userInput[key] === character
                  ? "green"
                  : "red",
            }}
            key={key}
          >
            {character}
          </span>
        );
      })}
      <TextInput
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          setUserInput(ev.target.value)
        }
        hidden={true}
      />
      {isTestCompleted && (
        <p>
          Your result: {userWpm} with accuracy: {userAccuracy} %
        </p>
      )}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps<
  ServerSideProps
> = async () => {
  const paragraph: Paragraph = {
    id: 1,
    content:
      "The sun was setting over the horizon, casting a warm orange glow across the sky. Birds chirped happily in the trees, bidding farewell to another beautiful day. As I walked along the sandy beach, I could feel the gentle breeze caressing my face. The waves crashed against the shore, creating a soothing melody that filled the air. It was a moment of pure serenity, a moment to cherish and hold close to my heart.",
  };
  return {
    props: {
      paragraph,
    },
  };
};

export default Slug;
