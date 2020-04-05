class Storage {
  constructor() {
    this.city;
    this.defaultCity = "Colchester";
  }

  // Get the data from LS
  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    return {
      //prettier-ignore
      city: this.city
    };
  }

  // Set the data in LS
  setLocationData(city) {
    localStorage.setItem("city", city);
  }
}
