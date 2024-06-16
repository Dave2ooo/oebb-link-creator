// https://fahrplan.oebb.at/bin/ajax-getstop.exe/en?REQ0JourneyStopsS0A=&REQ0JourneyStopsB=12&S=bad%20er?&js=true&

// https://fahrplan.oebb.at/bin/query.exe/en?

// import MiniSearch from "minisearch";
// const MiniSearch = require("minisearch");

const ELEM_TOGGLE_CHECKBOX = document.querySelector(".toggle-checkbox");
const ELEM_TOGGLE_DESCRIPTION = document.querySelector(".toggle-description");

const ELEM_DEPARTURE_STATION_SEARCH = document.getElementById("input-departure-station-search");
const ELEM_DESTINATION_STATION_SEARCH = document.getElementById("input-destination-station-search");

const ELEM_DEPARTURE_SUGGESTIONS_CONTAINER = document.getElementById("departure-suggestions");
const ELEM_DESTINATION_SUGGESTIONS_CONTAINER = document.getElementById("destination-suggestions");

let ELEM_DEPARTURE_SUGGESTIONS_LIST = [];
let ELEM_DESTINATION_SUGGESTIONS_LIST = [];

let ELEM_SUGGESTIONS_LIST = [ELEM_DEPARTURE_SUGGESTIONS_LIST, ELEM_DESTINATION_SUGGESTIONS_LIST];

const ELEM_INPUT_DEPARTURE_STATION_ID = document.getElementById("input-departure-station-id");
const ELEM_INPUT_DESTINATION_STATION_ID = document.getElementById("input-destination-station-id");

const ELEM_INPUT_ADDITIONAL_TIME = document.getElementById("input-additional-time");
const ELEM_INPUT_NUMBER_JOURNEYS = document.getElementById("input-number-of-journeys");

const ELEM_RADIO_DEPARTURE = document.getElementById("departure");
const ELEM_RADIO_ARRIVAL = document.getElementById("arrival");

const ELEM_RADIO_GERMAN = document.getElementById("german");
const ELEM_RADIO_ENGLISH = document.getElementById("english");

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

const ELEM_CODE_URL = document.getElementById("code-url");

let outputString;

let busy = false;
let queue = false;

const miniSearch = new MiniSearch({
  fields: ["Name"], // fields to index for full-text search
  storeFields: ["Name", "Value"], // fields to return with search results
});
miniSearch.addAll(StopPlaces);

window.addEventListener("load", () => {
  // searchStation("input-departure-station-search", "select-departure-station");
});

function selectListentry(selectedEntryIndex, suggestionsList, inputStationID) {
  for (let i = 0; i < ELEM_SUGGESTIONS_LIST[suggestionsList].length; i++) {
    ELEM_SUGGESTIONS_LIST[suggestionsList][i].classList.remove("background-selected");
  }
  ELEM_SUGGESTIONS_LIST[suggestionsList][selectedEntryIndex].classList.add("background-selected");
  inputStationID.value = ELEM_SUGGESTIONS_LIST[suggestionsList][selectedEntryIndex].id;
  generateURL();
}

// --------------    Functions    --------------
function searchStation(dep_arr) {
  let inputStationSearch;
  let selectStation;
  let inputStationID;
  let suggestionsList;

  if (dep_arr == "dep") {
    inputStationSearch = ELEM_DEPARTURE_STATION_SEARCH;
    selectStation = ELEM_DEPARTURE_SUGGESTIONS_CONTAINER;
    suggestionsList = 0;
    inputStationID = ELEM_INPUT_DEPARTURE_STATION_ID;
  } else if (dep_arr == "arr") {
    inputStationSearch = ELEM_DESTINATION_STATION_SEARCH;
    selectStation = ELEM_DESTINATION_SUGGESTIONS_CONTAINER;
    suggestionsList = 1;
    inputStationID = ELEM_INPUT_DESTINATION_STATION_ID;
  }

  if (ELEM_TOGGLE_CHECKBOX.checked) {
    searchStationFetch(inputStationSearch, selectStation, suggestionsList, inputStationID);
  } else {
    searchStationLocal(inputStationSearch, selectStation, suggestionsList, inputStationID);
  }
}

function searchStationLocal(inputStationSearch, selectStation, suggestionsList, inputStationID) {
  const searchText = inputStationSearch.value;
  const results = miniSearch.search(searchText, { prefix: true, fuzzy: 0.2 });
  clearList(selectStation, suggestionsList);
  if (results.length) {
    fillList(selectStation, convertLocal(results), suggestionsList, inputStationID);
  } else {
    addText(selectStation, "No station found");
  }
}

function searchStationFetch(inputStationSearch, selectStation, suggestionsList, inputStationID) {
  const searchText = inputStationSearch.value;
  if (searchText.length < 2) return;

  if (busy) {
    queue = true;
  } else {
    clearList(selectStation, suggestionsList);
    addText(selectStation, "searching...");
    busy = true;
    const searchTextMod = searchText.replace(" ", "%20");
    const searchURL =
      "https://fahrplan.oebb.at/bin/ajax-getstop.exe/en?REQ0JourneyStopsS0A=&REQ0JourneyStopsB=20&S=" +
      searchTextMod +
      "?&js=true&";

    fetch(searchURL)
      .then(function (response) {
        // console.log("then response: " + response);
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

        data = data.replace("SLs.sls=", "");
        data = data.replace(";SLs.showSuggestion();", "");

        let outputJSON = JSON.parse(data.toString("utf8"));
        // console.log(outputJSON);

        clearList(selectStation, suggestionsList);
        fillList(selectStation, convertFetched(outputJSON), suggestionsList, inputStationID);

        busy = false;
        if (queue) {
          queue = false;
          searchStationFetch(inputStationSearch, selectStation, suggestionsList, inputStationID);
        }
      })
      .catch(function (response) {
        // "Not Found"
        clearList(selectStation, suggestionsList);
        addText(selectStation, response);
        busy = false;
      });
  }
}

function convertLocal(data) {
  let list = new Array();
  for (let i = 0; i < data.length; i++) {
    let item = { name: data[i].Name, id: data[i].Value };
    list.push(item);
  }
  return list;
}
function convertFetched(outputJSON) {
  const STATIONS_LIST = outputJSON.suggestions;
  let list = new Array();
  for (let i = 0; i < STATIONS_LIST.length; i++) {
    let item = { name: STATIONS_LIST[i].value, id: STATIONS_LIST[i].extId.slice(2) };
    list.push(item);
  }
  return list;
}

function fillList(selectStation, data, suggestionsList, inputStationID) {
  for (let i = 0; i < data.length; i++) {
    const ELEM_LISTENTRY = document.createElement("div");
    ELEM_SUGGESTIONS_LIST[suggestionsList][i] = ELEM_LISTENTRY;
    ELEM_LISTENTRY.innerText = data[i].name;
    ELEM_LISTENTRY.classList.add("listentry");
    ELEM_LISTENTRY.id = data[i].id;
    ELEM_LISTENTRY.onclick = function () {
      selectListentry(i, suggestionsList, inputStationID);
    };
    selectStation.appendChild(ELEM_LISTENTRY);
  }
}

function clearList(selectStation, suggestionsList) {
  ELEM_SUGGESTIONS_LIST[suggestionsList] = [];
  while (selectStation.firstChild) {
    selectStation.removeChild(selectStation.firstChild);
  }
}

function addText(selectStation, text) {
  const ELEM_LISTENTRY = document.createElement("div");
  ELEM_LISTENTRY.innerText = text;
  ELEM_LISTENTRY.classList.add("listentry");
  selectStation.appendChild(ELEM_LISTENTRY);
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

  // Language
  let urlParameterLanguage;
  if (ELEM_RADIO_ENGLISH.checked) {
    urlParameterLanguage = "en";
  } else {
    urlParameterLanguage = "de";
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
    "https://fahrplan.oebb.at/bin/stboard.exe/" +
    urlParameterLanguage +
    "?L=vs_scotty.vs_liveticker&start=yes&eqstops=true" +
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
  // ELEM_CODE_URL.innerText = urlScotty;
  // ELEM_ANCHOR_URL.href = urlScotty;
}

function refreshIframe() {
  ELEM_IFRAME_PREVIEW.src = ELEM_IFRAME_PREVIEW.src;
}

async function copyURLToClipboard() {
  try {
    await navigator.clipboard.writeText(ELEM_INPUT_URL.value);
    console.log("Content copied to clipboard");
    /* Resolved - text copied to clipboard successfully */
  } catch (err) {
    console.error("Failed to copy: ", err);
    /* Rejected - text failed to copy to the clipboard */
  }
}

function toggleSearchMode() {
  if (ELEM_TOGGLE_CHECKBOX.checked) {
    ELEM_TOGGLE_DESCRIPTION.classList.remove("display-none");
  } else {
    ELEM_TOGGLE_DESCRIPTION.classList.add("display-none");
  }
}

function clearDestinationID() {
  ELEM_INPUT_DESTINATION_STATION_ID.value = "";
  generateURL();
}