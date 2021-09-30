import * as React from 'react';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';

import MovieCard from '../components/MovieCard';
import { Text, View } from '../components/Themed';
import { mapGenres, searchGenres } from '../utils/Genres';

export default function MovieDetailsScreen({ route }: { route: any }) {
  const { selectedMovie, movies, } = route.params;

  const movieGenres = searchGenres(selectedMovie.genre_ids)

  const mapMovies = (movies: []) => {
    return movies.map((movie: {}, index: number) => {
      return (
        <MovieCard key={index} movie={movie} />
      )
    })
  }
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground source={{
          uri: `https://image.tmdb.org/t/p/w500` + selectedMovie.poster_path
        }}
          resizeMethod='scale'
          resizeMode='cover'
          style={styles.selectedMovieImage}
        >
          {selectedMovie.topMovie ? <Text style={styles.topMovieTag}>🥇 Top movie this week</Text> : null}
          <Text style={styles.selectedMovieTitle}>{selectedMovie.original_title}</Text>
          <Text style={styles.extraDetails}>{selectedMovie.release_date.split('-')[0]} • {mapGenres(movieGenres)} • 2h 5m</Text>
          <Text style={styles.overview}>{selectedMovie.overview}</Text>
        </ImageBackground>
      </View>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold', marginVertical: 5 }}>Also trending</Text>
        {mapMovies(movies)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070818'
  },
  selectedMovieImage: {
    paddingHorizontal: 20
  },
  topMovieTag: {
    color: '#fff',
    fontSize: 20,
    marginTop: 60,
    marginBottom: 10,
    fontWeight: '500'
  },
  selectedMovieTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 30,
    marginTop: 20,
    paddingHorizontal: 20
  },
  extraDetails: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 20
  },
  overview: {
    fontSize: 18,
    color: '#FFFFFF',
    marginVertical: 15,
    fontWeight: '700',
    paddingHorizontal: 20
  },
});
