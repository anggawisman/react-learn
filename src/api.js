import axios from "axios";

export const getAllProblems = async () => {
    const problems = await axios.get(`api/v1/problems`)
    // console.log({ problems: problems })
    return problems.data.data.data
}

// axios.post(url[, data[, config]])
export const CreateProblems = async () => {
    const problems = await axios.post(`${process.env.REACT_APP_BASEURL}/problems`[{
        "title": "problem test4",
        "description": "beginilah",
        "status": "closed",
        "situation": "normal"
    }])
    return problems.data.data.data
}