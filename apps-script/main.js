function doGet() {
    return HtmlService
        .createTemplateFromFile("index")
        .evaluate()
        .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
}


function getSs() {
    const app = SpreadsheetApp;
    const ss = app.openByUrl('https://docs.google.com/spreadsheets/d/1mcH0QJf2XpbrvzXCyzYY-GERQVZDHI4kN8zoi4YNnSo/edit#gid=0');
    return ss;
}

function getSsUrl() {
    const url = getSs().getUrl();
    Logger.log(url)
    return url;
}

function getSheet(name = "Form Responses") {
    const ss = getSs();
    const sheet = ss.getSheetByName(name);
    return sheet;
}


function addDataToSheet(firstName, lastName, favoritePet, regOption) {
    Logger.log([firstName, lastName, favoritePet, regOption])
    const sheet = getSheet("Form Responses");
    const range = sheet.getRange(sheet.getLastRow() + 1, 1, 1, 4)
    range.setValues([[firstName, lastName, favoritePet, regOption]])
}

function tryIt() {
    addDataToSheet("John", "Cena", "Dolphin")
}