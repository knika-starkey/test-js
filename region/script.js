function Region(name, area, population) {
  this.name = name;
  this.area = area;
  this.population = population;
}
Region.prototype.about = function () {
  alert(`Регіон - ${this.name}: ${this.area} - ${this.population}`);
};

function Country(name, area, population, capital) {
  this.capital = capital;
  Region.apply(this, arguments);
}

Country.prototype = Object.create(Region.prototype);
Country.prototype.constructor = Country;
Country.prototype.about = function () {
  //Region.prototype.about.apply(this);
  alert(
    `Столиця - ${this.capital}, регіон - ${this.name}: ${this.area} - ${this.population}`
  );
};

function City(name, area, population, boroughs) {
  this.boroughs = boroughs;
  Region.apply(this, arguments);
}

City.prototype = Object.create(Region.prototype);
City.prototype.constructor = City;
City.prototype.about = function () {
  //Region.prototype.about.apply(this);
  alert(
    `Райони - ${this.boroughs}, регіон - ${this.name}: ${this.area} - ${this.population}`
  );
};

let ukraine = new Country("Київська область", "Троєщіна", "456211", "Київ");
let kharkiv = new City("Харківська область", "Золочів", "100000", [
  "Індустріальний",
  "Київський",
  "Неми́шлянський",
  "Новобаварський",
  "Основ'янський",
  "Салтівський",
  "Слобідський",
  "Холодногірський",
  "Шевченківський",
]);
ukraine.about();
kharkiv.about();
