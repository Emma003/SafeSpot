const { text } = require('express');

require('dotenv').config();

const getHello = (req, res) => {
    try {
        res.status(200).json({message: 'emma is here!'});
            
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const getGoogleApiKey = async (req, res) => {
    try {
        const key = process.env.GOOGLE_API_KEY;
        res.status(200).json({key});
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

const getDashboard = async (req, res) => {

    try {
        const lon = -122.3965;
        const lat = 37.7937;
        const foodBanks = await getFoodBanks(lon, lat);
        const publicBathrooms = await getPublicBathrooms(lon, lat);
        const shelters = await getShelters(lon, lat);
        res.status(200).json({foodBanks, publicBathrooms, shelters});
            
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    
}

const getFoodBanks = async (lon, lat) => {
    try {
        const key = process.env.GOOGLE_API_KEY;
        const url = "https://places.googleapis.com/v1/places:searchNearby";

        const data = {
        includedTypes: ["restaurant"],
        maxResultCount: 5,
        "rankPreference" : "DISTANCE",
        locationRestriction: {
            circle: {
            center: {
                latitude: lat,
                longitude: lon
            },
            radius: 5000.0
            }
        }
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": `${key}`,
            "X-Goog-FieldMask": "places.displayName.text,places.formattedAddress,places.googleMapsUri,places.location,places.nationalPhoneNumber,places.websiteUri,places.currentOpeningHours.openNow"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.body}`);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        throw new Error(error.message);
    }
    
}

const getPublicBathrooms = async (lon, lat) => {

    //TODO: make sure to include one displayName.text per response (basically only one location even if there's 5 bathrooms in it)
    try {
        const key = process.env.GOOGLE_API_KEY;
        const url = "https://places.googleapis.com/v1/places:searchNearby";

        const data = {
        includedTypes: ["public_bathroom"],
        maxResultCount: 10,
        "rankPreference" : "DISTANCE",
        locationRestriction: {
            circle: {
            center: {
                latitude: lat,
                longitude: lon
            },
            radius: 500.0
            }
        }};

        const response = await fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": `${key}`,
            "X-Goog-FieldMask": "places.displayName.text,places.formattedAddress,places.googleMapsUri,places.location,places.nationalPhoneNumber,places.websiteUri,places.currentOpeningHours.openNow"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        throw new Error(error.message);
    }
    
}


const getShelters = async (lon, lat) => {

    //TODO: make sure to include one displayName.text per response (basically only one location even if there's 5 bathrooms in it)
    try {
        const key = process.env.GOOGLE_API_KEY;
        const url = "https://places.googleapis.com/v1/places:searchNearby";

        const data = {
        includedTypes: ["lodging"],
        maxResultCount: 10,
        "rankPreference" : "DISTANCE",
        locationRestriction: {
            circle: {
            center: {
                latitude: lat,
                longitude: lon
            },
            radius: 500.0
            }
        }};

        const response = await fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": `${key}`,
            "X-Goog-FieldMask": "places.displayName.text,places.formattedAddress,places.googleMapsUri,places.location,places.nationalPhoneNumber,places.websiteUri,places.currentOpeningHours.openNow"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        throw new Error(error.message);
    }
    
}



//export functions
module.exports = {
    getHello,
    getGoogleApiKey,
    getDashboard
}