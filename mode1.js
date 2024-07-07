// https://fahrplan.oebb.at/bin/ajax-getstop.exe/en?REQ0JourneyStopsS0A=&REQ0JourneyStopsB=12&S=bad%20er?&js=true&

// https://fahrplan.oebb.at/bin/query.exe/en?

// import MiniSearch from "minisearch";
// const MiniSearch = require("minisearch");

// #region Define global variables */
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

const ELEM_INPUT_FONT_SIZE = document.getElementById("input-font-size");
const ELEM_INPUT_UPDATE_INTERVAL = document.getElementById("input-update-interval");

const ELEM_CHECKBOX_SHOW_CLOCK = document.getElementById("show-clock");
const ELEM_CHECKBOX_SHOW_HEADER = document.getElementById("show-header");
const ELEM_CHECKBOX_SHOW_LINE = document.getElementById("show-line");
const ELEM_CHECKBOX_SHOW_DIRECTION = document.getElementById("show-direction");
const ELEM_CHECKBOX_SHOW_PLATFORM = document.getElementById("show-platform");

const ELEM_INPUT_URL = document.getElementById("input-url");
const ELEM_IFRAME_PREVIEW = document.getElementById("iframe-preview");
const ELEM_ANCHOR_URL = document.getElementById("anchor-url");

const ELEM_CODE_URL = document.getElementById("code-url");

const ELEM_LOADING_SPINNER = document.querySelector(".lds-dual-ring");

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

// global variable where fetched station list is stored
// DO NOT RENAME this variable, since it is used by the response of fahrplan.oebb.at
let SLs = {
  // result of fetch
  // DO NOT RENAME this variable, since it is used by the response of fahrplan.oebb.at
  sls: [],

  // callback when fetch is successful
  showSuggestion: handleSuccessfulStationFetch,

  // stored parameters
  inputStationSearch: null,
  selectStation: null,
  suggestionsList: null,
  inputStationID: null,
};

function selectListentry(selectedEntryIndex, suggestionsList, inputStationID) {
  for (let i = 0; i < ELEM_SUGGESTIONS_LIST[suggestionsList].length; i++) {
    ELEM_SUGGESTIONS_LIST[suggestionsList][i].classList.remove("background-selected");
  }
  ELEM_SUGGESTIONS_LIST[suggestionsList][selectedEntryIndex].classList.add("background-selected");
  inputStationID.value = ELEM_SUGGESTIONS_LIST[suggestionsList][selectedEntryIndex].id;
  generateURL();
}
// #endregion

// #region Functions
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
    // save params for later use
    SLs.inputStationSearch = inputStationSearch;
    SLs.selectStation = selectStation;
    SLs.suggestionsList = suggestionsList;
    SLs.inputStationID = inputStationID;

    // remove old script tags
    const oldScripts = document.querySelector("script[data-id='scotty_jsonp']");
    if (oldScripts) {
      oldScripts.remove();
    }

    clearList(selectStation, suggestionsList);
    addText(selectStation, "searching...");
    busy = true;
    const searchTextMod = searchText.replace(" ", "%20");
    const searchURL =
      "https://fahrplan.oebb.at/bin/ajax-getstop.exe/en?REQ0JourneyStopsS0A=&REQ0JourneyStopsB=20&S=" +
      searchTextMod +
      "?&js=true&";

    let scriptElt = document.createElement("script");
    scriptElt.setAttribute("data-id", "scotty_jsonp");
    scriptElt.src = searchURL;
    scriptElt.onerror = () => {
      // "Not Found"
      clearList(selectStation, suggestionsList);
      addText(selectStation, response);
      busy = false;
    };
    document.body.appendChild(scriptElt);
  }
}

function handleSuccessfulStationFetch() {
  let selectStation = SLs.selectStation;
  let suggestionsList = SLs.suggestionsList;
  let inputStationID = SLs.inputStationID;
  let inputStationSearch = SLs.inputStationSearch;

  clearList(selectStation, suggestionsList);
  fillList(selectStation, convertFetched(SLs.sls), suggestionsList, inputStationID);

  busy = false;
  if (queue) {
    queue = false;
    searchStationFetch(inputStationSearch, selectStation, suggestionsList, inputStationID);
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

  const ELEM_CHECKBOX_SHOW_HEADER = document.getElementById("show-header");
  const ELEM_CHECKBOX_SHOW_LINE = document.getElementById("show-line");
  const ELEM_CHECKBOX_SHOW_DIRECTION = document.getElementById("show-direction");
  const ELEM_CHECKBOX_SHOW_PLATFORM = document.getElementById("show-platform");

  // Update interval
  const urlParamUpdateInterval = ELEM_INPUT_UPDATE_INTERVAL.value;

  // Font size
  const urlParamFontSize = ELEM_INPUT_FONT_SIZE.value;

  // Show Clock
  let urlParamShowClock = false;
  if (ELEM_CHECKBOX_SHOW_CLOCK.checked) urlParamShowClock = true;

  // Show Header
  let urlParamShowHeader = false;
  if (ELEM_CHECKBOX_SHOW_HEADER.checked) urlParamShowHeader = true;

  // Show Line
  let urlParamShowLine = false;
  if (ELEM_CHECKBOX_SHOW_LINE.checked) urlParamShowLine = true;

  // Show Direction
  let urlParamShowDirection = false;
  if (ELEM_CHECKBOX_SHOW_DIRECTION.checked) urlParamShowDirection = true;

  // Show Platform
  let urlParamShowPlatform = false;
  if (ELEM_CHECKBOX_SHOW_PLATFORM.checked) urlParamShowPlatform = true;

  const urlScotty =
    "https://dave2ooo.github.io/oebb-monitor-v2/?departure_station=" +
    urlParamDepartureStation +
    "&destination_station=" +
    urlParamDestinationStation +
    "&additional_time=" +
    urlParamAdditionalTime +
    "&num_journeys=" +
    urlParamNumberJourneys +
    "&board_type=" +
    urlParamBoardType +
    "&products_filter=" +
    urlParamTrainSelection +
    "&update_interval=" +
    urlParamUpdateInterval +
    "&font_size=" +
    urlParamFontSize +
    "&show_clock=" +
    urlParamShowClock +
    "&show_header=" +
    urlParamShowHeader +
    "&show_line=" +
    urlParamShowLine +
    "&show_direction=" +
    urlParamShowDirection +
    "&show_platform=" +
    urlParamShowPlatform;

  ELEM_INPUT_URL.value = urlScotty;
  ELEM_IFRAME_PREVIEW.src = urlScotty;
  showLoadingScreen();
  // ELEM_CODE_URL.innerText = urlScotty;
  // ELEM_ANCHOR_URL.href = urlScotty;
}

function refreshIframe() {
  ELEM_IFRAME_PREVIEW.src = ELEM_IFRAME_PREVIEW.src;
  showLoadingScreen();
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

function clearDestinationID() {
  ELEM_INPUT_DESTINATION_STATION_ID.value = "";
  generateURL();
}

function showLoadingScreen() {
  // console.log("showLoadingScreen");
  // ELEM_LOADING_SPINNER.style.display = "block";
  ELEM_LOADING_SPINNER.classList.remove("display-none");
}

function hideLoadingScreen() {
  // console.log("hideLoadingScreen");
  // ELEM_LOADING_SPINNER.style.display = "none";
  ELEM_LOADING_SPINNER.classList.add("display-none");
}
// #endregion
