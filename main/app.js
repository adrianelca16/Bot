const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const peticion = async() =>{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0.7,
        max_tokens: 256,
        frequency_penalty: 0,
        presence_penalty: 0,
        suffix: "\n"
      });

      return response
      
};

exports.myHandler = function(event, context, callback) {
  
}
