// https://fahrplan.oebb.at/bin/ajax-getstop.exe/en?REQ0JourneyStopsS0A=&REQ0JourneyStopsB=12&S=bad%20er?&js=true&

// https://fahrplan.oebb.at/bin/query.exe/en?

const ELEM_DEPARTURE_STATION_SEARCH = document.getElementById("input-departure-station-search");

const ELEM_INPUT_DESTINATION_STATION_ID = document.getElementById("input-destination-station-id");
const ELEM_INPUT_DEPARTURE_STATION_ID = document.getElementById("input-departure-station-id");

const ELEM_INPUT_ADDITIONAL_TIME = document.getElementById("input-additional-time");
const ELEM_INPUT_NUMBER_JOURNEYS = document.getElementById("input-number-of-journeys");

const ELEM_RADIO_DEPARTURE = document.getElementById("departure");
const ELEM_RADIO_ARRIVAL = document.getElementById("arrival");

const ELEM_CHECKBOX_PRODUCTS_FILTER_0 = document.getElementById("products-filter-0");
const ELEM_CHECKBOX_PRODUCTS_FILTER_1 = document.getElementById("products-filter-1");
const ELEM_CHECKBOX_PRODUCTS_FILTER_2 = document.getElementById("products-filter-2");
const ELEM_CHECKBOX_PRODUCTS_FILTER_3 = document.getElementById("products-filter-3");
const ELEM_CHECKBOX_PRODUCTS_FILTER_4 = document.getElementById("products-filter-4");
const ELEM_CHECKBOX_PRODUCTS_FILTER_5 = document.getElementById("products-filter-5");
const ELEM_CHECKBOX_PRODUCTS_FILTER_6 = document.getElementById("products-filter-6");
const ELEM_CHECKBOX_PRODUCTS_FILTER_7 = document.getElementById("products-filter-7");
const ELEM_CHECKBOX_PRODUCTS_FILTER_8 = document.getElementById("products-filter-8");
const ELEM_CHECKBOX_PRODUCTS_FILTER_9 = document.getElementById("products-filter-9");
const ELEM_CHECKBOX_PRODUCTS_FILTER_10 = document.getElementById("products-filter-10");
const ELEM_CHECKBOX_PRODUCTS_FILTER_11 = document.getElementById("products-filter-11");
const ELEM_CHECKBOX_PRODUCTS_FILTER_12 = document.getElementById("products-filter-12");

const ELEM_CHECKBOX_PRODUCTS_FILTER_LIST = [
  ELEM_CHECKBOX_PRODUCTS_FILTER_0,
  ELEM_CHECKBOX_PRODUCTS_FILTER_1,
  ELEM_CHECKBOX_PRODUCTS_FILTER_2,
  ELEM_CHECKBOX_PRODUCTS_FILTER_3,
  ELEM_CHECKBOX_PRODUCTS_FILTER_4,
  ELEM_CHECKBOX_PRODUCTS_FILTER_5,
  ELEM_CHECKBOX_PRODUCTS_FILTER_6,
  ELEM_CHECKBOX_PRODUCTS_FILTER_7,
  ELEM_CHECKBOX_PRODUCTS_FILTER_8,
  ELEM_CHECKBOX_PRODUCTS_FILTER_9,
  ELEM_CHECKBOX_PRODUCTS_FILTER_10,
  ELEM_CHECKBOX_PRODUCTS_FILTER_11,
  ELEM_CHECKBOX_PRODUCTS_FILTER_12,
];

const ELEM_INPUT_URL = document.getElementById("input-url");
const ELEM_IFRAME_PREVIEW = document.getElementById("iframe-preview");
const ELEM_ANCHOR_URL = document.getElementById("anchor-url");

let outputString;

let busy = false;
let queue = false;

window.addEventListener("load", () => {
  // searchStation("input-departure-station-search", "select-departure-station");
});

function searchStation(inputStationSearch, selectStation) {
  const searchText = document.getElementById(inputStationSearch).value;
  if (searchText.length < 2) return;

  if (busy) {
    queue = true;
  } else {
    clearList(selectStation);
    addText(selectStation, "searching...");
    busy = true;
    const searchTextMod = searchText.replace(" ", "%20");
    const searchURL =
      "https://fahrplan.oebb.at/bin/ajax-getstop.exe/en?REQ0JourneyStopsS0A=&REQ0JourneyStopsB=20&S=" +
      searchTextMod +
      "?&js=true&";

    fetch(searchURL)
      .then(function (response) {
        console.log("then response: " + response);
        switch (response.status) {
          // status "OK"
          case 200:
            // return response.text();
            return response.arrayBuffer();
          // status "Not Found"
          case 404:
            throw response;
        }
      })
      .then(function (data) {
        let decoder = new TextDecoder("iso-8859-1");
        data = decoder.decode(data);

        // console.log("this is my text: " + data);

        data = data.replace("SLs.sls=", "");
        data = data.replace(";SLs.showSuggestion();", "");

        let outputJSON = JSON.parse(data.toString("utf8"));

        clearList(selectStation);
        fillList(selectStation, outputJSON);

        busy = false;
        if (queue) {
          queue = false;
          searchStation(inputStationSearch, selectStation);
        }
      })
      .catch(function (response) {
        // "Not Found"
        console.log("catch response: " + response);
        clearList(selectStation);
        addText(selectStation, response);
        busy = false;
      });
  }
}

function fillList(selectStation, outputJSON) {
  const ELEM_SELECT_STATION = document.getElementById(selectStation);
  const STATIONS_LIST = outputJSON.suggestions;
  for (let i = 0; i < STATIONS_LIST.length; i++) {
    const newOption = document.createElement("option");
    const optionText = document.createTextNode(STATIONS_LIST[i].value);
    const extId = STATIONS_LIST[i].extId.slice(2);
    newOption.appendChild(optionText);
    newOption.setAttribute("value", extId);
    ELEM_SELECT_STATION.appendChild(newOption);
  }
}

function clearList(selectStation) {
  const ELEM_SELECT_STATION = document.getElementById(selectStation);
  while (ELEM_SELECT_STATION.options.length > 0) {
    ELEM_SELECT_STATION.remove(0);
  }
}

function addText(selectStation, text) {
  const ELEM_SELECT_STATION = document.getElementById(selectStation);
  const newOption = document.createElement("option");
  const optionText = document.createTextNode(text);
  newOption.appendChild(optionText);
  ELEM_SELECT_STATION.appendChild(newOption);
}

function takeOverID(selectStation, inputStationID) {
  const ELEM_SELECT_STATION = document.getElementById(selectStation);
  const ELEM_INPUT_STATION_ID = document.getElementById(inputStationID);
  ELEM_INPUT_STATION_ID.value = ELEM_SELECT_STATION.value;

  generateURL();
}

function generateURL() {
  /*
  const url_scotty =
    "https://fahrplan.oebb.at/bin/stboard.exe/dn?L=vs_scotty.vs_liveticker&boardType=dep&tickerID=dep&start=yes&eqstops=true" +
    "&evaId=" +
    departure_station +
    "&dirInput=" +
    destination_station +
    "&showJourneys=" +
    set_num_journeys +
    "&maxJourneys=" +
    set_num_journeys +
    "&additionalTime=" +
    set_additional_time +
    "&productsFilter=" +
    products_filter +
    "&outputMode=tickerDataOnly";
*/
  // Departure Station
  const urlParamDepartureStation = ELEM_INPUT_DEPARTURE_STATION_ID.value;

  // Destination Station
  const urlParamDestinationStation = ELEM_INPUT_DESTINATION_STATION_ID.value;

  // Additional Time
  const urlParamAdditionalTime = ELEM_INPUT_ADDITIONAL_TIME.value;

  // Number of displayed journeys
  const urlParamNumberJourneys = ELEM_INPUT_NUMBER_JOURNEYS.value;

  // Departure - Arrival
  let urlParamBoardType;
  if (ELEM_RADIO_DEPARTURE.checked) {
    urlParamBoardType = "dep";
  } else {
    urlParamBoardType = "arr";
  }

  // Train selection
  let urlParamTrainSelection = "";
  for (let i = ELEM_CHECKBOX_PRODUCTS_FILTER_LIST.length - 1; i >= 0; i--) {
    if (ELEM_CHECKBOX_PRODUCTS_FILTER_LIST[i].checked) {
      urlParamTrainSelection = urlParamTrainSelection + "1";
    } else {
      urlParamTrainSelection = urlParamTrainSelection + "0";
    }
  }

  const urlScotty =
    "https://fahrplan.oebb.at/bin/stboard.exe/dn?L=vs_scotty.vs_liveticker&start=yes&eqstops=true" +
    "&evaId=" +
    urlParamDepartureStation +
    "&dirInput=" +
    urlParamDestinationStation +
    "&showJourneys=" +
    urlParamNumberJourneys +
    "&maxJourneys=" +
    urlParamNumberJourneys +
    "&boardType=" +
    urlParamBoardType +
    "&tickerID=" +
    urlParamBoardType +
    "&additionalTime=" +
    urlParamAdditionalTime +
    "&productsFilter=" +
    urlParamTrainSelection;

  ELEM_INPUT_URL.value = urlScotty;
  ELEM_IFRAME_PREVIEW.src = urlScotty;
  // ELEM_ANCHOR_URL.href = urlScotty;
}

function copyURLToClipboard() {
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(ELEM_INPUT_URL.value);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
}
