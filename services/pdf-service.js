const PDFDocument = require('pdfkit');

const buildPDF = async (data) => {
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

module.exports = { buildPDF };

