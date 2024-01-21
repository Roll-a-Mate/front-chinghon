import { http, createConfig } from 'wagmi'
import { sepolia, avalancheFuji } from 'wagmi/chains'
import { coinbaseWallet, injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [avalancheFuji, sepolia],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Create Wagmi' }),
    // walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [avalancheFuji.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
