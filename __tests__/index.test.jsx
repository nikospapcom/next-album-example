import React from 'react'
import { 
  render, 
  screen, 
  waitFor
} from '@testing-library/react'
import Home from '../pages/index'
import Album from '../pages/album/[id]'
import { QueryClient, QueryClientProvider } from "react-query";
import { act } from "react-dom/test-utils";

jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "/",
          pathname: "",
          query: "",
          asPath: "",
      };
  },
}));

describe('Home', () => {
  const queryClient = new QueryClient();
  it('renders a loader', async () => {
    await act( async () => render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    ));
    
    await waitFor(() => {
      const title = screen.getByTestId("title").textContent;
      expect(title).toEqual('Albums');

      const loader = screen.getByTestId("loader");
      expect(loader).toBeInTheDocument();
    });
  })
})

describe('Album', () => {
  const queryClient = new QueryClient();
  it('renders a loader', async () => {
    await act( async () => render(
      <QueryClientProvider client={queryClient}>
        <Album />
      </QueryClientProvider>
    ));
    
    await waitFor(() => {
      const title = screen.getByTestId("title").textContent;
      expect(title).toEqual('Photo Album');

      const loader = screen.getByTestId("loader");
      expect(loader).toBeInTheDocument();
    });
  })
})
