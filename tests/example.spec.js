const makeRequest = require("../utils/makeRequest");
const chai = require("chai");
const expect = chai.expect;

const apiUrl = "https://pokeapi.co/api/v2";

describe("PokeAPI Tests", function () {
	describe("/pokemon", function () {
		it("should return a list of Pokemon", async function () {
			const data = await makeRequest(`${apiUrl}/pokemon?limit=20`);
			expect(data.results).to.be.an("array");
			expect(data.results).to.have.lengthOf.at.least(1);
		});

		it("should return a single Pokemon", async function () {
			const data = await makeRequest(`${apiUrl}/pokemon/1`);
			expect(data).to.be.an("object");
			expect(data.name).to.equal("bulbasaur");
			expect(data.types).to.be.an("array");
			expect(data.types[0].type.name).to.equal("grass");
		});
	});
	describe("/moves", function () {
		it("should return a list of moves", async function () {
			const data = await makeRequest(`${apiUrl}/move?limit=20`);
			expect(data.results).to.be.an("array");
			expect(data.results).to.have.lengthOf.at.least(1);
		});

		it("should return a single move", async function () {
			const data = await makeRequest(`${apiUrl}/move/1`);
			expect(data).to.be.an("object");
			expect(data.name).to.equal("pound");
			expect(data.power).to.equal(40);
			expect(data.type.name).to.equal("normal");
		});
	});
});
