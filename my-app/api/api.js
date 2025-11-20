import axios from 'axios'



const BaseUrl="https://tsa-nie-next.vercel.app/"


const getTrainings =()=> axios.get(`${BaseUrl}/api/trainings`)

export{getTrainings}