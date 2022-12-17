const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");
const prompt = require("prompt-sync")({ sigint: true });
const serverUrl = "http://localhost:1225";

const merkleTree = new MerkleTree(niceList);

async function main() {
  //let name = "Cronos";
  let index = niceList.findIndex((x) => x === name);
  let proof = merkleTree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name,
    proof: proof,
  });
  console.log({ gift });
}
let name = String(prompt("Whats your Name: "));
main();
