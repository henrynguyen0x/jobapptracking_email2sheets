ScriptApp.newTrigger(getGmailEmailsR);

function getGmailEmailsR(){
var threads = GmailApp.search('label: "Rejected"');
for (var i=0; i < threads.length; i++) {
var messages = threads[i].getMessages();

for (var j=0; j < messages.length; j++) {
var message = messages[j];
extractDetailsR(message);
}
threads[i].removeLabel(GmailApp.getUserLabelByName("Rejected"));
}
}

function extractDetailsR(message){
var dateTime = message.getDate();
// var subjectText = message.getSubject();
var senderDetails = message.getFrom();
// var bodyContent = message.getPlainBody();
var company = senderDetails.toString();
var companyName = company.split("<");
var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
activeSheet.appendRow([dateTime, senderDetails, companyName[0],'Rejected'])
}