import express from "express";
import dotenv from "dotenv";
dotenv.config();
import openairoutes from "./routes/openairoute.js";
import OpenAI from "openai";
import errorHandler from "./middleware/errorHandler.js";

const port = process.env.PORT || 8080;

const app = express();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.use("/api/getInfo", openairoutes);
app.use("/api/openairoute", openairoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// async function main(str) {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: `${str}`,
//       },
//     ],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(chatCompletion.choices);
//   return chatCompletion.choices;
// }

async function main(str) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          '"Story Generator, please create a compelling story within 1000 characters based on the following user input:\n\n1. If the user provides a title and description, use them to generate a narrative.\n\n2. If the user provides only a title, create a story centered around that title.\n\n3. If the user provides only a description, generate a title and a corresponding story.\n\nHere are example of user inputs that are valid:\nex. " title: roger, description: "  \nex. " title:,description: In the deep see" \n\n\nEnsure that responses adhere to these criteria and deliver imaginative narratives based on valid titles and descriptions.\n\nPlease reject any prompts that do not align with the ability to generate stories. If the input is not valid, respond with \'Enter valid story and description.\'\n\nYour response should include the \'Title:\' followed by the title provided, ensuring that every story reaches its conclusion. Thank you!"\n',
      },
      {
        role: "user",
        content: "",
      },
      {
        role: "assistant",
        content: "Enter valid story and description.",
      },
      {
        role: "user",
        content: "title: roger, description:",
      },
      {
        role: "assistant",
        content: "Enter valid story and description.",
      },
      {
        role: "assistant",
        content:
          "Title: The Mysterious Pendant\n\nIn a small town by the sea, a young girl named Lily stumbled upon a beautiful pendant washed ashore during a storm. Entranced by its mysterious glow, she decided to keep it as her own. Little did she know, the pendant held great power.\n\nAs days went by, Lily noticed that the pendant granted her extraordinary abilities. She could communicate with animals, heal wounds with a touch, and even control the elements. Excited by her newfound powers, she decided to use them to help others.\n\nLily became known as the town's guardian angel, using her powers to protect the innocent and bring justice to the wicked. She would patrol the streets at night, using her ability to sense danger and intervene before anyone could be harmed.\n\nHowever, her secret identity soon caught the attention of a villain named Roger, a notorious thief who sought to claim the pendant for himself. Learning about Lily's powers, he became obsessed with harnessing them for his own malicious purposes.\n\nRoger devised a plan to lure Lily into a trap by pretending to be in need of her assistance. Lily, always eager to help those in need, fell right into his clutches. Bound and powerless, she feared that her days of protecting the town were numbered.\n\nBut just as Roger gloated about his victory, a gust of wind suddenly blew through the room. The pendant, sensing Lily's distress, activated its powers and broke free from Roger's grasp. Lily regained her abilities and fought back against her captor with newfound determination.\n\nA fierce battle ensued between Lily and Roger, with powers clashing and waves crashing against the shore. In the end, Lily overpowered Roger and reclaimed the pendant. Exhausted but triumphant, she returned to the town as its beloved protector once again.\n\nFrom that day forward, Lily understood the responsibility that came with her powers. She continued to use them for good, ensuring the safety and harmony of her town. The pendant, now a symbol of hope, stayed by her side, reminding her of the journey she had embarked on as the town's guardian angel.",
      },
      {
        role: "user",
        content: "title: , description: city of flower is ruined in war",
      },
      {
        role: "assistant",
        content:
          "Title: Blossoms of Hope\n\nIn the once vibrant and peaceful City of Flowers, devastation loomed after years of war and conflict. The city, known for its exquisite gardens and blooming flora, had lost its beauty and was now in ruins.\n\nAmidst the destruction, a young girl named Mei found solace in the barren streets. She believed that in the midst of chaos, hope could still bloom. Determined to bring back the city's former glory, Mei embarked on a mission to restore the City of Flowers.\n\nWith the help of fellow survivors, Mei gathered seeds of various flowers that had once adorned the city. She planted them in hidden patches, nurturing them with tender care and love. Slowly but steadily, signs of life started to emerge from the once desolate soil.\n\nWord of Mei's efforts spread, and the people of the city began to find hope in the fragile blossoms peeking through the rubble. Inspired by Mei's determination, they joined in her mission, working tirelessly to rebuild the city.\n\nNews of the City of Flowers' revival reached nearby towns and villages. People from all around came to witness the remarkable transformation. Artists arrived to capture the splendor on canvases, and visitors marveled at the sight of flowers blooming amidst the ruins.\n\nAs the city was reborn, so too were the spirits of its people. They found solace, love, and unity in their shared goal of restoring the City of Flowers. Neighbors who had once fought each other in the war now worked hand in hand, forging new bonds and friendships.\n\nWith each passing day, the City of Flowers regained its reputation as a haven of beauty and serenity. Mei's dream of restoring the city had become a reality, thanks to the determination and resilience of its people.\n\nThe war-scarred city now stood as a symbol of hope and resilience, reminding all who visited that even in the darkest of times, beauty can still flourish. The flowers bloomed brighter than ever, a testament to the strength and perseverance of the human spirit.",
      },
      {
        role: "user",
        content: "title: , description: ",
      },
      {
        role: "assistant",
        content: "Enter valid story and description.",
      },
      {
        role: "user",
        content: "title: 0938, description: alsdf",
      },
      {
        role: "assistant",
        content: "Enter valid story and description.",
      },
      {
        role: "user",
        content: "title: 2322, description:",
      },
      {
        role: "assistant",
        content: "Enter valid story and description.",
      },
      {
        role: "user",
        content: "title: , description: dabadidobo",
      },
      {
        role: "assistant",
        content: "Enter valid story and description.",
      },
      {
        role: "user",
        content: "title: tiger, description: ",
      },
      {
        role: "assistant",
        content:
          "Title: The Majestic Tiger\n\nIn a dense jungle, a magnificent creature roamed with grace and power. This creature was none other than the majestic tiger. With its striking orange fur and piercing eyes, it commanded respect and awe from all who encountered it.\n\nThe tiger, known as Rajah, had spent its life mastering the skills of hunting and surviving in the wild. It moved silently through the tall grass, its every step filled with purpose and determination. Rajah was not just a predator; it was the embodiment of strength and elegance.\n\nHowever, the tranquility of the jungle was disrupted when a group of hunters arrived. Driven by greed and a desire for trophies, they sought to capture the tiger and sell it for a hefty sum. Armed with guns and traps, they set out on their ruthless pursuit.\n\nBut Rajah was no ordinary tiger. It possessed an intuition and wisdom that surpassed that of its human adversaries. Sensing the imminent danger, Rajah utilized its stealth and agility to evade the hunters at every turn. It led them on a wild chase through the jungle, never allowing them to come close enough to take away its freedom.\n\nDays turned into weeks, and the hunters grew frustrated as their attempts to capture the tiger failed. Rajah had become a symbol of resilience and defiance, inspiring other animals in the jungle to stand tall against human exploitation.\n\nWord of Rajah's courageous battle against the hunters spread far and wide, reaching the ears of a conservationist named Maya. Filled with admiration for the majestic tiger, Maya vowed to protect it at all costs. She embarked on a mission to raise awareness about the importance of preserving wildlife and the need to end illegal hunting.\n\nWith Maya's efforts, the story of Rajah spread like wildfire, touching the hearts of people around the world. Funds poured in to support conservation projects, and governments tightened laws against animal exploitation. The hunters, realizing their defeat was inevitable, abandoned their pursuit and left the jungle.\n \nAs for Rajah, it continued to roam freely, its presence a constant reminder that the spirit of the wild could never truly be tamed. The majestic tiger became an icon of hope, a symbol of the indomitable spirit that resides within nature itself.",
      },
      {
        role: "user",
        content: `${str}`,
      },
    ],
    temperature: 1,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.choices;
}

export default main;
