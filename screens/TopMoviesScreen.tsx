import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MovieCard from '../components/MovieCard';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TopMoviesScreen({ navigation }: RootTabScreenProps<'TopMoviesScreen'>) {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies();
  })

  const getMovies = () => {
    setLoading(true)
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=d4c38aaf3b6b6bf2e1f7a5418a14e582')
      .then(response => {
        setLoading(false)
        setMovies(response.data.results)
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
      })
  }


  const handleNavigation = (movie: any) => {
    const otherTrendingMovies = movies.filter((mov: any) => {
      return mov.id !== movie.id
    })
    navigation.navigate("MovieDetails", { selectedMovie: movie, movies: otherTrendingMovies })
  }

  const mapMovies = (movies: []) => {
    return movies.map((movie: any, index: number) => {
      if(index === 0){
        movie.topMovie = true
      }

      return (
        <TouchableOpacity key={index} onPress={() => handleNavigation(movie)}>
          <MovieCard movie={movie} />
        </TouchableOpacity>
      )
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.movieList}>
        {mapMovies(movies)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#070818'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  movieList: {
    paddingHorizontal: 10
  }
});
