import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from 'ai'
const config = new Configuration({
    apiKey: process.env.OPENAI_APY_KEY
})

const openai = new OpenAIApi(config);

export async function POST(request: Request) {
    const { messages } = await request.json()
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        messages
    })
    //Me devuelve un string, pero como tengo el SDK, lo suo para transformar el string en un objeto
    const stream = OpenAIStream(response)
    //retorno ahora el streaming convertido a texto 

    return new StreamingTextResponse(stream)

    //process with openai

}