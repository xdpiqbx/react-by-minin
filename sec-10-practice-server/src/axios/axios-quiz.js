import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-dpiqb.firebaseio.com'
})