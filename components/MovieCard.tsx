import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

import { mapGenres, searchGenres } from "../utils/Genres";

const MovieCard = ({ movie, index }: { movie: any, index: any }) => {
    const movieGenres = searchGenres(movie.genre_ids)
    return (
        <View style={index === 0 ? styles.topMovie : styles.movieCard}>
            <Image
                source={{
                    uri: `https://image.tmdb.org/t/p/w500` + movie.poster_path
                }}
                style={styles.poster}
            />
            <View style={styles.movieDetail}>
                {movie.topMovie ? <Text style={styles.topMovieTag}>🥇 Top movie this week</Text> : null}
                <Text style={styles.movieTitle}>{movie.original_title}</Text>
                <Text style={styles.movieExtraDetails}>{mapGenres(movieGenres)}</Text>
                <Text style={styles.movieExtraDetails}>{movie.release_date.split('-')[0]}</Text>
                <View style={movie.topMovie ? styles.topMovieRatingsContainer : styles.ratingsContainer}>
                    <Rating style={styles.ratings} tintColor={movie.topMovie ? '#1F8CFF' : '#252634'} imageSize={20} ratingColor='#FFB825' fractions={1} startingValue={((movie.vote_average / 10) * 5)} />
                    <Text style={styles.ratingsText}>{movie.vote_average}/10</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    movieCard: {
        flex: 1,
        flexDirection: "row",
        minWidth: '95%',
        margin: 'auto',
        marginVertical: 10,
        backgroundColor: '#1B1C2A',
        borderRadius: 15
    },
    topMovie: {
        flexDirection: "row",
        minWidth: '95%',
        margin: 'auto',
        marginVertical: 10,
        backgroundColor: '#007CFF',
        borderRadius: 15
    },
    topMovieTag: {
        color: '#fff',
        fontSize: 17,
        marginBottom: 15,
        fontWeight: '700'
    },
    poster: {
        width: 150,
        height: '100%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    movieDetail: {
        flexDirection: 'column',
        width: 0,
        flexGrow: 1,
        paddingVertical: 30,
        paddingHorizontal: 15
    },
    movieTitle: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        lineHeight: 20,
        marginBottom: 20,
        paddingHorizontal: 5
    },
    movieExtraDetails: {
        color: '#CDCED1',
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 5,
        paddingHorizontal: 5
    },
    topMovieRatingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1F8CFF',
        marginTop: 15,
        borderRadius: 5
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#252634',
        marginTop: 15,
        borderRadius: 5
    },
    ratings: {
        alignItems: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    ratingsText: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 6,
        fontWeight: '600'
    }
})

export default MovieCard;