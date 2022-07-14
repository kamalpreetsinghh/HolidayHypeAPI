const PDFDocument = require('pdfkit');

const buildFlightPDF = async (data) => {
    const doc = new PDFDocument({ size: "A4", bufferPages: true, font: 'Courier' });
    
    doc.image('assets/airplane.jpg', 0, 0, {width: 620});

    doc
      .fontSize(16)
      .text(`







  Flight Name: ${data.flightName}

  From: ${data.flightFrom}   To: ${data.flightTo}

  Departure Date and Time: ${data.departureDate}  ${data.departureTiming} 

  Arrival Date and Time:   ${data.landingDate}  ${data.landingTiming}

  Fare: ${data.fare}$
      
      
      `);
    
    doc.end();

    return doc;
}

const buildHotelPDF = async (data) => {
  const doc = new PDFDocument({ size: "A4", bufferPages: true, font: 'Courier' });
  
  doc.image('assets/airplane.jpg', 0, 0, {width: 620});

  doc
    .fontSize(16)
    .text(`








Name: ${data.name}

Hotel Name: ${data.hotelName}

Guest Name: ${data.guestName}

Check In Date and Time:  

Check Out Date and Time:   

Number of Rooms: ${data.numberOfRooms}

    
    
    `);
  
  doc.end();

  return doc;
}

module.exports = { buildFlightPDF, buildHotelPDF };

