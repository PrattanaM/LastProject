import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ButtonStyle {
  border: string;
  color: string;
  background: string;
  marginRight: string;
}

function App() {
  const [buttonAStyle, setButtonAStyle] = useState<ButtonStyle>({
    border: '2px solid red',
    color: 'inherit',
    background: 'transparent',
    marginRight: '10px',
  });

  const [buttonBStyle, setButtonBStyle] = useState<ButtonStyle>({
    border: '2px solid red',
    color: 'inherit',
    background: 'transparent',
    marginRight: '10px',
  });

  const [buttonCStyle, setButtonCStyle] = useState<ButtonStyle>({
    border: '2px solid red',
    color: 'inherit',
    background: 'transparent',
    marginRight: '10px',
  });

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorE2, setAnchorE2] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const handleClose2 = () => {
    setAnchorE2(null);
    setButtonAStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonBStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
    setButtonCStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const open2 = Boolean(anchorE2);
  const id2 = open2 ? 'simple-popover' : undefined;

  const handleButtonClick = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick(event);
  };

  const handleButtonClick2 = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: { style: ButtonStyle; setter: React.Dispatch<React.SetStateAction<ButtonStyle>> }[],
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // ตรวจสอบว่าปุ่มที่ถูกกดเป็นปุ่มที่มี border เป็น 2px solid red หรือไม่
    const isSameButton = buttonStyle.border === '2px solid red';

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: '2px solid red',
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: '0px solid red',
      }));
    });

    handleClick2(event);
  };

  return (
    <div>
      <Button
        variant="outlined"
        style={buttonAStyle}
        onClick={(event) => handleButtonClick2(buttonAStyle, setButtonAStyle, [
          { style: buttonBStyle, setter: setButtonBStyle },
          { style: buttonCStyle, setter: setButtonCStyle },
        ], event)}
      >
        A
      </Button>

      <Button
        variant="outlined"
        style={buttonBStyle}
        onClick={(event) => handleButtonClick(buttonBStyle, setButtonBStyle, [
          { style: buttonAStyle, setter: setButtonAStyle },
          { style: buttonCStyle, setter: setButtonCStyle },
        ], event)}
      >
        B
      </Button>

      <Button
        variant="outlined"
        style={buttonCStyle}
        onClick={(event) => handleButtonClick(buttonCStyle, setButtonCStyle, [
          { style: buttonAStyle, setter: setButtonAStyle },
          { style: buttonBStyle, setter: setButtonBStyle },
        ], event)}
      >
        C
      </Button>

      <Popover
        id={id2}
        open={open2}
        anchorEl={anchorE2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>GG.</Typography>
      </Popover>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Content of the Popover.</Typography>
      </Popover>
    </div>
  );
}

export default App;