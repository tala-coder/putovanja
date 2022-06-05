import React, { useState } from "react";
import "../styles/App.css";
import { ComposableMap, Geographies, Geography, Marker, Annotation, ZoomableGroup, Sphere } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
const markers = [
    { markerOffset: -15, name: "Sau Paulo", coordinates: [-58.3816, -34.6037] },
    { markerOffset: -15, name: "Melbourne", coordinates: [144.963058, -37.813629] },
    { markerOffset: 25, name: "Dhaka", coordinates: [90.412621, 23.810331] },
    { markerOffset: 25, name: "San Francisco", coordinates: [-122.419418, 37.774929] }]


const Maps = () => {
    const [content, setContent] = useState("")
    return (
        <> 
        <ReactTooltip> {content} </ReactTooltip>
        <div > 
            <ComposableMap data-tip="">
                {/* <Sphere stroke="#FF5533" strokeWidth={2} /> */}
                <ZoomableGroup zoom={1}>  {" "}
                    <Geographies geography={geoUrl}>
                        {({ geographies }) => geographies.map(geo => (
                            <Geography key={geo.rsmKey} geography={geo}
                                onMouseEnter={() => {
                                    const { NAME } = geo.properties;
                                    console.log('{ NAME } = geo.properties;', NAME); 
                                    setContent(`${NAME}`);
                                }}
                                onMouseLeave={() => {
                                    setContent("");
                                }}
                                style={{
                                    hover: {
                                        fill: "#F53", outline: "none"
                                    },
                                }} 
                                /> 
                        ))
                        }
                    </Geographies>
                    {markers.map(({ name, coordinates, markerOffset }) => (
                        <Marker key={name} coordinates={coordinates}>
                            <circle r={6} fill="#F00" stroke="#fff" strokeWidth={2} />
                            <text textAnchor="middle" y={markerOffset} style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}>
                                {name}
                            </text>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </div >
        </>
    )
}

export default Maps