const emojiRegex = require("emoji-regex");
const regex = emojiRegex();
const chalk = require("chalk");

const streamHandler = function(tweet) {
  // console.log(chalk.green(tweet.user.screen_name, " : ", tweet.text));
  const text = tweet.text;
  const startTime = new Date();
  let emojis = [];
  let match;
  console.log(
    "firehose Tweet",
    chalk.green(tweet.user.screen_name, " : ", tweet.text)
  );
  while ((match = regex.exec(text))) {
    const emoji = match[0];
    let e = {
      codepoints: [...emoji].length,
      emoji: emoji
    };
    emojis.push(e);
  }
  // add emoji node to tweet entities object
  tweet.entities["emojis"] = emojis;
  //   socket.emit("startTime", startTime);
  //   socket.emit("tweet", { t: tweet });
};
module.exports = streamHandler;
