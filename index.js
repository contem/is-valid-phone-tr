/**
 * Validates Turkish mobile phone numbers.
 *
 * Accepts formats:
 *  - +905xxxxxxxxx
 *  - 05xxxxxxxxx
 *  - 5xxxxxxxxx
 *
 * @param {string} phoneNumber - Phone number to validate.
 * @returns {boolean} True if valid Turkish mobile number, false otherwise.
 */
function isValidPhoneTR(phoneNumber) {
    if (typeof phoneNumber !== "string") return false;
  
    const clean = phoneNumber.replace(/\s|-/g, "");
  
    const regex = /^(?:\+90|0)?5\d{9}$/;
  
    return regex.test(clean);
  }
  
  module.exports = isValidPhoneTR;
  