const db = require('./db')

 
const Query = {
    doctor(parent, args, contextValue, info) {
        return db.doctors.find((doctor) => doctor.doctorName === args.name);
      },
}
 
const Doctor = {
 calendar:(parent) =>{
    return db.calendars.find((calendar) => calendar.id === parent.calendar);
 }
}

const Calendar = {
    events: (parent) =>{

      return db.events.filter((event) => parent.id === event.calendarID);
    }
  }

const Mutation = {
    bookAppointment: (parent, args, contextValue, info) => {
        const doctor = db.doctors.find((doctor) => doctor.doctorName === args.doctorName);
        if (!doctor) {
            throw new Error(`Couldn’t find doctor with name ${args.doctorName}`);
        }
        const idAssigned = db.events.length + 1;
        const event = {
            id: idAssigned,
            patientName:args.patientName
        }
        db.events.push(event);
        return event;
        
    },

    cancelAppointment: (parent, args, contextValue, info) => {
        const calendar = db.doctors.find((doctor) => doctor.doctorName === args.doctorName).calendar;
        if (!calendar) {
            throw new Error(`Couldn’t find doctor with name ${doctorName}`);
        }

        const event = db.events.find((event) => event.patientName === args.patientName);
        
        const id = db.events.indexOf(event);
        db.events.splice(id, 1);
        return true;
    },

    updateAppointment: (parent, args, contextValue, info) => {

        const event = db.events.find((event) => event.patientName === args.oldName);
        if(!event) {
            throw new Error(`Couldn’t find patient with name ${args.oldName}`);
        }
        event.patientName = args.newName;
        return event;
        
    }
    
}

module.exports = {
 Query,
 Doctor,
 Calendar,
 Mutation
}
