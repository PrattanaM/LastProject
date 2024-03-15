import { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import BackspaceIcon from '@mui/icons-material/Backspace';

export default function KeyNumber(): JSX.Element {
  const [inputValues, setInputValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleNumberButtonClick = (number: number) => {
    const emptyIndex = inputValues.findIndex((value) => value === "");
    if (emptyIndex !== -1) {
      handleInputChange(emptyIndex, number.toString());
    }
  };

  const handleDeleteButtonClick = () => {
    const lastNonEmptyIndex = inputValues.reduceRight((acc, value, index) => {
      if (value !== "" && acc === -1) {
        return index;
      }
      return acc;
    }, -1);

    if (lastNonEmptyIndex !== -1) {
      handleInputChange(lastNonEmptyIndex, "");
    }
  };

  return (
    <>
      <Box
        width="510px"
        height="230px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="413px"
          height="50px"
        >
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <Box
              key={index}
              width="30px"
              height="45px"
              borderRadius="4px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginX="4px"
              bgcolor="#132231"
              color="#ffffff"
            >
              {inputValues[index]}
            </Box>
          ))}
        </Box>
        
        <Box width="413px" height="165px">
          <Box
            width="413px"
            height="41.25px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {[1, 2, 3].map((number) => (
              <Button
                key={number}
                onClick={() => handleNumberButtonClick(number)}
                style={{
                  width: "20px",
                  height: "30px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  backgroundColor: "#1D1D1D",
                  color: "#FFFFFF",
                  borderRadius: "20%",
                  marginLeft: '5px',
                }}
              >
                {number}
              </Button>
            ))}
          </Box>
          <Box
            width="413px"
            height="41.25px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {[4, 5, 6].map((number) => (
              <Button
                key={number}
                variant="contained"
                onClick={() => handleNumberButtonClick(number)}
                style={{
                  width: "20px",
                  height: "30px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  backgroundColor: "#1D1D1D",
                  color: "#FFFFFF",
                  borderRadius: "20%",
                  marginLeft: '5px',
                }}
              >
                {number}
              </Button>
            ))}
          </Box>
          <Box
            width="413px"
            height="41.25px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {[7, 8, 9].map((number) => (
              <Button
                key={number}
                variant="contained"
                onClick={() => handleNumberButtonClick(number)}
                style={{
                  width: "20px",
                  height: "30px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  backgroundColor: "#1D1D1D",
                  color: "#FFFFFF",
                  borderRadius: "20%",
                  marginLeft: '5px',
                }}
              >
                {number}
              </Button>
            ))}
          </Box>
          <Box
            width="413px"
            height="41.25px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              style={{
                width: "20px",
                height: "30px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "rgba(29, 29, 29, 0.3)",
                color: "#FFFFFF",
                borderRadius: "20%",
                marginLeft: '5px',
              }}
            ></Button>
            <Button
              variant="contained"
              onClick={() => handleNumberButtonClick(0)}
              style={{
                width: "20px",
                height: "30px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "#1D1D1D",
                color: "#FFFFFF",
                borderRadius: "20%",
                marginLeft: '5px',
              }}
            >
              0
            </Button>
            <Button
              variant="contained"
              onClick={handleDeleteButtonClick}
              style={{
                width: "20px",
                height: "30px",
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "rgba(29, 29, 29, 0.3)",
                color: "#FFFFFF",
                borderRadius: "20%",
                marginLeft: '5px',
              }}
            >
              <BackspaceIcon style={{ width: '20px', height: '20px' }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}