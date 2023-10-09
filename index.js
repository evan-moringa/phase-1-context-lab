/* Your Code Here */
function createEmployeeRecord(array){
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
        
}       
return(employeeRecord);
}

function createTimeInEvent(employeeRecord, dateTimeString) {
    
    const [date, time] = dateTimeString.split(" ");
    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");
  
    // Create the timeIn event object with the correct type
    const timeInEvent = {
      type: "TimeIn", 
      date: date,
      hour: parseInt(hour),
      minute: parseInt(minute),
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
    };
  
   
    employeeRecord.timeInEvents.push(timeInEvent);
  
    return employeeRecord;
  }




function createEmployeeRecords(employeeData){
    const employeeRecords = []

    for (const data of employeeData) {
        const employeeRecord = createEmployeeRecord(data);
        employeeRecords.push(employeeRecord);
}
return(employeeRecords);
}
createEmployeeRecords(employeeRecord)



  function createTimeOutEvent(employeeRecord, dateTimeString) {
    const [date, time] = dateTimeString.split(" "); 
    const [hour, minute] = time.split(":"); 
    const [year, month, day] = date.split("-");
    const timeOutEvent = {
      type: "TimeOut",
      date: date,
      hour: parseInt(hour),
      minute: parseInt(minute),
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day),
    };
  
    employeeRecord.timeOutEvents.push(timeOutEvent); 
    console.log(employeeRecord) 
  }


  function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      const timeInMinutes = timeInEvent.hour * 60 + timeInEvent.minute;
      const timeOutMinutes = timeOutEvent.hour * 60 + timeOutEvent.minute;
      return (timeOutMinutes - timeInMinutes) / 60;
    }
  
    return 0;
  }

  const dateToCalculate = "2023-10-08";
const wagesForDate = wagesEarnedOnDate(employeeRecord, dateToCalculate);
console.log(wagesForDate)

  
   function wagesEarnedOnDate(employeeRecord, date) {
    const hourlyRate = employeeRecord.hourlyRate; 
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hourlyRate * hoursWorked;
  }
      
  const dateToCalculated = "2023-10-08";
  const hoursWorked = hoursWorkedOnDate(employeeRecord, dateToCalculate);
  console.log(hoursWorked)


  function wagesEarnedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      const timeInMinutes = timeInEvent.hour * 60 + timeInEvent.minute;
      const timeOutMinutes = timeOutEvent.hour * 60 + timeOutEvent.minute;
      const hoursWorked = (timeOutMinutes - timeInMinutes) / 60;
      const earnings = employeeRecord.hourlyRate * hoursWorked;
      return earnings;
    }
  
    return 0; // Return 0 if there are no matching time events
  }
  
  
  
  function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
  }

  const employeeRecords = employeeData.map(data => createEmployeeRecord(data[0], data[1], data[2]));
  const foundEmployee = findEmployeeByFirstName(employeeRecords, "Loki");

  if (foundEmployee) {
    console.log("Found employee:");
    console.log(foundEmployee);
  } else {
    console.log("Employee not found.");
  }
 
  
 
  
function allWagesForSingleEmployee(employeeRecord) {
    let totalWages = 0;
  
    for (let i = 0; i < employeeRecord.timeInEvents.length; i++) {
      const date = employeeRecord.timeInEvents[i].date;
      totalWages += wagesEarnedOnDate(employeeRecord, date);
    }
  
    return totalWages;
  }


  
  function calculatePayroll(employeeRecords) {
    let totalPayroll = 0;
    for (let i = 0; i < employeeRecords.length; i++) {
        totalPayroll += allWagesFor(employeeRecords[i]);
      }
      return totalPayroll;


   }
  
 const totalPayroll = calculatePayroll(employeeRecords);

   if (totalPayroll === 11880) {
    console.log("Payroll calculation is correct. Total payroll burden is $11,880.");
  } else {
    console.error("Payroll calculation is incorrect.");
      
   if (totalWages === 770) {
    console.log("Total earnings for employees is $770.");
  } else {
    console.error("Total earnings do not match the expected value.");
  }
  }

    
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
  
