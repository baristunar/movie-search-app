<template>
  <section id="movies" v-if="movies.length > 0">
    <div class="movies-header">
      <h2 class="text-center display-4 text-danger">Filmler</h2>
    </div>
    <div class="row">
      <div class="col-lg-4 p-5" v-for="movie in movies" :key="movie.imbdbID">
        <div class="card bg-secondary">
          <img
            class="card-img-top"
            height="300"
            :src="movie.poster"
            :alt="movie.title"
          />
          <div class="card-body text-light">
            <h4>{{ movie.title }}</h4>
            <p>{{ movie.description }}</p>
            <div class="d-flex flex-column">
              <button
                id="btn-fav"
                type="button"
                class="btn btn-outline-danger"
                style="margin-bottom: 10px"
                @click="addToFavorites(movie)"
              >
                <i class="fas fa-heart"></i>
              </button>
              <a
                :href="movie.imdbLink"
                target="_blank"
                type="button"
                id="imbdb-btn"
                class="btn btn-warning"
              >
                IMDB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  props: ["movies"],
  data() {
    return {
      favorites: [],
      isExist : false
    };
  },
  methods: {
    addToFavorites(movie) {
      const isExist = this.favorites.filter((x) => x.imdbID === movie.imdbID);

      if (isExist.length > 0) {
        alert("Film listenizde mevcuttur");
      } else {
        axios
          .post("http://localhost:3000/movies", movie)
          .then((add_response) => {
            this.$emit("delete-from-searchlist-event", movie);

            axios.get("http://localhost:3000/movies").then((get_response) => {
              this.favorites = get_response.data;
              console.log(this.favorites);
            });
          });
      }
    },
  },
  created() {
    axios.get("http://localhost:3000/movies").then((get_response) => {
      this.favorites = get_response.data;
      console.log(this.favorites);
    });
  },
};
</script>


<style scoped>
h4 {
  overflow: hidden;
  text-overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>