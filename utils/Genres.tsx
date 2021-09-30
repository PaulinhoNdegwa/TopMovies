import React from "react";
import { Text } from "react-native";
import { genres } from "../constants/Data";

const searchGenres = (genreIds: []) => {
    let existingGenres: Array<{}> = []
    genreIds.forEach((id: number) => {
        const genreItem = genres.find(genre => {
            return genre.id === id
        })
        existingGenres.push(genreItem.name)
    })
    return existingGenres
}

const mapGenres = (genres: Array<{}>) => {
    const gens = genres.join(" / ")
    return <Text>{gens}</Text>
}

export { searchGenres, mapGenres }