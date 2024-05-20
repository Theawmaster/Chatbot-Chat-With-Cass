function getBotResponse(input) {
    if (input.includes("game")) {
        return "sure, but only rock, paper, scissors";
        return "input only rock, pape or scissors";
    } else if (input.includes("paper")) {
        return "scissors, good try! But I am an AI";
    } else if (input.includes("scissors")) {
        return "rock";
        return "good try! But I am an AI";
    }
    else if (input.includes("rock")) {
        return "paper, good try! But I am an AI";
    }else if (input.includes("hello")) {
        return "Hello there!";
    } else if (input.includes("who are you")) {
        return "I am a simple chatbot named Cass developed by Alvin!";
    } else if (input.includes("name")) {
        return "I am a simple chatbot named Cass developed by Alvin!";
    } else if (input.includes("age")) {
        return "Age is just a number!";
    } else if (input.includes("hi")) {
        return "How are you doing!";
    } else if (input.includes("hey")) {
        return "What's up!";
    } else if (input.includes("goodbye")) {
        return "Bye! Talk to you soon!";
    } else if (input.includes("bye")) {
        return "See you soon!";
    } else if (input.includes("time")) {
        return new Date().toLocaleTimeString();
    } else if (input.includes("today")) {
        return new Date().toLocaleDateString();
    } else if (input.includes("date")) {
        return new Date().toLocaleDateString();
    } else if (input.includes("emergency contact")) {
        return "999 for Singapore Police & 995 for Singapore ambulance and firefighter";
    } else if (input.includes("joke")) {
        return "What did the fish say when he swam into a wall? Dam";
    } else if (input.includes("story")) {
        return "It’s hard to pick a favorite from Davis’s massive body of work (“Break it Down” and “The Center of the Story” are two more that I love, though they’re a bit long for this list), but on the flip side, pretty much everything she writes is good. I like “The Outing” because it’s the skeleton of a story, poking fun at the notion of “what happens”—and yet still creates a powerful sense of what indeed happened. How does she do it?";
    } else if (input.includes("politics")) {
        return "Politics is the way that people living in groups make decisions. Politics is about making agreements between people so that they can live together in groups such as tribes, cities, or countries. In large groups, such as countries, some people may spend a lot of their time making such agreements.";
    } else if (input.includes("facebook")) {
        window.open("https://www.facebook.com/login.php/");
    } else if (input.includes("youtube")) {
        window.open("https://www.youtube.com/");
    } else if (input.includes("google")) {
        window.open("https://www.google.com/");
    }
    else {
        return "I don't quite understand you, could you type something else?";
    }
}