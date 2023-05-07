import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
  Web3Button,
} from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  const { contract } = useContract(
    "0xC53534573767DD68970BA3Cf42dFDB8890B8c6fc"
  );
  const address = useAddress();
  const { data: nfts } = useOwnedNFTs(contract, address);
  return (
    <>
      <div className="container">
      <ConnectWallet accentColor="#0000" colorMode="light" />
        <div className="small-container">
          {nfts?.map((nft) => {
            return (
              <>
                <div key={nft.metadata.id}>
                  <ThirdwebNftMedia metadata={nft.metadata} />
                  <p style={{textAlign : "center"}}> {nft.metadata.name}</p>
                  <p style={{textAlign : "center"}}>{nft.supply}</p>
                </div>
              </>
            );
          })}
        </div>
        <Web3Button
          style={{marginTop : "5px" , width : "250px"}}
            contractAddress="0xC53534573767DD68970BA3Cf42dFDB8890B8c6fc"
            action={(contract) => {
              contract.erc1155.claim(0, 1);
            }}
          >
            Claim a charmander
          </Web3Button>
          <Web3Button
            style={{marginTop : "5px" , width : "250px"}}
            contractAddress="0xC53534573767DD68970BA3Cf42dFDB8890B8c6fc"
            action={(contract) => {
              contract.call("evolve");
            }}
          >
            Evolve
          </Web3Button>
      </div>
    </>
  );
}
