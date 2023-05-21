import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';
import TenantPreferenceLocation from '../tenantPreferenceLocation/TenantPreferenceLocation';
import Slider from "@mui/material/Slider";

// Geocode
import Geocode from "react-geocode";
import { Button } from '@mui/material';

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyD55wvFzTiDWmCy-c9hskQ_eZ9i4ZwgM8I");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");

// Enable or disable logs. Its optional.
Geocode.enableDebug();


//End Geocode


// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const GOOGLE_MAPS_API_KEY = 'AIzaSyD55wvFzTiDWmCy-c9hskQ_eZ9i4ZwgM8I';

function loadScript(src, position, id) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const autocompleteService = { current: null };

export default function TenantPreferenceLocationSearchInput() {

    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);
    const [theLat, setTheLat] = React.useState(48.42604439999999)
    const [theLng, setTheLng] = React.useState(-123.3697281)
    // const [radius, setRadius] = React.useState(1000)
    const [radius, setRadius] = React.useState(25)
    const [loadMap, setLoadMap] = React.useState(false);

    const marks = [
        {
            value: 0,
            label: '0m',
        },
        {
            value: 20,
            label: '20m',
        },
        {
            value: 37,
            label: '37m',
        },
        {
            value: 100,
            label: '100m',
        },
    ];

    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
                document.querySelector('head'),
                'google-maps',
            );
        }

        loaded.current = true;
    }

    const fetch = React.useMemo(
        () =>
            debounce((request, callback) => {
                autocompleteService.current.getPlacePredictions(request, callback);
            }, 400),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.current && window.google) {
            autocompleteService.current =
                new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });


        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    return (
        <>
            <Autocomplete
                id="google-map-demo"
                sx={{ width: 300 }}
                getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.description
                }
                filterOptions={(x) => x}
                options={options}
                autoComplete
                includeInputInList
                className='mx-auto mb-5'
                filterSelectedOptions
                value={value}
                noOptionsText="No locations"
                onChange={(event, newValue) => {
                    setOptions(newValue ? [newValue, ...options] : options);
                    setValue(newValue);

                    // * Get the value here on form submission
                    console.log("@_@", newValue.description)
                    // Get latitude & longitude from address.
                    Geocode.fromAddress(newValue.description).then(
                        (response) => {
                            const { lat, lng } = response.results[0].geometry.location;
                            console.log(lat, lng);
                            setTheLat(lat)
                            setTheLng(lng)
                        },
                        (error) => {
                            console.error(error);
                        }
                    );


                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                    <TextField {...params} label="Add a location" fullWidth />
                )}
                renderOption={(props, option) => {
                    const matches =
                        option.structured_formatting.main_text_matched_substrings || [];

                    const parts = parse(
                        option.structured_formatting.main_text,
                        matches.map((match) => [match.offset, match.offset + match.length]),
                    );

                    return (
                        <li {...props}>
                            <Grid container alignItems="center">
                                <Grid item sx={{ display: 'flex', width: 44 }}>
                                    <LocationOnIcon sx={{ color: 'text.secondary' }} />
                                </Grid>
                                <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                    {parts.map((part, index) => (
                                        <Box
                                            key={index}
                                            component="span"
                                            sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                                        >
                                            {part.text}
                                        </Box>
                                    ))}

                                    <Typography variant="body2" color="text.secondary">
                                        {option.structured_formatting.secondary_text}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </li>
                    );
                }}
            />

            {loadMap ?
                <TenantPreferenceLocation radius={radius} lat={theLat} lng={theLng} />
                : <h1 className='text-black text-sm text-center'>"To search the map enter your location and radius and hit search"</h1>}
            {/* Improvement: Implement a spinning loading animation instead of empty string */}



            <div className='flex justify-center gap-10'>

                <Slider
                    onChange={(e) => {
                        // setRadius(e.target.value)
                        setRadius(e.target.value)
                    }}
                    defaultValue={radius}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    marks={marks}
                    style={{ width: "60%" }}
                    className='!flex-initial'

                />

                <Button onClick={() => {
                    setLoadMap(false)
                    setTimeout(() => {
                        setLoadMap(true)
                    }, 500)
                }}
                    className='!flex-initial ml-10'
                > Search </Button>
            </div>
        </>
    );

}