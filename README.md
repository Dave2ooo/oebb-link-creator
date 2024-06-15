Visit the Link Creator here -> https://dave2ooo.github.io/oebb-link-creator/

# Introduction
This tool helps you to create a URL that shows the departure and arrival times of your selected public transformation station.
![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/d43cae57-fe9c-4e17-a149-74c17a507724)


# Sarch mode
To search for a station there are three methods available
## Search Train Stations
![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/1ee9cee8-cd25-469c-9e2c-f171049fea69)

This method uses a dataset of all Austrian train stations. If you cannot find your desired station use the other search methods.

## Search all Stations
![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/46aa051a-f5c2-4206-b17a-3e8346106065)

This method uses [Scotty](https://fahrplan.oebb.at/bin/stboard.exe/en?protocol=https:&) in the background.
Unfortunately, Scotty does not allow Cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).
So, to use this method, CORS must be disabled.
In Chrome this [**CORS Unblock**](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) extension works great.


## Search all Stations (Scotty)
If the previous method does not work you can use this manual fallback.

Open [Scotty](https://fahrplan.oebb.at/bin/stboard.exe/en?protocol=https:&)
1. Enter your desired station
2. Press **Display inforation**
3. Press **View \<HTML\> sourcecode**
4. Copy the **evaId**

![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/b4ec7a27-8210-4ac2-990b-14cb692d5a0b)

5. Enter the **evaId** into the **Station ID** textbox

![image](https://github.com/Dave2ooo/oebb-link-creator/assets/71500391/3e0453ac-5d77-46b1-9e9b-6ce0581234bb)

# Further Help
If you have any questions, find any bugs of have ideas for improvement, please don't hesitate to create an [issue](https://github.com/Dave2ooo/oebb-link-creator/issues/new).
