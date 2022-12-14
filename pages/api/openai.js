import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)


export default async function handler(req, res) {
  const message = req.body?.message

  console.log({message})
  if(message){
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 50,
  })

  res.status(200).json({ name: completion.data.choices[0].text })
  }
}
