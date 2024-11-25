const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const networkMapping = {
  AIRTEL: [
    "0802",
    "0808",
    "0708",
    "0812",
    "0902",
    "0907",
    "0901",
    "0912",
    "0911",
  ],
  MTN: ["0803", "0806", "0703", "0706", "0813", "0816", "0903", "0906", "0913"],
  GLO: ["0805", "0807", "0705", "0811", "0815", "0905", "0915"],
  "9MOBILE": ["0809", "0817", "0818", "0909", "0908"],
};

const findNetwork = (phoneNumber) => {
  const prefix = phoneNumber.slice(0, 4); //Get the first 4 digits.
  for (const [network, prefixes] of Object.entries(networkMapping)) {
    if (prefixes.includes(prefix)) {
      return { phoneNumber: phoneNumber, network: network };
    }
  }
  return "unknown network";
};

app.get("/network/:phoneNumber", (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  if (
    phoneNumber.length !== 11 ||
    !phoneNumber.split("").every((char) => char > "0" && char < "9")
  ) {
    return res.send("Invalid number");
  }

  result = findNetwork(req.params.phoneNumber);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
