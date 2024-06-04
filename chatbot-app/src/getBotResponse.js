const responses = {
  game: "Sure, but only rock, paper, scissors.",
  paper: "Scissors, good try! But I am an AI.",
  scissors: "Rock.",
  rock: "Paper, good try! But I am an AI.",
  hello: "Hello there!",
  "who are you": "I am a simple chatbot named Cass developed by Alvin!",
  name: "I am a simple chatbot named Cass developed by Alvin!",
  age: "Age is just a number!",
  hi: "How are you doing!",
  hey: "What's up!",
  goodbye: "Bye! Talk to you soon!",
  bye: "See you soon!",
  time: () => new Date().toLocaleTimeString(),
  today: () => new Date().toLocaleDateString(),
  date: () => new Date().toLocaleDateString(),
  "emergency contact": "999 for Singapore Police & 995 for Singapore ambulance and firefighter.",
  joke: "What did the fish say when he swam into a wall? Dam.",
  story: "It’s hard to pick a favorite from Davis’s massive body of work (“Break it Down” and “The Center of the Story” are two more that I love, though they’re a bit long for this list), but on the flip side, pretty much everything she writes is good. I like “The Outing” because it’s the skeleton of a story, poking fun at the notion of “what happens”—and yet still creates a powerful sense of what indeed happened. How does she do it?",
  politics: "Politics is the way that people living in groups make decisions. Politics is about making agreements between people so that they can live together in groups such as tribes, cities, or countries. In large groups, such as countries, some people may spend a lot of their time making such agreements.",
  help: `Here are some prompts you can try:
  - "game"
  - "hello"
  - "who are you"
  - "name"
  - "age"
  - "hi"
  - "hey"
  - "goodbye"
  - "time"
  - "today"
  - "date"
  - "emergency contact"
  - "joke"
  - "story"
  - "politics"
  - "facebook"
  - "youtube"
  - "google"`,
};

const externalLinks = {
  facebook: "https://www.facebook.com/login.php/",
  youtube: "https://www.youtube.com/",
  google: "https://www.google.com/",
};

export function getBotResponse(input) {
  const lowerCaseInput = input.toLowerCase();

  // Handle external links
  for (const [key, url] of Object.entries(externalLinks)) {
    if (lowerCaseInput.includes(key)) {
      window.open(url);
      return `Opening ${key}...`;
    }
  }

  // Handle predefined responses
  for (const [key, response] of Object.entries(responses)) {
    if (lowerCaseInput.includes(key)) {
      return typeof response === "function" ? response() : response;
    }
  }

  return "I don't quite understand you, could you type something else?";
}