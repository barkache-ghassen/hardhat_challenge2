const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const amount = 10_000_000_000_000_000_000n;

module.exports = buildModule("TelephoneModule", (m) => {
const amount1 = m.getParameter("amount", amount);
//const owner = m.getParameter("owner","0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

  // Deploy Funds contract
  const telephone = m.contract("Telephone",[],{
    value: amount1
  });

  return { telephone };
});
