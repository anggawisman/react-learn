import axios from "axios";

export const getMe = async () => {
    const me = await axios.get(`api/v1/users/me`)
    return me.data
}
export const getMeData = async () => {
    const me = await axios.get(`api/v1/users/me`)
    return me.data.data
}

export const getAllProblems = async () => {
    const problems = await axios.get(`api/v1/problems`)
    // console.log({ problems: problems })
    return problems.data.data.data
}
export const logout = async () => {
    const logout = await axios.get(`api/v1/users/logout`)
    // console.log({ logout: logout })
    return logout.data
}

// axios.post(url[, data[, config]])
export const createProblems = async (data) => {
    await axios.post(`api/v1/problems`, data).then((res) => {
        console.log(res.data);
    })
}