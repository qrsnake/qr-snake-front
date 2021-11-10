// import Vue from 'vue';

import axios from "axios";
import { preventExtensions } from "core-js/core/object";

const axios = require('axios').default;

async function getAnimal(chip) {
    try {
        const response = await axios.get('/animal?chip=', chip);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export default axios;