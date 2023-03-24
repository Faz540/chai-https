const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);

async function makeRequest(url, method = "get", body = null) {
	try {
		const req = chai.request(url)[method](body);
		const res = await req;
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