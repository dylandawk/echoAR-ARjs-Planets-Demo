const React = require("react");

const PlanetForm = function(props) {

    // planet state
    const [planet, setPlanet] = React.useState("Earth");

    // update input field 
    const updatePlanet = (event) => {
        setPlanet(event.target.value)
    }

    const changeIFormURL = (id) =>{
        let url = "https://console.echoAR.xyz/arjs?key=small-resonance-2293&entry=" + id;
        console.log(url);
        // grab the iframe element from the html
        let iframe = document.getElementById("iframe");
        // change iframe source if valid planet is entered
        if(id != "") iframe.src = url;
    }

    // When submit button (or enter) is pressed
    const handleSubmit = (event) => {
        console.log(`The planet submitted is : ${planet}`);
        //console.log(findPlanetID(planet.toLowerCase()));
        changeIFormURL(findPlanetID(planet.toLowerCase()));
        event.preventDefault();
    }

    

    const findPlanetID = (planetName) => {
        let planetID = "";

        // check submitted form for entered planet
        switch(planetName){
            case "mercury":
                planetID = props.IDs.mercury;
                break;
            case "venus":
                planetID = props.IDs.venus;
            case "earth":
                planetID = props.IDs.earth;
                break;
            case "mars":
                planetID = props.IDs.mars;
                break;
            case "jupiter":
                planetID = props.IDs.jupiter;
                break;
            case "saturn":
                planetID = props.IDs.saturn;
                break;
            case "uranus":
                planetID = props.IDs.uranus;
                break;
            case "neptune":
                planetID = props.IDs.neptune;
                break;
            case "pluto":
                console.log("I'm sorry, Pluto is no longer considered a planet");
                break;
            default:
                console.log("Not a planet in our solar system");
                break;
        }

        // return the entry ID associated with planet model
        return planetID;

    }


    return(
            <form onSubmit={handleSubmit}>
                <label> Enter a planet: 
                    <input
                        type="text" 
                        id="text" 
                        placeholder="e.g Earth"
                        value={planet}
                        onChange={updatePlanet}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>       
    );
    
}

module.exports = PlanetForm;

