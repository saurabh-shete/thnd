import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'
import User from '../mongoDB/schema/userSchema.js'

dotenv.config()

const router = express.Router()

const configuration = new Configuration({
  organization: 'org-4S8yAIKevosVSXYXYhIq9OWg',
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)
// const response = await openai.retrieveModel('gpt-3.5-turbo')
// console.log(response)
router.route('/').get(async (req, res) => {
  res.status(200).json({ data: 'Get Request' })
})

// const input =
//   'What is the procedure to grow tomatoes' +
//   ' To grow tomatoes\n\nFor maturing plants: fertilize at the start of the growing season and 2 to 3 times afterwards. This will help develop strong foliage and roots. Use any lawn fertilizer spread evenly around the plants. We recommend using our corn gluten meal fertilizer. It is an organic fertilizer that prevents weed seeds from sprouting and is an excellent soil conditioner. After applying fertilizer, water the plants well. If plants are not watered well, the flowers and the plant itself may be burned from the concentration of fertilizer. Water around the base of the plants so as not to get foliage wet, this keeps powdery mildew and fungus down. \n\nAnother way to fertilize tomatoes is to cultivate a bed of greens such as leaf lettuce, cabbage, or spinach between the tomatoes. When you pull the plants from the bed and destroy them, they will leave a bed of nutrients behind, which the tomatoes will utilize. SEE CORRECT WEEDING METHOD\n\nTo maintain an adequate supply of nitrogen and other nutrients, spray the foliage 2 to 3 times a season with seaweed or fish emulsion. This is especially helpful right after transplanting. Repeated applications of seaweed or fish emulsion will help prevent all disease (pest) problems, and acidify soil, as well as help in amending the soil.\n'

router.route('/users').post(async (req, res) => {
  const { name, mobile, email } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const newUser = new User({ name, mobile, email })

    const result = await newUser.save()
    res
      .status(200)
      .json({ message: 'User data stored successfully', data: result })
  } catch (error) {
    console.error('Error storing user data', error)
    res.status(500).json({ message: 'Error storing user data' })
  }
})

router.route('/edits').post(async (req, res) => {
  try {
    const { prompt, input } = req.body
    const responseAi = await openai.createEdit({
      model: 'code-davinci-edit-001',
      input: input,
      instruction: prompt
    })
    res
      .status(200)
      .json({ success: true, data: responseAi.data.choices[0].text })
  } catch (error) {
    console.log(error)
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }

    res.status(501).json({ success: false, error: error })
  }
})

export default router
