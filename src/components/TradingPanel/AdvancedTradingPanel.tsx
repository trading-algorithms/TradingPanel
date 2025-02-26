import React, { useState } from 'react';
import {
  Box,
  Select,
  MenuItem,
  Typography,
  Button,
  IconButton,
  styled,
  Paper,
  ButtonGroup,
  Switch,
  Slider,
  Tab,
  Tabs,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { ChevronLeft, Minus, Plus, Settings, X, Percent } from 'lucide-react';

const PanelContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0A1929',
  color: '#fff',
  padding: theme.spacing(2),
  width: '500px',
  borderRadius: theme.spacing(1),
  fontFamily: '"Open Sans", sans-serif',
}));

const AccountSection = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const AccountInfo = styled(Box)({
  textAlign: 'right',
});

const VolumeSection = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(10, 132, 255, 0.1)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const VolumeHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

const VolumeInput = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const VolumeButton = styled(Button)(({ theme }) => ({
  minWidth: '40px',
  padding: theme.spacing(0.5),
  color: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  textAlign: 'left',
}));

const SettingsButton = styled(Button)(({ theme }) => ({
  minWidth: '36px',
  width: '36px',
  height: '36px',
  padding: 0,
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const TradeButtons = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  width: '200px',
  height: '320px',
  marginBottom: theme.spacing(2),
}));

const SideButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
  '& .MuiButton-root': {
    flex: 1,
    minWidth: '40px',
    padding: theme.spacing(0.5),
    fontSize: '0.75rem',
  },
}));

const InfoPanel = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(1),
  '& .MuiTypography-body1': {
    fontSize: '0.875rem',
  },
  '& .MuiTypography-body2': {
    fontSize: '0.75rem',
  },
  '& .MuiTypography-caption': {
    fontSize: '0.625rem',
  },
}));

const InfoColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const InfoBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const PositionManagement = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  width: '50%',
  height: '320px',
}));

const TabPanel = styled(Box)({
  padding: '16px 0',
});

const MainTradeButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '48px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  '& .MuiTypography-caption': {
    opacity: 0.8,
    fontSize: '0.75rem',
  },
}));

const AutoSLTPSection = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const AutoModeGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  backgroundColor: 'rgba(10, 25, 41, 0.7)',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

const ValueControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root': {
    color: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    '&.Mui-selected': {
      backgroundColor: '#FFB340',
      color: '#051118',
      '&:hover': {
        backgroundColor: '#E6A139',
      },
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

const UnitToggleGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root': {
    minWidth: '32px',
    padding: theme.spacing(0.5),
    color: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    '&.Mui-selected': {
      backgroundColor: '#FFB340',
      color: '#051118',
      '&:hover': {
        backgroundColor: '#E6A139',
      },
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

const ValueInput = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& .MuiSelect-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
    minWidth: '80px',
  },
}));

interface VolumeSettingsDialogProps {
  open: boolean;
  onClose: () => void;
  defaultValues: number[];
  onSave: (values: number[]) => void;
}

const VolumeSettingsDialog: React.FC<VolumeSettingsDialogProps> = ({
  open,
  onClose,
  defaultValues,
  onSave,
}) => {
  const [values, setValues] = useState<number[]>([...defaultValues]);

  const handleChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = Number(value) || 0;
    setValues(newValues);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ color: '#fff', bgcolor: '#0A1929', fontFamily: '"Open Sans", sans-serif' }}>
        Volume Preset Settings
      </DialogTitle>
      <DialogContent sx={{ bgcolor: '#0A1929', pt: 2 }}>
        {values.map((value, index) => (
          <Box key={index} mb={2}>
            <IconButton
              size="small"
              onClick={() => {
                const newValues = [...values];
                newValues[index] = newValues[index] + 1;
                setValues(newValues);
              }}
              sx={{ color: '#fff', mb: 1 }}
            >
              <Plus size={16} />
            </IconButton>
            <TextField
              fullWidth
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              type="number"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  },
                },
              }}
            />
            <IconButton
              size="small"
              onClick={() => {
                const newValues = [...values];
                newValues[index] = Math.max(0, newValues[index] - 1);
                setValues(newValues);
              }}
              sx={{ color: '#fff', mt: 1 }}
            >
              <Minus size={16} />
            </IconButton>
          </Box>
        ))}
      </DialogContent>
      <DialogActions sx={{ bgcolor: '#0A1929', p: 2 }}>
        <Button onClick={onClose} sx={{ color: '#fff' }}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSave(values);
            onClose();
          }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface AdvancedTradingPanelProps {
  onSimpleClick?: () => void;
}

export const AdvancedTradingPanel: React.FC<AdvancedTradingPanelProps> = ({ onSimpleClick }) => {
  const [account, setAccount] = useState('Binance: future');
  const [volume, setVolume] = useState('1000');
  const [volumePresets, setVolumePresets] = useState([1, 2, 5, 10, 20]);
  const [leverage, setLeverage] = useState('20x');
  const [marginType, setMarginType] = useState('Cross');
  const [orderType, setOrderType] = useState('GTC');
  const [ocoEnabled, setOcoEnabled] = useState(false);
  const [calculationType, setCalculationType] = useState('Risk of Depo');
  const [closePercentage, setClosePercentage] = useState('50');
  const [currentTab, setCurrentTab] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);
  
  const [autoModeTP, setAutoModeTP] = useState(false);
  const [autoModeSL, setAutoModeSL] = useState(false);
  const [takeProfitValue, setTakeProfitValue] = useState('50');
  const [stopLossValue, setStopLossValue] = useState('50');
  const [takeProfitUnit, setTakeProfitUnit] = useState('t');
  const [stopLossUnit, setStopLossUnit] = useState('t');
  const [trailingStopValue, setTrailingStopValue] = useState('9999');
  const [trailingStopUnit, setTrailingStopUnit] = useState('t');
  const [trailingStopMode, setTrailingStopMode] = useState('off');

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(event.target.value);
  };

  const handlePresetClick = (value: number) => {
    setVolume(value.toString());
  };

  const handleSavePresets = (newPresets: number[]) => {
    setVolumePresets(newPresets);
  };

  const renderAutoSLTPContent = () => {
    return (
      <>
        <AutoSLTPSection>
          <AutoModeGroup>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Auto mode TP
              </Typography>
              <StyledToggleButtonGroup
                value={autoModeTP ? 'on' : 'off'}
                exclusive
                onChange={(_, value) => setAutoModeTP(value === 'on')}
                size="small"
              >
                <ToggleButton value="on">On</ToggleButton>
                <ToggleButton value="off">Off</ToggleButton>
              </StyledToggleButtonGroup>
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Take Profit
              </Typography>
              <ValueControls>
                <ValueInput>
                  <IconButton size="small" sx={{ color: '#fff' }}>
                    <Minus size={16} />
                  </IconButton>
                  <Select
                    value={takeProfitValue}
                    onChange={(e) => setTakeProfitValue(e.target.value)}
                    size="small"
                  >
                    <MenuItem value="50">50</MenuItem>
                  </Select>
                  <IconButton size="small" sx={{ color: '#fff' }}>
                    <Plus size={16} />
                  </IconButton>
                </ValueInput>
                <UnitToggleGroup
                  value={takeProfitUnit}
                  exclusive
                  onChange={(_, value) => value && setTakeProfitUnit(value)}
                  size="small"
                >
                  <ToggleButton value="t">t</ToggleButton>
                  <ToggleButton value="%">%</ToggleButton>
                  <ToggleButton value="$">$</ToggleButton>
                </UnitToggleGroup>
              </ValueControls>
            </Box>
          </AutoModeGroup>

          <AutoModeGroup>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Auto mode SL
              </Typography>
              <StyledToggleButtonGroup
                value={autoModeSL ? 'on' : 'off'}
                exclusive
                onChange={(_, value) => setAutoModeSL(value === 'on')}
                size="small"
              >
                <ToggleButton value="on">On</ToggleButton>
                <ToggleButton value="off">Off</ToggleButton>
              </StyledToggleButtonGroup>
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Stop Loss
              </Typography>
              <ValueControls>
                <ValueInput>
                  <IconButton size="small" sx={{ color: '#fff' }}>
                    <Minus size={16} />
                  </IconButton>
                  <Select
                    value={stopLossValue}
                    onChange={(e) => setStopLossValue(e.target.value)}
                    size="small"
                  >
                    <MenuItem value="50">50</MenuItem>
                  </Select>
                  <IconButton size="small" sx={{ color: '#fff' }}>
                    <Plus size={16} />
                  </IconButton>
                </ValueInput>
                <UnitToggleGroup
                  value={stopLossUnit}
                  exclusive
                  onChange={(_, value) => value && setStopLossUnit(value)}
                  size="small"
                >
                  <ToggleButton value="t">t</ToggleButton>
                  <ToggleButton value="%">%</ToggleButton>
                  <ToggleButton value="$">$</ToggleButton>
                </UnitToggleGroup>
              </ValueControls>
            </Box>
          </AutoModeGroup>

          <AutoModeGroup>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Trailing Stop
              </Typography>
              <ValueControls>
                <ValueInput>
                  <IconButton size="small" sx={{ color: '#fff' }}>
                    <Minus size={16} />
                  </IconButton>
                  <Select
                    value={trailingStopValue}
                    onChange={(e) => setTrailingStopValue(e.target.value)}
                    size="small"
                  >
                    <MenuItem value="9999">9999</MenuItem>
                  </Select>
                  <IconButton size="small" sx={{ color: '#fff' }}>
                    <Plus size={16} />
                  </IconButton>
                </ValueInput>
                <UnitToggleGroup
                  value={trailingStopUnit}
                  exclusive
                  onChange={(_, value) => value && setTrailingStopUnit(value)}
                  size="small"
                >
                  <ToggleButton value="t">t</ToggleButton>
                  <ToggleButton value="%">%</ToggleButton>
                  <ToggleButton value="$">$</ToggleButton>
                </UnitToggleGroup>
              </ValueControls>
            </Box>
            <StyledToggleButtonGroup
              value={trailingStopMode}
              exclusive
              onChange={(_, value) => value && setTrailingStopMode(value)}
              size="small"
              sx={{ mt: 3 }}
            >
              <ToggleButton value="off">Off</ToggleButton>
              <ToggleButton value="entry">Entry price</ToggleButton>
              <ToggleButton value="following">Following price</ToggleButton>
            </StyledToggleButtonGroup>
          </AutoModeGroup>
        </AutoSLTPSection>
      </>
    );
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return (
          <>
            <PnLInfoBlock>
              <PnLHeader>
                <Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#00C805',
                      backgroundColor: 'rgba(0, 200, 5, 0.1)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    LONG
                  </Typography>
                </Box>
                <Typography variant="body1">BAKEUSDT</Typography>
                <Typography variant="body1">20x</Typography>
                <Typography variant="body1">2,000.00</Typography>
                <Typography variant="body1">100.185 USDT</Typography>
              </PnLHeader>

              <Box display="flex" gap={2}>
                <PriceBlock sx={{ flex: 1 }}>
                  <PriceRow>
                    <Typography variant="body2" color="text.secondary">
                      Entry price
                    </Typography>
                    <Box>
                      <Typography variant="body1">1.00185 USDT</Typography>
                    </Box>
                  </PriceRow>
                  <PriceRow>
                    <Typography variant="body2" color="text.secondary">
                      Mark price
                    </Typography>
                    <Box>
                      <Typography variant="body1">1.00195 USDT</Typography>
                    </Box>
                  </PriceRow>
                </PriceBlock>

                <PriceBlock sx={{ flex: 1 }}>
                  <PriceRow>
                    <Typography variant="body2" color="text.secondary">
                      Liquidation price
                    </Typography>
                    <Typography variant="body1">14.28560 USDT</Typography>
                  </PriceRow>
                </PriceBlock>
              </Box>
            </PnLInfoBlock>

            <PnLInfoBlock>
              <PnLRow>
                <Typography variant="body2" color="text.secondary">
                  Unrealized PnL
                </Typography>
                <Box>
                  <Typography variant="body1" color="success.main">
                    +22.2685 USDT (+0.20%)
                  </Typography>
                </Box>
              </PnLRow>
              <PnLRow>
                <Typography variant="body2" color="text.secondary">
                  Realized PnL
                </Typography>
                <Box>
                  <Typography variant="body1" color="error.main">
                    -1.4578 USDT (-0.07%)
                  </Typography>
                </Box>
              </PnLRow>
            </PnLInfoBlock>

            <BottomMetrics>
              <PnLInfoBlock sx={{ flex: 1, mr: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  RR ratio
                </Typography>
                <Typography variant="h6" color="warning.main">
                  14.5
                </Typography>
              </PnLInfoBlock>

              <PnLInfoBlock sx={{ flex: 1, ml: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Funding
                </Typography>
                <Typography variant="h6" color="error.main">
                  -1.2546%
                </Typography>
              </PnLInfoBlock>
            </BottomMetrics>
          </>
        );
      case 1:
        return renderAutoSLTPContent();
      default:
        return null;
    }
  };

  return (
    <PanelContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle2">Trade panel</Typography>
        <IconButton size="small" sx={{ color: '#fff' }}>
          <X size={16} />
        </IconButton>
      </Box>

      <AccountSection>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Trade account
          </Typography>
          <Select
            fullWidth
            value={account}
            onChange={(e) => setAccount(e.target.value as string)}
            size="small"
            sx={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            <MenuItem value="Binance: future">Binance: future</MenuItem>
          </Select>
        </Box>
        <AccountInfo>
          <Typography variant="body2" color="text.secondary">
            Available Balance: <span style={{ color: '#fff' }}>3,128.6459$</span>
          </Typography>
          <Typography variant="body2" color="error">
            Margin: -500.00$
          </Typography>
        </AccountInfo>
      </AccountSection>

      <VolumeSection>
        <VolumeHeader>
          <Typography variant="subtitle2">Trade volume</Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <ButtonGroup size="small">
              <Button
                onClick={() => setMarginType('Cross')}
                sx={{
                  backgroundColor: marginType === 'Cross' ? 'primary.main' : 'transparent',
                  color: marginType === 'Cross' ? '#051118' : '#fff',
                }}
              >
                Cross
              </Button>
              <Button
                onClick={() => setMarginType('Isolated')}
                sx={{
                  backgroundColor: marginType === 'Isolated' ? 'primary.main' : 'transparent',
                  color: marginType === 'Isolated' ? '#051118' : '#fff',
                }}
              >
                Isolated
              </Button>
            </ButtonGroup>
            <Select
              value={leverage}
              onChange={(e) => setLeverage(e.target.value as string)}
              size="small"
              sx={{ minWidth: 80 }}
            >
              {['1x', '2x', '5x', '10x', '20x', '50x', '100x', '125x'].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </VolumeHeader>

        <VolumeInput>
          <IconButton size="small" sx={{ color: '#fff' }}>
            <Minus size={16} />
          </IconButton>
          <input
            type="text"
            value={volume}
            onChange={handleVolumeChange}
            style={{
              width: '100%',
              padding: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              color: '#fff',
            }}
          />
          <IconButton size="small" sx={{ color: '#fff' }}>
            <Plus size={16} />
          </IconButton>
        </VolumeInput>

        <Box display="flex" gap={0.5} mb={2}>
          {volumePresets.map((value) => (
            <VolumeButton 
              key={value} 
              variant="outlined"
              onClick={() => handlePresetClick(value)}
            >
              {value}
            </VolumeButton>
          ))}
          <SettingsButton onClick={() => setSettingsOpen(true)}>
            <Settings size={16} />
          </SettingsButton>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Box />
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2" color="text.secondary">Scale</Typography>
            <Percent size={16} color="#fff" />
          </Box>
        </Box>

        <Slider
          defaultValue={20}
          step={null}
          marks={[
            { value: 0, label: '0' },
            { value: 10, label: '1' },
            { value: 20, label: '2' },
            { value: 30, label: '3' },
            { value: 40, label: '4' },
            { value: 50, label: '5' },
            { value: 60, label: '10' },
            { value: 70, label: '20' },
            { value: 80, label: '50' },
            { value: 100, label: '100' },
          ]}
          sx={{
            color: '#0A84FF',
            '& .MuiSlider-mark': {
              backgroundColor: '#fff',
            },
            '& .MuiSlider-markLabel': {
              color: '#fff',
            },
          }}
        />

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <ButtonGroup size="small">
            <Button
              onClick={() => setOrderType('GTC')}
              sx={{
                backgroundColor: orderType === 'GTC' ? 'primary.main' : 'transparent',
                color: orderType === 'GTC' ? '#051118' : '#fff',
              }}
            >
              GTC
            </Button>
            <Button
              onClick={() => setOrderType('DAY')}
              sx={{
                backgroundColor: orderType === 'DAY' ? 'primary.main' : 'transparent',
                color: orderType === 'DAY' ? '#051118' : '#fff',
              }}
            >
              DAY
            </Button>
          </ButtonGroup>
          <Button
            size="small"
            onClick={() => setOcoEnabled(!ocoEnabled)}
            sx={{
              color: ocoEnabled ? '#051118' : '#fff',
              backgroundColor: ocoEnabled ? 'primary.main' : 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: ocoEnabled ? 'primary.dark' : 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            OCO
          </Button>
          <Select
            value={calculationType}
            onChange={(e) => setCalculationType(e.target.value as string)}
            size="small"
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="Risk of Depo">Risk of Depo</MenuItem>
            <MenuItem value="Part of Depo">Part of Depo</MenuItem>
          </Select>
        </Box>
      </VolumeSection>

      <Box display="flex" gap={2}>
        <Box>
          <TradeButtons>
            <Box>
              <MainTradeButton
                variant="contained"
                sx={{ backgroundColor: '#00C805', '&:hover': { backgroundColor: '#00B805' } }}
              >
                BUY MARKET
                <Typography variant="caption" display="block">
                  29 123.56
                </Typography>
              </MainTradeButton>
              <SideButtonsContainer>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'rgba(0, 200, 5, 0.3)',
                    '&:hover': { backgroundColor: 'rgba(0, 200, 5, 0.4)' },
                  }}
                >
                  ASK
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'rgba(0, 200, 5, 0.3)',
                    '&:hover': { backgroundColor: 'rgba(0, 200, 5, 0.4)' },
                  }}
                >
                  BID
                </Button>
              </SideButtonsContainer>
            </Box>

            <InfoPanel>
              <InfoColumn>
                <InfoBlock>
                  <Typography variant="body2" color="text.secondary">
                    Total volume
                  </Typography>
                  <Typography variant="body1" color="success.main">
                    +0.24689
                  </Typography>
                </InfoBlock>
                <InfoBlock>
                  <Typography variant="body2" color="text.secondary">
                    Avg. price
                  </Typography>
                  <Typography variant="body1">29 493</Typography>
                </InfoBlock>
              </InfoColumn>
              <InfoColumn Continuing exactly where we left off with the AdvancedTradingPanel.tsx file content:

                <InfoBlock>
                  <Typography variant="body2" color="text.secondary">
                    PnL
                  </Typography>
                  <Typography variant="body1" color="success.main">
                    +404.29$
                  </Typography>
                </InfoBlock>
                <InfoBlock>
                  <Typography variant="body2" color="text.secondary">
                    RR ratio
                  </Typography>
                  <Typography variant="body1" color="warning.main">
                    1.76
                  </Typography>
                </InfoBlock>
              </InfoColumn>
            </InfoPanel>

            <Box>
              <MainTradeButton
                variant="contained"
                sx={{ backgroundColor: '#FF3B30', '&:hover': { backgroundColor: '#E63529' } }}
              >
                SELL MARKET
                <Typography variant="caption" display="block">
                  29 121.73
                </Typography>
              </MainTradeButton>
              <SideButtonsContainer>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'rgba(255, 59, 48, 0.3)',
                    '&:hover': { backgroundColor: 'rgba(255, 59, 48, 0.4)' },
                  }}
                >
                  ASK
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'rgba(255, 59, 48, 0.3)',
                    '&:hover': { backgroundColor: 'rgba(255, 59, 48, 0.4)' },
                  }}
                >
                  BID
                </Button>
              </SideButtonsContainer>
            </Box>
          </TradeButtons>
        </Box>

        <PositionManagement>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="subtitle2">Position Management</Typography>
            <Typography variant="body2">%</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary">
              Position size:
            </Typography>
            <Typography variant="body1">1000 BAKE</Typography>
          </Box>
          <ButtonGroup fullWidth sx={{ mb: 2 }}>
            {['10', '25', '50', '75', '100'].map((value) => (
              <Button
                key={value}
                onClick={() => setClosePercentage(value)}
                sx={{
                  backgroundColor:
                    closePercentage === value ? 'primary.main' : 'transparent',
                  color: closePercentage === value ? '#051118' : '#fff',
                  fontSize: '0.75rem',
                  padding: '4px',
                }}
              >
                {value}
              </Button>
            ))}
          </ButtonGroup>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mb: 2, fontSize: '0.875rem' }}
          >
            Close position
          </Button>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Profit will be 2.2268 USDT (inclusive of est. closing fees)
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ fontSize: '0.875rem' }}
          >
            Cancel all orders
          </Button>
        </PositionManagement>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={currentTab}
          onChange={(_, newValue) => setCurrentTab(newValue)}
          sx={{
            '& .MuiTab-root': {
              color: '#fff',
              '&.Mui-selected': {
                color: '#0A84FF',
              },
            },
          }}
        >
          <Tab label="PnL" />
          <Tab label="Auto SL/TP" />
          <Tab label="Statistic" />
          <Tab label="Settings" />
        </Tabs>
      </Box>
      <TabPanel>
        {renderTabContent()}
      </TabPanel>

      <Box sx={{ mt: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<ChevronLeft />}
          onClick={onSimpleClick}
          sx={{ 
            color: '#fff', 
            borderColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)'
            }
          }}
        >
          Open simple panel
        </Button>
      </Box>

      <VolumeSettingsDialog
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        defaultValues={volumePresets}
        onSave={handleSavePresets}
      />
    </PanelContainer>
  );
};