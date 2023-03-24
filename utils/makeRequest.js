require("dotenv").config();
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

// Accepts a URL, HTTP Method (Get by default) and a request body (empty be default)
// Also contains error handling if the request fails
async function makeRequest(endpoint, method = "get", body = null) {
	const url = `${process.env.API_URL}${endpoint}`;
	try {
		const res = await chai.request(url)[method]("/").send(body);
		expect(res).to.have.status(200);
		return res.body;
	} catch (err) {
		if (err.response) {
			// The request was made and the server responded with a non-200 status code
			throw new Error(`${err.response.status}: ${err.response.text}`);
		} else if (err.request) {
			// The request was made but no response was received
			throw new Error("No response received");
		} else {
			// Something happened in setting up the request that triggered an Error
			throw new Error(`Request error: ${err.message}`);
		}
	}
}

module.exports = { makeRequest };