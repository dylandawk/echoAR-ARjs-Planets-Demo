const React = require("react");

function handleSubmit (){
    console.log()
}

function PlanetForm(props) {
    const [value, setValue] = React.useState(props.planetID);
    return(
        <div className="demo">
            <form onSubmit={handleSubmit}>
                <label> Enter a planet: 
                    <input
                        type="text" 
                        id="text" 
                        placeholder="e.g Earth"
                        value={props.planetID}
                        onChange={() => setValue(s)}
                    />
                </label>
            </form>
            <input type="submit" value="Submit" />
        </div>
    );
    
}

module.exports = PlanetForm;

