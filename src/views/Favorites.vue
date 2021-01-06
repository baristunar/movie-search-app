<template>
  <div class="container" style="margin-top: 94px">
    <section id="favorites" class="bg-dark" v-if="favorites.length > 0">
      <div class="movies-header">
        <h2 class="text-center display-4 text-danger">Favori Filmlerim</h2>
      </div>
      <div class="row">
        <div class="col-lg-4 p-5" v-for="fav in favorites" :key="fav.id">
          <div class="card bg-light">
            <img
              class="card-img-top"
              height="300"
              :src="fav.poster"
              :alt="fav.title"
            />
            <div class="card-body text-dark">
              <h4>{{ fav.title }}</h4>
              <p>{{ fav.description }}</p>
              <div class="row">
                <button style="margin-bottom: 10px"
                  @click="deleteFromFavorites(fav.id)"
                  class="btn btn-outline-dark"
                >
                 <i class="fas fa-heart-broken text-danger"></i>
                </button>
                <a  :href="fav.imdbLink" target="_blank" type="button" id="imbdb-btn" class="btn btn-warning">
                  IMDB
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section id="emptyList" v-if="!favorites.length > 0">
      <div class="container" style="margin: 300px auto">
        <h2 class="display-2 text-center">
          Favori listenizde film bulunmamaktadır...
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      favorites: [],
    };
  },
  methods: {
    deleteFromFavorites(filmID) {
      const deleteQuestion = confirm("Silmek istediğinizden emin misiniz?");
      if (deleteQuestion) {
        axios
          .delete(`http://localhost:3000/movies/${filmID}`)
          .then((delete_response) => {
            this.favorites = this.favorites.filter((i) => i.id != filmID);
          });
      }
    },
  },
  created() {
    console.log(this.favorites);
    axios.get("http://localhost:3000/movies").then((get_response) => {
      console.log(get_response);
      this.favorites = get_response.data;
    });
  },
};
</script>


<style scoped>
#favorites {
  margin-bottom: 100px;
  padding: 50px;
}
.card {
  border: 3px solid #bb2d3b;
  border-radius: 5px;
}
h4{
  overflow: hidden;
  text-overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient:vertical;
}
</style>
