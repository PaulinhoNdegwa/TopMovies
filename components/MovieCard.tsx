import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const MovieCard = ({ movie, index } : {movie: any, index: any}) => {
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
                    <Text style={styles.movieExtraDetails}>Fiction / Fantasy</Text>
                    <Text style={styles.movieExtraDetails}>2021</Text>
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
        backgroundColor: '#252634',
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
        height: 195,
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
        marginBottom: 20
    },
    movieExtraDetails: {
        color: '#CDCED1',
        fontSize: 13,
        fontWeight: 'bold',
        lineHeight: 20
    }
})

export default MovieCard;