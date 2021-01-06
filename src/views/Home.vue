<template>
  <div>
    <div class="container" style="margin-top: 94px">
      <!--     Film search area -->
      <search-film @search-film-event="getFilmsFromApi" />
      <!-- movie listing -->
      <film-list
        :movies="movies"
        @delete-from-searchlist-event="deleteFromSearchList"
        
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import searchFilm from "../components/searchFilm.vue";
import filmList from "../components/filmList.vue";

export default {
  components: {
    searchFilm,
    filmList,
  },
  data() {
    return {
      filmName: "",
      movies: [],
      favorites: [],
    };
  },
  methods: {
    getFilmsFromApi(value) {
      if (value != "") {
        const film = value;
        axios
          .get(`http://www.omdbapi.com/?apikey=7b38c1a8&s=${film}`)
          .then((get_response) => {
            this.movies = get_response.data.Search.map((m) => {
              return {
                title: m.Title,
                description: `${m.Year} / ${m.Type}`,
                imdbID: m.imdbID,
                poster:
                  m.Poster === "N/A"
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnb43MuKReMIG9fvcHJrOAupaJjzKCcEdyw&usqp=CAU"
                    : m.Poster,
                imdbLink: `https://www.imdb.com/title/${m.imdbID}`,
                isExist: false
              };
            });
          });
      }
    },
    deleteFromSearchList(movie) {
      const filmIndex = this.movies.findIndex((i) => i.imdbID == movie.imdbID);

      this.movies.splice(filmIndex, 1);
    },
  },
  
};
</script>


<style scoped>
#movies {
  margin-bottom: 100px;
  padding: 50px;
}
</style>
