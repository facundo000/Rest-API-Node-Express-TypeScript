"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWheather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (VisibilityFromRequest) => {
    if (!isString(VisibilityFromRequest) || !isVisibility(VisibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility');
    }
    return VisibilityFromRequest;
};
const parseImages = (imageFromRequest) => {
    if (!Array.isArray(imageFromRequest) || !imageFromRequest.every(isString)) {
        throw new Error('Images must be an array of strings');
    }
    imageFromRequest.forEach((image) => {
        const extension = image.split('.').pop();
        if (!extension || !['jpeg', 'jpg', 'gif', 'png', 'webp'].includes(extension)) {
            throw new Error('Invalid image URL');
        }
    });
    return imageFromRequest;
};
const isWeather = (param) => {
    return Object.values(enums_1.Weather).includes(param);
};
const isString = (string) => {
    return typeof string == 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isVisibility = (param) => {
    return Object.values(enums_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWheather(object.weather),
        visibility: parseVisibility(object.visibility),
        images: parseImages(object.images)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
