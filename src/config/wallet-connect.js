import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

// 2. Set chains
const chains = [
  {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
  {
    chainId: 97,
    name: "BSC Testnet",
    currency: "tBNB",
    explorerUrl: "https://testnet.bscscan.com/",
    rpcUrl: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
  },
];

// 3. Create modal
const metadata = {
  name: "Mufasa",
  description: "Mufasa meme coin",
  url: "https://localhost:3000",
  icons: ["https://avatars.mywebsite.com/"],
};

const initWeb3Modal = () => {
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: chains,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
  });
};

export default initWeb3Modal;