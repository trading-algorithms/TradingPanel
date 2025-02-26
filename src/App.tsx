import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { TradingPanel } from './components/TradingPanel/TradingPanel';
import { AdvancedTradingPanel } from './components/TradingPanel/AdvancedTradingPanel';

const darkTheme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#0A84FF',
    },
    success: {
      main: '#00C805',
    },
    error: {
      main: '#FF3B30',
    },
    warning: {
      main: '#FFB340',
    },
  },
});

function App() {
  const [isAdvanced, setIsAdvanced] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="min-h-screen bg-[#051118] flex items-center justify-center">
        {isAdvanced ? (
          <AdvancedTradingPanel onSimpleClick={() => setIsAdvanced(false)} />
        ) : (
          <TradingPanel onAdvancedClick={() => setIsAdvanced(true)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;