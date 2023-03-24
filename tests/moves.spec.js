const { makeRequest } = require("../utils/makeRequest");
const chai = require("chai");
const expect = chai.expect;

describe("/moves", function () {
	it("should return a list of moves", async function () {
		const data = await makeRequest("/move?limit=20");
		expect(data.results).to.be.an("array");
		expect(data.results).to.have.lengthOf.at.least(1);
	});

	it("should return a single move", async function () {
		const data = await makeRequest("/move/1");
		expect(data).to.be.an("object");
		expect(data.name).to.equal("pound");
		expect(data.power).to.equal(40);
		expect(data.type.name).to.equal("normal");
	});
});
