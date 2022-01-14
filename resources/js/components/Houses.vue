<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <table class="mt-5 table table-bordered" v-if="!loading && !showData">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Bedrooms</th>
              <th>Bathrooms</th>
              <th>Storeys</th>
              <th>Garages</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="house in houses" :key="house.id">
              <td>{{ house.name }}</td>
              <td>{{ house.price }}</td>
              <td>{{ house.bedroom.quantity }}</td>
              <td>{{ house.bathroom.quantity }}</td>
              <td>{{ house.storey.quantity }}</td>
              <td>{{ house.garage.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="loading" class="text-center mt-5 mb-5">
          <div class="spinner-border text-primary" role="status"></div>
        </div>
        <div class="text-center mt-5 mb-5" v-if="showData">
          <h2>No data</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      houses: [],
      loading: false,
      showData: false,
    };
  },
  created() {
    this.getHouses();
  },
  methods: {
    getHouses() {
      this.loading = true;
      this.showData = false;
      this.axios.get("/api/houses").then((response) => {
        this.showData = response.data.length == 0;
        this.houses = response.data;
        this.loading = false;
      });
    },
  },
};
</script>
