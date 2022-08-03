const PDFDocument = require("pdfkit");

const buildFlightPDF = async (data, flight, user) => {
  const doc = new PDFDocument({
    size: "A4",
    bufferPages: true,
    font: "Courier",
  });

  doc.image("assets/airplane.jpg", 0, 0, { width: 620 });

  doc.fontSize(16).text(`






  Name:           ${user.firstName} ${user.lastName}
  
  Flight Name:    ${flight.name}

  From:           ${data.flightFrom}   
  
  To:             ${data.flightTo}

  Type:           ${data.type}

  Class:          ${data.className}

  Children:       ${data.numberOfChildren}

  Adults:         ${data.numberOfAdults}

  Departure Date: ${data.departureDate}  ${flight.departureTiming}

  Arrival Date:   ${data.landingDate}  ${flight.landingTiming}

  Fare:           ${
    parseInt(data.numberOfAdults) * flight.fare +
    (parseInt(data.numberOfChildren) * flight.fare) / 2
  }$
      
      
      `);

  doc.end();

  return doc;
};

const buildHotelPDF = async (data, name, guest, numberOfRooms) => {
  const doc = new PDFDocument({
    size: "A4",
    bufferPages: true,
    font: "Courier",
  });

  doc.image("assets/airplane.jpg", 0, 0, { width: 620 });

  doc.fontSize(14).text(`









Name:               ${name}

Guest Name:         ${guest}

Hotel Name:         ${data.name}

Hotel Address:      ${data.address}

Contact Number:     ${data.phone}

Check In Date:      ${data.date.toDateString()}

Check Out Date:     ${data.date.toDateString()}

Number of Rooms:    ${numberOfRooms}

Price:              ${parseInt(numberOfRooms) * data.price}$
    
    
    `);

  doc.end();

  return doc;
};

module.exports = { buildFlightPDF, buildHotelPDF };
