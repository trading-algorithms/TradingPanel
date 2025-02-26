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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Switch,
} from '@mui/material';
import { ChevronLeft, Minus, Plus, Settings, X } from 'lucide-react';

const PanelContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0A1929',
  color: '#fff',
  padding: theme.spacing(2),
  width: '300px',
  borderRadius: theme.spacing(1),
  fontFamily: '"Open Sans", sans-serif',
}));

const VolumeSection = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(10, 132, 255, 0.1)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
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

const TradeButtonGroup = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: theme.spacing(1),
}));

const MainTradeButton = styled(Button)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  borderRadius: theme.spacing(0.5),
  '& .MuiTypography-caption': {
    opacity: 0.8,
  },
}));

const SideButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  '& .MuiButton-root': {
    flex: 1,
    minWidth: '80px',
    borderRadius: theme.spacing(0.5),
  },
}));

const InfoPanel = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
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

const ActionButtonsGroup = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  '& .MuiButton-root': {
    width: '80%',
    margin: '0 auto',
  },
}));

const OrderTypeGroup = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

interface TradingPanelProps {
  onClose?: () => void;
  onAdvancedClick?: () => void;
}

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
        <Button onClick={onClose} sx={{ color: '#fff', fontFamily: '"Open Sans", sans-serif' }}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSave(values);
            onClose();
          }}
          variant="contained"
          color="primary"
          sx={{ fontFamily: '"Open Sans", sans-serif' }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const TradingPanel: React.FC<TradingPanelProps> = ({ onClose, onAdvancedClick }) => {
  const [account, setAccount] = useState('Binance: stocks');
  const [volume, setVolume] = useState('0.12345678');
  const [volumePresets, setVolumePresets] = useState([1, 2, 3, 5, 10]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [orderType, setOrderType] = useState<'GTC' | 'DAY'>('GTC');
  const [ocoEnabled, setOcoEnabled] = useState(false);
  const [reverseOrder, setReverseOrder] = useState(false);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const [whole, decimal] = value.split('.');
    if (decimal && decimal.length > 8) {
      setVolume(`${whole}.${decimal.slice(0, 8)}`);
    } else {
      setVolume(value);
    }
  };

  const handleVolumeIncrement = () => {
    const currentValue = parseFloat(volume) || 0;
    setVolume((currentValue + 1).toString());
  };

  const handleVolumeDecrement = () => {
    const currentValue = parseFloat(volume) || 0;
    setVolume(Math.max(0, currentValue - 1).toString());
  };

  const handlePresetClick = (value: number) => {
    setVolume(value.toString());
  };

  const handleSavePresets = (newPresets: number[]) => {
    setVolumePresets(newPresets);
  };

  return (
    <PanelContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle2">Account</Typography>
        <IconButton size="small" onClick={onClose} sx={{ color: '#fff' }}>
          <X size={16} />
        </IconButton>
      </Box>

      <Select
        fullWidth
        value={account}
        onChange={(e) => setAccount(e.target.value as string)}
        size="small"
        sx={{ mb: 2, fontFamily: '"Open Sans", sans-serif' }}
      >
        <MenuItem value="Binance: stocks" sx={{ fontFamily: '"Open Sans", sans-serif' }}>
          Binance: stocks
        </MenuItem>
      </Select>

      <Typography variant="subtitle2" gutterBottom>
        Balance: <span style={{ color: '#fff' }}>999 999 999$</span>
      </Typography>

      <VolumeSection>
        <Typography variant="subtitle2" gutterBottom>
          Trade volume
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton size="small" onClick={handleVolumeDecrement} sx={{ color: '#fff' }}>
            <Minus size={16} />
          </IconButton>
          <TextField
            value={volume}
            onChange={handleVolumeChange}
            size="small"
            type="number"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                },
                '& input': {
                  '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                    appearance: 'none',
                    margin: 0,
                  },
                },
              },
            }}
          />
          <IconButton size="small" onClick={handleVolumeIncrement} sx={{ color: '#fff' }}>
            <Plus size={16} />
          </IconButton>
        </Box>
        <Box display="flex" gap={0.5} mt={1}>
          {volumePresets.map((value) => (
            <VolumeButton
              key={value}
              variant="outlined"
              onClick={() => handlePresetClick(value)}
              sx={{
                textAlign: 'left',
                '& .MuiButton-label': {
                  justifyContent: 'flex-start',
                },
              }}
            >
              {value}
            </VolumeButton>
          ))}
          <SettingsButton onClick={() => setSettingsOpen(true)}>
            <Settings size={16} />
          </SettingsButton>
        </Box>
      </VolumeSection>

      <TradeButtonGroup>
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
      </TradeButtonGroup>

      <InfoPanel>
        <InfoColumn>
          <InfoBlock>
            <Typography variant="body2" color="text.secondary">
              Total volume
            </Typography>
            <Typography variant="body1" color="success.main">
              +0.24689
            </Typography>
            <Typography variant="caption" color="text.secondary">
              BTC
            </Typography>
          </InfoBlock>
          <InfoBlock>
            <Typography variant="body2" color="text.secondary">
              Avg. price
            </Typography>
            <Typography variant="body1">29 493</Typography>
            <Typography variant="caption" color="text.secondary">
              USDT
            </Typography>
          </InfoBlock>
        </InfoColumn>
        <InfoColumn>
          <InfoBlock>
            <Typography variant="body2" color="text.secondary">
              PnL
            </Typography>
            <Typography variant="body1" color="success.main">
              +404.29$
            </Typography>
            <Typography variant="caption" color="text.secondary">
              USD
            </Typography>
          </InfoBlock>
          <InfoBlock>
            <Typography variant="body2" color="text.secondary">
              RR ratio
            </Typography>
            <Typography variant="body1" color="warning.main">
              1.76
            </Typography>
            <Typography variant="caption" color="text.secondary">
              24 / 41
            </Typography>
          </InfoBlock>
        </InfoColumn>
      </InfoPanel>

      <TradeButtonGroup>
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
      </TradeButtonGroup>

      <ActionButtonsGroup>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#0A84FF', '&:hover': { backgroundColor: '#0974E9' } }}
        >
          Cancel all orders
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#0A84FF', '&:hover': { backgroundColor: '#0974E9' } }}
        >
          Close all
        </Button>
      </ActionButtonsGroup>

      <OrderTypeGroup>
        <ButtonGroup
          size="small"
          sx={{
            '& .MuiButton-root': {
              color: '#FFB340',
              '&.active': {
                backgroundColor: 'rgba(255, 179, 64, 0.2)',
              },
            },
          }}
        >
          <Button
            className={orderType === 'GTC' ? 'active' : ''}
            onClick={() => setOrderType('GTC')}
          >
            GTC
          </Button>
          <Button
            className={orderType === 'DAY' ? 'active' : ''}
            onClick={() => setOrderType('DAY')}
          >
            DAY
          </Button>
        </ButtonGroup>
        <Button
          size="small"
          sx={{
            color: ocoEnabled ? '#0A84FF' : 'rgba(255, 255, 255, 0.5)',
            backgroundColor: ocoEnabled ? 'rgba(10, 132, 255, 0.2)' : 'transparent',
            '&:hover': {
              backgroundColor: ocoEnabled ? 'rgba(10, 132, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
            },
          }}
          onClick={() => setOcoEnabled(!ocoEnabled)}
        >
          OCO
        </Button>
      </OrderTypeGroup>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} mb={2}>
        <Typography variant="body2">Reverse Order</Typography>
        <Switch
          checked={reverseOrder}
          onChange={(e) => setReverseOrder(e.target.checked)}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#0A84FF',
              '&:hover': {
                backgroundColor: 'rgba(10, 132, 255, 0.08)',
              },
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#0A84FF',
            },
          }}
        />
      </Box>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<ChevronLeft />}
        onClick={onAdvancedClick}
        sx={{ color: '#fff', borderColor: 'rgba(255, 255, 255, 0.2)' }}
      >
        Open advanced panel
      </Button>

      <VolumeSettingsDialog
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        defaultValues={volumePresets}
        onSave={handleSavePresets}
      />
    </PanelContainer>
  );
};