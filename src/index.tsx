import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './styles/GlobalStyle';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot>
    <QueryClientProvider client={client} >
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </ RecoilRoot >
);

