const React = require('react');
const UnorderedList = require('./UnorderedList');
const PlanetForm = require('./PlanetForm');
const Iframe = require("react-iframe");

/* the main page for the index route of this app */

// Entry IDs for each planet model
const planetID =
{
  mercury : "e0b9f7fa-50dd-4460-b569-6abee667b42e",
  venus : "493c9a5f-2883-4fe5-b50c-cf3971fe8422",
  earth : "e84b40f5-376b-44ee-b060-781d1e0eb101",
  mars : "884f5167-6dbf-404f-a756-6b4ce9c3adb9",
  jupiter : "3fcf2e83-e097-4bd0-9bd7-da6e3881295a",
  saturn : "7dc60358-aa22-4ba0-b8dc-2bf2352ccb6a",
  uranus : "48c44ff1-467d-45a3-b685-2b66f902ff8e",
  neptune : "c1cff440-5e05-47b3-be2a-4b944b6bdd17"
}

// Landing Page
const PlanetDemo = function() {
  const [planet, setPlanet] = React.useState("earth");

  return (
    <div>
      <PlanetForm planetID={planetID.mercury} />
    </div>
  );
}

module.exports = PlanetDemo;