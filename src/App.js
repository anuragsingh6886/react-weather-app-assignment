import './App.css';
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const App = () => {

  const [data, setData] = useState([]);
  const [cityname, setCityName] = useState("london");
  const [search, setSearch] = useState('');

  useEffect(() =>{
    fetch(`http://api.weatherstack.com/current?access_key=c3cf0d1a7c8d31eed871bba220fb7055&query=${cityname}`)
    .then((result) => result.json())
    .then((result) =>{
      setData(result)
      console.log(data)
    })
  }, [cityname]);

  return (
    <div className="App">
      <div className='ContentCard'>
        <form className='search_city'>
          <lable>Find weather report of your city: </lable>
          <input type="text" placeholder='Search here...'
            onChange={(event => setSearch(event.target.value))}/>
          <Button size="small" color="secondary" onClick={(() => setCityName(search))}>Search</Button>
        </form>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {data.location.country}
            </Typography> 
             <Typography variant="h6" component="div">
              {data.location.name}, {data.location.region}
            </Typography> 
             <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Date & Time: {data.location.localtime} | TimeZone: {data.location.timezone_id}
            </Typography> 
            <Typography variant="body2">
          <Typography variant="h4" component="div">
              {data.current.temperature} <sup sx={{}}>℃</sup> 
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Wind Speed: {data.current.wind_speed}
            </Typography> 
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Visibility: {data.current.visibility}
            </Typography> 
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Humidity: {data.current.humidity} || Time: {data.current.observation_time}
            </Typography> 
            </Typography>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

export default App;
