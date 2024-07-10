Visit the Link Creator here: [ÖBB Link Creator](https://dave2ooo.github.io/oebb-link-creator/html/index.html)

# Introduction
This webpage helps you to create a URL that shows the departure times of your public transformation station.

![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/d43cae57-fe9c-4e17-a149-74c17a507724)

The monitor is provided by the ÖBB, but getting the right parateters is quite tedious and barely documented. 

With this [Link Creator](https://dave2ooo.github.io/oebb-link-creator/), you can easily choose your departure station, destination station, means of transportation and more.

## Parameters

### Departure Station
This is the station for which all the connections are displayed.

### Destination Station
If specified, only shows connections from the departure station to the destination station.

### Additional time
Igrores the connections that are less than X minutes from now.

## Search mode
There are two options for searching a station.

### All stations
This will call [Scotty](https://fahrplan.oebb.at/bin/stboard.exe/en?protocol=https:&) and displays the response.

### Train stations
This will search [StopPlaces.js](https://github.com/Dave2ooo/oebb-link-creator/blob/main/StopPlaces.js) which was provied by the [ÖBB](https://data.oebb.at/de/datensaetze~netex-geodaten~).

# Further Help
If you have any questions, find any bugs of have ideas for improvement, please don't hesitate to create an [issue](https://github.com/Dave2ooo/oebb-link-creator/issues/new).
