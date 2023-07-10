import type { NextApiRequest, NextApiResponse } from "next";
import { random } from "radash";

type Paragraph = {
  id: number;
  content: string;
};

const paragraphs: Paragraph[] = [
  {
    id: 1,
    content:
      "The sun was setting over the horizon, casting a warm orange glow across the sky. Birds chirped happily in the trees, bidding farewell to another beautiful day. As I walked along the sandy beach, I could feel the gentle breeze caressing my face. The waves crashed against the shore, creating a soothing melody that filled the air. It was a moment of pure serenity, a moment to cherish and hold close to my heart.",
  },
  {
    id: 2,
    content:
      "In the bustling city, people hurriedly went about their day, lost in their own thoughts and worries. The streets were filled with the sound of car horns and the chatter of pedestrians. Amidst the chaos, I found solace in the hidden corners, where pockets of tranquility could be discovered. A small park with blooming flowers and a quiet bench became my refuge, allowing me to escape the rush and find a moment of peace.",
  },
  {
    id: 3,
    content:
      "As the rain poured down outside, I curled up on the couch with a cup of hot tea in my hands. The sound of raindrops against the window created a rhythmic symphony, lulling me into a state of relaxation. With each sip, warmth spread through my body, and a sense of calm washed over me. It was in these quiet moments that I found comfort, embracing the simple pleasures that life had to offer.",
  },
  {
    id: 4,
    content:
      "The vast wilderness stretched out before me, untouched and majestic. Towering trees reached for the sky, their branches swaying in the gentle breeze. The earthy scent of moss and damp soil filled the air, reminding me of the raw beauty of nature. With each step, I felt a deep connection to the world around me, a reminder of our place in this grand tapestry of life.",
  },
  {
    id: 5,
    content:
      "Laughter echoed through the room as friends gathered around the table, sharing stories and creating memories. The clinking of glasses and the aroma of delicious food filled the air, creating an atmosphere of joy and togetherness. In this moment, time seemed to stand still as we immersed ourselves in the company of loved ones, cherishing the bonds that brought us together.",
  },
  {
    id: 6,
    content:
      "The pages of a book turned beneath my fingertips, transporting me to distant lands and captivating worlds. With each word, my imagination soared, painting vivid pictures in my mind. The stories unfolded like magic, revealing new perspectives and inspiring a thirst for knowledge. In the realm of books, I found solace and adventure, a gateway to infinite possibilities.",
  },
  {
    id: 7,
    content:
      "The early morning sun painted the sky in hues of pink and gold, announcing the arrival of a new day. Dew glistened on the grass, as if nature had adorned itself with delicate diamonds. It was a time of renewal and hope, a chance to start afresh and embrace the endless opportunities that lay ahead. As I took a deep breath, I felt a surge of optimism, ready to seize the day and make it my own.",
  },
  {
    id: 8,
    content:
      "A melody filled the concert hall, captivating the audience and evoking a range of emotions. The music flowed from the instruments, intertwining in perfect harmony. With each note, I could feel the passion and dedication of the musicians, their talent captivating the hearts of those who listened. It was a moment of pure artistry, a celebration of the power of music to move and inspire.",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Paragraph>
) {
  const randomNo = random(0, paragraphs.length - 1);
  res.status(200).json(paragraphs[randomNo]);
}
