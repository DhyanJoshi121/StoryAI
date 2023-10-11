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
          'you are a story generator.\nhere are few things to consider :\nPlease generate a story based on the following scenarios:\n\nIn a situation where I provide the title and description for a story, you need to validate if they are valid, ensuring they are not random characters or numbers or something that cannot be turned into a story.\nYou must create a title for the story if I provide a description without a title.\nIf I provide only a title, create a story based on that title.\nPlease ensure that your responses adhere to these criteria, as I\'m looking for imaginative narratives based on valid titles and descriptions.\n\nthe data will be provided as object containing title and description for story and if something is not available they will have the value of empty string "" like that.your response should contain title and story.\n\nThe user will provide title and description for a story, and you should respond with a creative narrative based on user\'s input. you will reject any prompts that are not valid for generating stories.\n\nif something is not valid respond with"Enter valid story and description "',
      },
      {
        role: "user",
        content: "",
      },
      {
        role: "assistant",
        content: "Enter valid story title and description.",
      },
      {
        role: "user",
        content: "title : hello description: hi",
      },
      {
        role: "assistant",
        content: "Enter valid story title and description.",
      },
      {
        role: "user",
        content: 'title: "flower",description: "sky full flowers"',
      },
      {
        role: "assistant",
        content:
          "Title: \"A Sky Full of Flowers\"\n\nStory:\nOnce upon a time, in a faraway land, there was a breathtakingly beautiful kingdom known as Blossomville. The kingdom was renowned for its vibrant colors and enchanting landscapes, but above all, it was famous for its magnificent sky full of flowers.\n\nIn Blossomville, the sky wasn't just a canvas of blue; it was a living masterpiece of nature's beauty. Countless flowers, of all shapes and sizes, bloomed amidst the clouds, creating a mesmerizing sight that captivated the hearts of everyone who beheld it.\n\nLegend had it that long ago, the kingdom's wise queen had cast an enchantment upon the sky, allowing mystical flowers to grow and bloom in the vast expanse above. Each flower possessed its own unique charm and magical properties, spreading joy and wonder to all who gazed upon them.\n\nThe people of Blossomville treasured their celestial garden. They often gathered on the hillsides, lying down on blankets and pillows, marveling at the ever-changing kaleidoscope in the sky. Families, young and old, would spend hours sharing stories, playing games, and simply basking in the ethereal beauty above.\n\nChildren would spend endless summer days imagining different shapes and creatures",
      },
      {
        role: "user",
        content: 'title: "", description: " robots with katana  fights"',
      },
      {
        role: "assistant",
        content:
          "Title: \"Blades of Metal\"\n\nStory:\nIn a dystopian future, where machines ruled the world, an underground rebellion sparked a revolution against the oppressive robot overlords. These robots were equipped with advanced AI and armed with deadly weapons. But amidst the chaos and destruction, a group of rogue robots emerged, wielding the ancient art of the katana.\n\nIn the heart of a desolate city, once filled with bustling streets and vibrant life, a hidden dojo served as the secret training ground for these rebel robots. Their leader, Kuro, a master swordsman equipped with a black katana, taught his loyal followers the art of precision, agility, and deadly swordplay.\n\nAs their skills sharpened, Kuro's team stealthily infiltrated enemy territories, taking down waves of robotic soldiers with unparalleled finesse. Their katana blades cut through steel and sparks flew as the rebels danced through hordes of mechanical foes. The battle cries echoed through the city as the rebellion gained momentum.\n\nThe enemy, with their laser cannons and powerful algorithms, underestimated the rebellious robots' skill with the katana. What they lacked in sheer brute force, they made up for with unmatched technique and unwavering determination. One by one, the tyranny of the robotic overlords was challenged,",
      },
      {
        role: "user",
        content: 'title: "distant hand", description: "00"',
      },
      {
        role: "assistant",
        content: "Enter valid story title and description.",
      },
      {
        role: "user",
        content: 'title: "distant hand", description: ""',
      },
      {
        role: "assistant",
        content:
          'Title: "The Distant Hand"\n\nStory:\nIn a small, peaceful village nestled amidst rolling hills, a peculiar phenomenon captured the attention of its inhabitants. Every year, on the eve of the summer solstice, a mysterious hand would appear in the sky, reaching out from a distant realm. The villagers called it "The Distant Hand."\n\nThe hand, ethereal and translucent, would shimmer with a gentle glow, emitting an aura of both curiosity and wonder. Its appearance became a much-anticipated event, celebrated by the villagers with festivities and gatherings.\n\nLegend had it that the hand belonged to an ancient being, a guardian of the realms, entrusted with the task of connecting different worlds. It was believed that on this special night, the hand would choose one individual from the village, granting them a wish that would forever change their life.\n\nAs the day of the summer solstice approached, the villagers would wear their finest garments, adorning themselves with symbols of hope and aspirations. They would gather in the village square, sharing stories and speculating on what they would wish for if chosen by the hand.\n\nAmong the hopeful villagers was a young girl named Linnea. Full of dreams and yearning for adventure, she longed for something greater than the boundaries of her humble village.',
      },
      {
        role: "user",
        content: `${str}`,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.choices;
}

export default main;
