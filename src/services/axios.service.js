import axios from "axios";

import {baseURL}

const axiosService = axios.create({baseURL});

export {
    axiosService
}