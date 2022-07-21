const PDFDocument = require("pdfkit");

const buildFlightPDF = async (data) => {
  const doc = new PDFDocument({
    size: "A4",
    bufferPages: true,
    font: "Courier",
  });

  doc.image("assets/airplane.jpg", 0, 0, { width: 620 });

  doc.fontSize(16).text(`







  Flight Name: ${data.flightName}

  From: ${data.flightFrom}   To: ${data.flightTo}

  Departure Date and Time: ${data.departureDate}  ${data.departureTiming} 

  Arrival Date and Time:   ${data.landingDate}  ${data.landingTiming}

  Fare: ${data.fare}$
      
      
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
