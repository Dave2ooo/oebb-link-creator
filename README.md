Visit the Link Creator here: [ÖBB Link Creator](https://dave2ooo.github.io/oebb-link-creator/)

# Introduction
This tool helps you to create a URL that shows the departure times of your public transformation station.

![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/d43cae57-fe9c-4e17-a149-74c17a507724)

The monitor is provided by the ÖBB, but getting the right parateters is quite tedious and barely documented. 

With this [Link Creator](https://dave2ooo.github.io/oebb-link-creator/), you can easily choose your departure station, destination station, means of transportation and more.

# Sarch mode
To search for a station there are three options available
## Search Train Stations
![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/1ee9cee8-cd25-469c-9e2c-f171049fea69)

This method uses a dataset of all Austrian **train stations**. If you cannot find your desired station, use the other search options described below.

## Search all Stations
![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/46aa051a-f5c2-4206-b17a-3e8346106065)

This method uses [Scotty](https://fahrplan.oebb.at/bin/stboard.exe/en?protocol=https:&) in the background.
Unfortunately, Scotty does not allow Cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).
So, to use this method, CORS must be disabled.
In Chrome this [**CORS Unblock**](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) extension works great.


## Search all Stations (Scotty)
Alternatively to the previous method, you can use this manual fallback.

Open [Scotty](https://fahrplan.oebb.at/bin/stboard.exe/en?protocol=https:&)
1. Enter your desired station
2. Press **Display inforation**
3. Press **View \<HTML\> sourcecode**
4. Copy the **evaId**

![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/b4ec7a27-8210-4ac2-990b-14cb692d5a0b)

5. Enter the **evaId** into the **Station ID** textbox

![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/734da7f9-cd2b-470d-8953-61500cc76319)


# Further Help
If you have any questions, find any bugs of have ideas for improvement, please don't hesitate to create an [issue](https://github.com/Dave2ooo/oebb-link-creator/issues/new).
