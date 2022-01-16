<template>
  <div class="container">
    <div class="row">
      <div class="my-3 col-md-2">
        <input type="text" v-model="search" placeholder="Name search..." />
      </div>
      <div class="my-3 col-md-10">
        <el-slider
          v-model="prices"
          range
          :min="0"
          :max="1000000"
          :marks="marks"
        ></el-slider>
      </div>
      <div class="col-md-12">
        <table class="table table-bordered" v-if="!loading && !showData">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>
                Bedrooms
                <select v-model="selectedBedroom" class="form-select">
                  <option value="" selected>All quantity</option>
                  <option
                    v-for="bedroom in bedrooms"
                    :key="bedroom.id"
                    :value="bedroom.id"
                  >
                    {{ bedroom.quantity }}
                  </option>
                </select>
              </th>
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
      bedrooms: [],
      selectedBedroom: "",
      loading: false,
      showData: false,
      search: "",
      prices: [200000, 600000],
      marks: {
        0: "0",
        100000: "100,000",
        200000: "200,000",
        300000: "300,000",
        400000: "400,000",
        500000: "500,000",
        600000: "600,000",
        700000: "700,000",
        800000: "800,000",
        900000: "900,000",
        1000000: "1000,000",
      },
    };
  },
  watch: {
    search: function (value) {
      return this.getHouses();
    },
    prices: function (startPrice, endPrice) {
      return this.getHouses();
    },
    selectedBedroom: function (value) {
      return this.getHouses();
    },
  },
  methods: {
    getHouses() {
      this.loading = true;
      this.showData = false;
      this.axios
        .get(
          "/api/houses?q=" +
            this.search +
            "&startPrice=" +
            this.prices[0] +
            "&endPrice=" +
            this.prices[1] +
            "&selectedBedroom=" +
            this.selectedBedroom
        )
        .then((response) => {
          this.showData = response.data.length == 0;
          this.houses = response.data;
          this.loading = false;
        });
    },
  },
  mounted() {
    this.axios
      .get("api/bedrooms")
      .then((response) => (this.bedrooms = response.data));
    this.getHouses();
  },
};
</script>
