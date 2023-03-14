import axios from "axios";

export const getAllProblems = async () => {
    const problems = await axios.get(`${process.env.REACT_APP_BASEURL}/problems`)
    // console.log({ problems: problems })
    return problems.data.data.data
}