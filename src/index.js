import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'
import cors from 'cors'
import FormData from 'form-data'

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(cors())

const TEXT_API_URL =
  'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3'
const headers = { Authorization: 'Bearer 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' }
const CLOUDLAYER_API_URL = 'https://api-inference.huggingface.co/models/openai/clip-vit-base-patch32'
const API_KEY = 'Bearer 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'

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.post('/api/chat', async (req, res) => {
  const { message, emotion, ambiance } = req.body
  const payload = {
    inputs: `Considére toi comme un expert en interprétation de rêve. Message: ${message}, Emotion: ${emotion}, Ambiance: ${ambiance}`,
    parameters: { max_new_tokens: 5000, return_full_text: true }
  }

  try {
    const response = await axios.post(TEXT_API_URL, payload, { headers })
    const result = response.data[0].generated_text
    res.json({ response: result })
  } catch (error) {
    console.error('Error in /api/chat:', error.response ? error.response.data : error.message)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

app.post('/api/image', async (req, res) => {
  const { prompt } = req.body

  const form = new FormData()
  form.append(
    'options',
    JSON.stringify({
      name: 'test'
    })
  )
  form.append('template', '<html><body>Hello, world!</body></html>')
  form.append('data', JSON.stringify({ prompt }))

  try {
    const response = await axios.post(CLOUDLAYER_API_URL, form, {
      headers: {
        ...form.getHeaders(),
        'x-api-key': API_KEY
      }
    })

    res.json({ imageUrl: response.data.url })
  } catch (error) {
    console.error('Error fetching image:', error.response ? error.response.data : error.message)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))