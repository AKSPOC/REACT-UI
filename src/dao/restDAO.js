import axios from "axios";
import {GET_ACHIEVEMENT_URL, GET_CONTACTS_URL, GET_USER_URL} from "../components/constants/restApiUrl.js";

export let profile = [];
export const getProfile = function () {

    axios.get(GET_USER_URL)
        .then(value => value.data)
        .then(value => profile = value);
    return profile;

};
export let achievement = [];
export const getAchievement = function () {
    axios.get(GET_ACHIEVEMENT_URL)
        .then(value => value.data)
        .then(value => achievement = value);
    return achievement;
};
export let contacts = [];
export const getContacts = function () {
    axios.get(GET_CONTACTS_URL)
        .then(value => value.data)
        .then(value => contacts = value);
    return contacts;
};