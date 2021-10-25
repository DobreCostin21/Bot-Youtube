module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    const utils = require("../../utils/utils");
    console.log(`Bot-ul este online!`);
	utils.gl_translate("Hello", "english")
  },
};
