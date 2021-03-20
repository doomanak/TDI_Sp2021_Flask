# Dooman Akbarian TDI Capstone Project

## Significance and Aim

Per an article in USA Today, a Global Business Travel Association study late in 2014 found that air travel mishaps — which include delayed and canceled flights — took nearly 11 hours to resolve and $1,154 in missed work and out-of-pocket expenses. For 15.3 million flights studied by Carlson Wagonlit Travel in 2013, the financial impact of delays was $245 million in lost work time.
If the risk of a flight delay can be added to the flight choices at the time of purchase, this information can help to save millions of dollars in lost work hours. Therefore, the purpose of this project is to develop a machine learning based model to estimate the flight delay in the U.S. 


## Data sets

In this project, two publicly available data sets were analyzed. First, Airline On-Time Performance Data provided by Bureau of Transportation Statistics (BTS), and second, weather data set provided by National Oceanic and Atmospheric Administration. The Airline On-Time Performance Data includes information about on-time arrival and departure data by month and year, by carrier and by origin and destination airport. It also includes scheduled and actual departure and arrival times, canceled and diverted flights, causes of delay and cancellation, air time, airline carrier, and non-stop distance. Also, weather data provided by National Oceanic and Atmospheric Administration. This dataset includes information about location, temperature, humidity, wind speeds, precipitation and weather events. 

## Visulalization Dashbord and App Development 

A tableau [dashboard](https://public.tableau.com/profile/dooman.akbarian#!/vizhome/FlightDelayDashBoard_16140271131980/DelayDashBoard) is deployed to help the user understand the impact of factors such as airline and airports on flight delay in the US. 
Furthermore, A random forest model was developed using PySpark library in python that can estimate the flight delay based on origin/desination airports, airline and deprarture/arrival date and time. Finally, a flask [app](dooman-data-incubator.herokuapp.com) was developed and deployed on Heroku that can estimate the flight delay time based on the entered information by the user. 
