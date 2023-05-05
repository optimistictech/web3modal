import './App.css';
import logo from './logo-white-bg.89747d0b7015146fb8c9.png';
import telgram_icon from './telegram.svg';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal, Web3NetworkSwitch, Web3Button } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'




function App() {

  
 /*  setTimeout(() => {
    window.location = 'https://example.com/new-page';
  }, 30000); // 30000 milliseconds = 30 seconds
 */
  const chains = [arbitrum, mainnet, polygon]
  const projectId = process.env.modal_project_id;

  const { provider } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 2, chains }),
    provider
  })
  const ethereumClient = new EthereumClient(wagmiClient, chains)


  return (
    <div className="App">
      
      

<br></br>
<br></br>
<br></br>
<br></br>

      
      <WagmiConfig client={wagmiClient}>
        <Web3Button label="Connect Wallet"  className='step-button-title'  balance='show' />
      
      </WagmiConfig>

      <Web3Modal 
      
      projectId={projectId} ethereumClient={ethereumClient} />
     
      
    </div>
  );
}

export default App;
