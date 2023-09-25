import { NewDiaryEntry  } from "./types";
import { Weather, Visibility } from "./enums"

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment')
    }

    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date')
    }

    return dateFromRequest
}

const parseWheather = (weatherFromRequest: any): Weather => {
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather')
    }

    return weatherFromRequest
}

const parseVisibility = (VisibilityFromRequest: any): Visibility => {
    if(!isString(VisibilityFromRequest) || !isVisibility(VisibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility')
    }

    return VisibilityFromRequest
}

const parseImages = (imageFromRequest: any): string[] => {
    if (!Array.isArray(imageFromRequest) || !imageFromRequest.every(isString)) {
        throw new Error('Images must be an array of strings')
    }

    imageFromRequest.forEach((image: string) => {
        const extension = image.split('.').pop();
        if (!extension || !['jpeg', 'jpg', 'gif', 'png', 'webp'].includes(extension)) {
            throw new Error('Invalid image URL')
        }
    });

    return imageFromRequest;
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param)
}

const isString = (string: string): boolean => {

    return typeof string == 'string'  
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry  => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWheather(object.weather),
        visibility: parseVisibility(object.visibility),
        images: parseImages(object.images)
    }

    return newEntry
}

export default toNewDiaryEntry