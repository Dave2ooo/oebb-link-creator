// #region Define global variables */

const ELEM_DEPARTURE_STATION_SEARCH = document.getElementById("input-departure-station-search");

const ELEM_INPUT_DEPARTURE_STATION_ID = document.getElementById("input-departure-station-id");

const ELEM_DEPARTURE_SUGGESTIONS_CONTAINER = document.getElementById("departure-suggestions");

let ELEM_DEPARTURE_SUGGESTIONS_LIST = [];
let ELEM_DESTINATION_SUGGESTIONS_LIST = [];

const ELEM_RADIO_DEPARTURE = document.getElementById("departure");
const ELEM_RADIO_ARRIVAL = document.getElementById("arrival");
const ELEM_INPUT_PAGE_NUMBER = document.getElementById("input-page-number");
// const ELEM_CHECKBOX_SHOW_INCIDENTS = document.getElementById("show-incidents");

let ELEM_SUGGESTIONS_LIST = [ELEM_DEPARTURE_SUGGESTIONS_LIST, ELEM_DESTINATION_SUGGESTIONS_LIST];

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
// miniSearch.addAll(Verkehrsstationen);
miniSearch.addAll(StopPlaces);

function selectListentry(selectedEntryIndex, suggestionsList, inputStationID) {
  for (let i = 0; i < ELEM_SUGGESTIONS_LIST[suggestionsList].length; i++) {
    ELEM_SUGGESTIONS_LIST[suggestionsList][i].classList.remove("background-selected");
  }
  ELEM_SUGGESTIONS_LIST[suggestionsList][selectedEntryIndex].classList.add("background-selected");
  console.log(ELEM_SUGGESTIONS_LIST[suggestionsList][selectedEntryIndex].id);
  inputStationID.value = ELEM_SUGGESTIONS_LIST[suggestionsList][selectedEntryIndex].id;
  generateURL();
}

function searchStation() {
  let inputStationSearch = ELEM_DEPARTURE_STATION_SEARCH;
  let selectStation = ELEM_DEPARTURE_SUGGESTIONS_CONTAINER;
  let suggestionsList = 0;
  let inputStationID = ELEM_INPUT_DEPARTURE_STATION_ID;

  searchStationLocal(inputStationSearch, selectStation, suggestionsList, inputStationID);
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

function convertLocal(data) {
  let list = new Array();
  for (let i = 0; i < data.length; i++) {
    let item = { name: data[i].Name, id: data[i].Value };
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
  https://meine.oebb.at/webdisplay/?stationId=Bg&contentType=departure&staticLayout=true
*/
  // Departure Station
  let urlParamDepartureStation = ELEM_INPUT_DEPARTURE_STATION_ID.value.replace(" ", "");
  urlParamDepartureStation = urlParamDepartureStation.replace(" ", "%20");

  // Departure - Arrival
  let urlParamBoardType;
  if (ELEM_RADIO_DEPARTURE.checked) {
    urlParamBoardType = "departure";
  } else {
    urlParamBoardType = "arrival";
  }

  const urlParamPageNumber = ELEM_INPUT_PAGE_NUMBER.value;

  // let urlParamIgnoreIncidents = "true";
  // if (ELEM_CHECKBOX_SHOW_INCIDENTS.checked) urlParamIgnoreIncidents = "false";

  /*  const urlScotty =
    "https://meine.oebb.at/webdisplay/?stationId=" +
    urlParamDepartureStation +
    "&contentType=" +
    urlParamBoardType +
    "&staticLayout=true" +
    "&page=" +
    urlParamPageNumber;
    */

  const urlScotty =
    "https://meine.oebb.at/abfahrtankunft/" +
    urlParamBoardType +
    "?static=true&ignoreIncident=true" +
    "&evaNr=" +
    urlParamDepartureStation +
    "&page=" +
    urlParamPageNumber;

  ELEM_INPUT_URL.value = urlScotty;
  ELEM_IFRAME_PREVIEW.src = urlScotty;
  showLoadingScreen();
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

function openInNewTab() {
  const URL = ELEM_INPUT_URL.value;
  if (URL == "") return;

  window.open(URL, "_blank");
}

// function clearDestinationID() {
//   ELEM_INPUT_DESTINATION_STATION_ID.value = "";
//   generateURL();
// }

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
