const { makeRequest } = require("../utils/makeRequest");
const chai = require("chai");
const expect = chai.expect;

describe("/pokemon", function () {
	it("should return data for a valid Pokemon", async function () {
		const data = await makeRequest("/pokemon/pikachu");
		expect(data).to.be.an("object");
		expect(data).to.have.property("id", 25);
		expect(data).to.have.property("name", "pikachu");
		expect(data).to.have.property("weight", 60);
	});
});
