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
              <th>
                <a href="#" @click.prevent="change_sort('name')">Name</a>

                <span v-if="sort_direction == 'desc' && sort_field == 'name'"
                  >&uarr;</span
                >
                <span v-if="sort_direction == 'asc' && sort_field == 'name'"
                  >&darr;</span
                >
              </th>
              <th>
                <a href="#" @click.prevent="change_sort('price')">Price</a>

                <span v-if="sort_direction == 'desc' && sort_field == 'price'"
                  >&uarr;</span
                >
                <span v-if="sort_direction == 'asc' && sort_field == 'price'"
                  >&darr;</span
                >
              </th>
              <th>
                Bedrooms
                <select v-model="selectedBedroom">
                  <option value="" selected>all qty.</option>
                  <option
                    v-for="bedroom in bedrooms"
                    :key="bedroom.id"
                    :value="bedroom.id"
                  >
                    {{ bedroom.quantity }}
                  </option>
                </select>
              </th>
              <th>
                Bathrooms
                <select v-model="selectedBathroom">
                  <option value="" selected>all qty.</option>
                  <option
                    v-for="bathroom in bathrooms"
                    :key="bathroom.id"
                    :value="bathroom.id"
                  >
                    {{ bathroom.quantity }}
                  </option>
                </select>
              </th>
              <th>
                Storeys
                <select v-model="selectedStorey">
                  <option value="" selected>all qty.</option>
                  <option
                    v-for="storey in storeys"
                    :key="storey.id"
                    :value="storey.id"
                  >
                    {{ storey.quantity }}
                  </option>
                </select>
              </th>
              <th>
                Garages
                <select v-model="selectedGarage">
                  <option value="" selected>all qty.</option>
                  <option
                    v-for="garage in garages"
                    :key="garage.id"
                    :value="garage.id"
                  >
                    {{ garage.quantity }}
                  </option>
                </select>
              </th>
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
      bathrooms: [],
      selectedBathroom: "",
      storeys: [],
      selectedStorey: "",
      garages: [],
      selectedGarage: "",
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
      sort_direction: "desc",
      sort_field: "name",
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
    selectedBathroom: function (value) {
      return this.getHouses();
    },
    selectedStorey: function (value) {
      return this.getHouses();
    },
    selectedGarage: function (valus) {
      return this.getHouses();
    },
  },
  methods: {
    change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == "asc" ? "desc" : "asc";
      } else {
        this.sort_field = field;
      }
      this.getHouses();
    },
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
            this.selectedBedroom +
            "&selectedBathroom=" +
            this.selectedBathroom +
            "&selectedStorey=" +
            this.selectedStorey +
            "&selectedGarage=" +
            this.selectedGarage +
            "&sort_direction=" +
            this.sort_direction +
            "&sort_field" +
            this.sort_field
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
      .get("/api/bedrooms")
      .then((response) => (this.bedrooms = response.data));
    this.axios
      .get("/api/bathrooms")
      .then((response) => (this.bathrooms = response.data));
    this.axios
      .get("/api/storeys")
      .then((response) => (this.storeys = response.data));
    this.axios
      .get("/api/garages")
      .then((response) => (this.garages = response.data));
    this.getHouses();
  },
};
</script>
