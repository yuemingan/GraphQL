const doctors =[{
    id: "user001",
    doctorName: "Alice",
    clinicNname: "clinic01",
    specialty: "gynecologist",
    calendar: "01"
   },{
    id: "user002",
    doctorName: "Makky",
    clinicNname: "clinic02",
    specialty: "orthopedic", 
    calendar: "12"
   }]
const calendars = [{
    id: "01",
    timeSlots: 6
   },{
    id: "12",
    timeSlots: 10
   }]

const events = [{
    id: "001",
    calendarID: "01",
    patientName: "Maggie"
   },{
    id: "002",
    calendarID: "12",
    patientName: "Luke"
   }]
 module.exports = {
    doctors,
    calendars,
    events
 }
 