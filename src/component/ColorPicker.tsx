import React, { useState, useEffect } from "react";
import { useColorStore } from "../container/colorStore";
import ColorPickerTab from "../container/ColorPickerTab";
import CurrentDate from "../container/DayTime";
import ImageHandler from "../container/ImageHandler";
import KeyNumber from "../container/KeyNumber";
import "../styles/ColorPickerStyle.css";
import {
  ButtonStyle,
  styleMainBackgroundColorButton,
  styleBackgroundColorButton,
  styleForgetButton,
  styleTHButton,
  styleENButton,
  styleDateTextButton,
  styleFormControlBox,
  styleHomeIconButton,
} from "../styles/ButtonStyle";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Paper, Button, FormControl, MenuItem, Popover } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import getTokens from '../utils/getTokens';

interface ThemeData {
  _id: string;
  brandId: string;
  projectId: string;
  type: string;
  title: string;
  payLoad: {
    LockerController: {
      backgroundGroup: {
        footer: string;
        header: string;
      };
      text: {
        button: string;
        component: string;
        header: string;
      };
      button: {
        primaryButton: {
          end: string;
        };
        secondaryButton: {
          start: string;
          end: string;
        };
      };
      language: {
        inactiveLanguage: {
          text: string;
          start: string;
        };
        activeLanguage: {
          start: string;
          text: string;
        };
      };
      spinner: {
        color: string;
        popupColor: string;
      };
      buttonPinCode: {
        start: string;
        end: string;
      };
      textPinCode: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}

interface ColorPickerProps {
  themesData: ThemeData[];
}


const ColorPicker: React.FC<ColorPickerProps> = ({ themesData }) => {
  const store = useColorStore((state) => ({
    mainBackgroundColor: state.mainBackgroundColor,
    background: state.background,
    inComponent: state.inComponent,
    textOnMainBackground: state.textOnMainBackground,
    textOnBackground: state.textOnBackground,
    themeColorEnd: state.themeColorEnd,
    themeColorStart: state.themeColorStart,
    textButton: state.textButton,
    ideColorEnd: state.idelColorEnd,
    idelColorStart: state.idelColorStart,
    inUseColorStart: state.inUseColorStart,
    inUseColorEnd: state.inUseColorEnd,
    textInLangBtInUse: state.textInLangBtInUse,
    textInLangBtIdel: state.textInLangBtIdel,
    spinnerColor: state.spinnerColor,
    spinnerPopupColor: state.spinnerPopupColor,

    setMainBackgroundColor: state.setMainBackgroundColor,
    setBackground: state.setBackground,
    setInComponent: state.setInComponent,
    setTextOnMainBackground: state.setTextOnMainBackground,
    setTextOnBackground: state.setTextOnBackground,
    setThemeColorEnd: state.setThemeColorEnd,
    setThemeColorStart: state.setThemeColorStart,
    setTextButton: state.setTextButton,
    setIdeColorEnd: state.setIdelColorEnd,
    setIdelColorStart: state.setIdelColorStart,
    setInUseColorStart: state.setInUseColorStart,
    setInUseColorEnd: state.setInUseColorEnd,
    setTextInLangBtInUse: state.setTextInLangBtInUse,
    setTextInLangBtIdel: state.setTextInLangBtIdel,
    setSpinnerColor: state.setSpinnerColor,
    setSpinnerPopupColor: state.setSpinnerPopupColor,
  }));

  const [selectedFloor, setSelectedFloor] = useState<string>("");
  const [selectedResidence, setSelectedResidence] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string>("member");

  const handleSelectChange =
    (key: string) => (event: SelectChangeEvent<string>) => {
      const value = event.target.value;
      switch (key) {
        case "floor":
          setSelectedFloor(value);
          break;
        case "residence":
          setSelectedResidence(value);
          break;
        case "user":
          setSelectedUser(value);
          break;
        default:
          break;
      }
    };

  const [buttonAStyle, setButtonAStyle] = useState<ButtonStyle>(
    styleMainBackgroundColorButton
  );
  const [buttonBStyle, setButtonBStyle] = useState<ButtonStyle>(
    styleBackgroundColorButton
  );
  const [buttonCStyle, setButtonCStyle] =
    useState<ButtonStyle>(styleForgetButton);
  const [buttonDStyle, setButtonDStyle] = useState<ButtonStyle>(styleTHButton);
  const [buttonEStyle, setButtonEStyle] = useState<ButtonStyle>(styleENButton);
  const [buttonFStyle, setButtonFStyle] =
    useState<ButtonStyle>(styleDateTextButton);
  const [buttonGStyle, setButtonGStyle] =
    useState<ButtonStyle>(styleFormControlBox);
  const [buttonHStyle, setButtonHStyle] =
    useState<ButtonStyle>(styleHomeIconButton);

  const [anchorE1, setAnchorE1] = useState<HTMLButtonElement | null>(null);
  const [anchorE2, setAnchorE2] = useState<HTMLButtonElement | null>(null);
  const [anchorE3, setAnchorE3] = useState<HTMLButtonElement | null>(null);
  const [anchorE4, setAnchorE4] = useState<HTMLButtonElement | null>(null);
  const [anchorE5, setAnchorE5] = useState<HTMLButtonElement | null>(null);
  const [anchorE6, setAnchorE6] = useState<HTMLButtonElement | null>(null);
  const [anchorE7, setAnchorE7] = useState<HTMLButtonElement | null>(null);
  const [anchorE8, setAnchorE8] = useState<HTMLButtonElement | null>(null);

  const setButtonStyles = [
    setButtonAStyle,
    setButtonBStyle,
    setButtonCStyle,
    setButtonDStyle,
    setButtonEStyle,
    setButtonFStyle,
    setButtonGStyle,
    setButtonHStyle,
  ];

  const handleClose1 = () => handleClose(setAnchorE1, setButtonStyles);
  const handleClose2 = () => handleClose(setAnchorE2, setButtonStyles);
  const handleClose3 = () => handleClose(setAnchorE3, setButtonStyles);
  const handleClose4 = () => handleClose(setAnchorE4, setButtonStyles);
  const handleClose5 = () => handleClose(setAnchorE5, setButtonStyles);
  const handleClose6 = () => handleClose(setAnchorE6, setButtonStyles);
  const handleClose7 = () => handleClose(setAnchorE7, setButtonStyles);
  const handleClose8 = () => handleClose(setAnchorE8, setButtonStyles);

  const open1 = Boolean(anchorE1);
  const id1 = open1 ? "simple-popover" : undefined;

  const open2 = Boolean(anchorE2);
  const id2 = open2 ? "simple-popover" : undefined;

  const open3 = Boolean(anchorE3);
  const id3 = open3 ? "simple-popover" : undefined;

  const open4 = Boolean(anchorE4);
  const id4 = open4 ? "simple-popover" : undefined;

  const open5 = Boolean(anchorE5);
  const id5 = open5 ? "simple-popover" : undefined;

  const open6 = Boolean(anchorE6);
  const id6 = open6 ? "simple-popover" : undefined;

  const open7 = Boolean(anchorE7);
  const id7 = open7 ? "simple-popover" : undefined;

  const open8 = Boolean(anchorE8);
  const id8 = open8 ? "simple-popover" : undefined;

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    anchorIndex: number
  ) => {
    switch (anchorIndex) {
      case 1:
        setAnchorE1(event.currentTarget);
        break;
      case 2:
        setAnchorE2(event.currentTarget);
        break;
      case 3:
        setAnchorE3(event.currentTarget);
        break;
      case 4:
        setAnchorE4(event.currentTarget);
        break;
      case 5:
        setAnchorE5(event.currentTarget);
        break;
      case 6:
        setAnchorE6(event.currentTarget);
        break;
      case 7:
        setAnchorE7(event.currentTarget);
        break;
      case 8:
        setAnchorE8(event.currentTarget);
        break;
      default:
        break;
    }
  };

  const handleButtonClick = (
    buttonStyle: ButtonStyle,
    setButtonStyle: React.Dispatch<React.SetStateAction<ButtonStyle>>,
    otherButtonStyles: {
      style: ButtonStyle;
      setter: React.Dispatch<React.SetStateAction<ButtonStyle>>;
    }[],
    anchorIndex: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {

    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      border: "2px solid red",
    }));

    otherButtonStyles.forEach(({ style, setter }) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: "0px solid red",
      }));
    });

    handleAnchorClick(event, anchorIndex);
  };

  const handleClose = (
    setAnchorElement: React.Dispatch<
      React.SetStateAction<HTMLButtonElement | null>
    >,
    setButtonStyles: React.Dispatch<React.SetStateAction<ButtonStyle>>[]
  ) => {
    setAnchorElement(null);
    setButtonStyles.forEach((setter) => {
      setter((prevStyle) => ({
        ...prevStyle,
        border: "2px solid red",
      }));
    });
  };

  const [LogoImage, setLogoImage] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleLogoImageChange = (image: string | null) => {
    setLogoImage(image);
  };

  const handleBackgroundImageChange = (image: string | null) => {
    setBackgroundImage(image);
  };

  const [themes, setThemes] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      try {
        const token = await getTokens();
          const response = await axios.get('https://api-dev2.keyspace.tech/themes?type=locker-controller', {
              headers: {
                  Authorization: `Bearer ${token}`,
              }
  });
          
        const themesData = response.data.data.map((theme: any) => {
          return {
              _id: theme._id,
              Data: {
                  brandId: theme.brandId,
                  projectId: theme.projectId,
                  type: theme.type,
                  title: theme.title,
                  payLoad: theme.payLoad,
                  createdAt: theme.createdAt,
                  updatedAt: theme.updatedAt
              }
          };
        });

        themesData.forEach((themeData: any) => {
          const { _id, Data } = themeData;
          const listItem = document.createElement('li');
          listItem.textContent = _id;
          listItem.addEventListener('click', () => handleClick(Data));
          document.getElementById('themesList')?.appendChild(listItem);
      });
      
    } catch (error) {
      console.error('Error fetching data: ', error);
  }
};

const handleClick = (data: any) => {
  console.log('Clicked Theme Data:', data);
};

  return (
    <>
      <Paper className="paperContainer">
        <div
          style={{
            backgroundColor: `rgba(${store.background.r}, ${store.background.g}, ${store.background.b}, ${store.background.a})`,
          }}
        >
          <div
            className="header"
            color={themes.length > 0 ? themes[0].mainBackground : { r: 0, g: 0, b: 0, a: 1 }}
            onChange={(color) => {
              console.log("mainBackground:", color); 
              const updatedThemes = [...themes];
              updatedThemes[0].mainBackground = color;
              setThemes(updatedThemes);
            }}
          >
            {/* Date and Time */}
            <div className="timeBox">
              <div
                className="timeStyle"
                style={{
                  color: `rgba(${store.textOnMainBackground.r}, ${store.textOnMainBackground.g}, ${store.textOnMainBackground.b}, ${store.textOnMainBackground.a})`,
                }}
              >
                <CurrentDate />
              </div>
              <Button
                aria-describedby={id7}
                variant="outlined"
                style={{
                  ...buttonFStyle,
                }}
                onClick={(e) =>
                  handleButtonClick(
                    buttonFStyle,
                    setButtonFStyle,
                    [
                      { style: buttonAStyle, setter: setButtonAStyle },
                      { style: buttonBStyle, setter: setButtonBStyle },
                      { style: buttonCStyle, setter: setButtonCStyle },
                      { style: buttonDStyle, setter: setButtonDStyle },
                      { style: buttonEStyle, setter: setButtonEStyle },
                      { style: buttonGStyle, setter: setButtonGStyle },
                      { style: buttonHStyle, setter: setButtonHStyle },
                    ],
                    7,
                    e
                  )
                }
              ></Button>
              <Popover
                id={id7}
                open={open7}
                anchorEl={anchorE7}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 105 }}
                onClose={handleClose7}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="popOverTextOnMainBackground">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <label>Text On Main Background Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.textOnMainBackground}
                      onChange={store.setTextOnMainBackground}
                    />
                  </div>
                </div>
              </Popover>
            </div>

            {/* Logo */}
            <div className="logoBox">
              <Button
                key={1}
                aria-describedby={id1}
                variant="outlined"
                style={{
                  ...buttonAStyle,
                  backgroundImage: `url(${LogoImage})`,
                }}
                onClick={(e) =>
                  handleButtonClick(
                    buttonAStyle,
                    setButtonAStyle,
                    [
                      { style: buttonBStyle, setter: setButtonBStyle },
                      { style: buttonCStyle, setter: setButtonCStyle },
                      { style: buttonDStyle, setter: setButtonDStyle },
                      { style: buttonEStyle, setter: setButtonEStyle },
                      { style: buttonFStyle, setter: setButtonFStyle },
                      { style: buttonGStyle, setter: setButtonGStyle },
                      { style: buttonHStyle, setter: setButtonHStyle },
                    ],
                    1,
                    e
                  )
                }
              ></Button>
              <Popover
                id={id1}
                open={open1}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 1260 }}
                anchorEl={anchorE1}
                onClose={handleClose1}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="popOverLogo">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <ImageHandler onImageChange={handleLogoImageChange} />
                    </div>
                    <div className="popOverBetweenTag">
                      <label>Main Background Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.mainBackgroundColor}
                      onChange={store.setMainBackgroundColor}
                    />
                  </div>
                </div>
              </Popover>
            </div>

            {/* Change Language */}
            <div className="changeLanguageBox">
              <Button
                aria-describedby={id5}
                variant="outlined"
                style={{
                  ...buttonDStyle,
                  background: `linear-gradient(to top, rgba(${store.idelColorStart.r}, ${store.idelColorStart.g}, ${store.idelColorStart.b}, ${store.idelColorStart.a}), rgba(${store.ideColorEnd.r}, ${store.ideColorEnd.g}, ${store.ideColorEnd.b}, ${store.ideColorEnd.a}))`,
                  color: `rgba(${store.textInLangBtIdel.r}, ${store.textInLangBtIdel.g}, ${store.textInLangBtIdel.b}, ${store.textInLangBtIdel.a})`,
                }}
                onClick={(e) =>
                  handleButtonClick(
                    buttonDStyle,
                    setButtonDStyle,
                    [
                      { style: buttonAStyle, setter: setButtonAStyle },
                      { style: buttonBStyle, setter: setButtonBStyle },
                      { style: buttonCStyle, setter: setButtonCStyle },
                      { style: buttonEStyle, setter: setButtonEStyle },
                      { style: buttonFStyle, setter: setButtonFStyle },
                      { style: buttonGStyle, setter: setButtonGStyle },
                      { style: buttonHStyle, setter: setButtonHStyle },
                    ],
                    5,
                    e
                  )
                }
              >
                TH
              </Button>
              <Popover
                id={id5}
                open={open5}
                anchorEl={anchorE5}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 1260 }}
                onClose={handleClose5}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="popOverChangeLanguage">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <label>Idel Color End</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.ideColorEnd}
                      onChange={store.setIdeColorEnd}
                    />
                    <div className="popOverBetweenTag">
                      <label>Idel Color Start</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.idelColorStart}
                      onChange={store.setIdelColorStart}
                    />
                    <div className="popOverBetweenTag">
                      <label>Text In Lang Button Idel Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.textInLangBtIdel}
                      onChange={store.setTextInLangBtIdel}
                    />
                  </div>
                </div>
              </Popover>

              <Button
                aria-describedby={id6}
                variant="outlined"
                style={{
                  ...buttonEStyle,
                  background: `linear-gradient(to top, rgba(${store.inUseColorStart.r}, ${store.inUseColorStart.g}, ${store.inUseColorStart.b}, ${store.inUseColorStart.a}), rgba(${store.inUseColorEnd.r}, ${store.inUseColorEnd.g}, ${store.inUseColorEnd.b}, ${store.inUseColorEnd.a}))`,
                  color: `rgba(${store.textInLangBtInUse.r}, ${store.textInLangBtInUse.g}, ${store.textInLangBtInUse.b}, ${store.textInLangBtInUse.a})`,
                }}
                onClick={(e) =>
                  handleButtonClick(
                    buttonEStyle,
                    setButtonEStyle,
                    [
                      { style: buttonAStyle, setter: setButtonAStyle },
                      { style: buttonBStyle, setter: setButtonBStyle },
                      { style: buttonCStyle, setter: setButtonCStyle },
                      { style: buttonDStyle, setter: setButtonDStyle },
                      { style: buttonFStyle, setter: setButtonFStyle },
                      { style: buttonGStyle, setter: setButtonGStyle },
                      { style: buttonHStyle, setter: setButtonHStyle },
                    ],
                    6,
                    e
                  )
                }
              >
                EN
              </Button>
              <Popover
                id={id6}
                open={open6}
                anchorEl={anchorE6}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 120, left: 1260 }}
                onClose={handleClose6}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="popOverChangeLanguage">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <label>In Use Color Start</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.inUseColorStart}
                      onChange={store.setInUseColorStart}
                    />
                    <div className="popOverBetweenTag">
                      <label>In Use Color End</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.inUseColorEnd}
                      onChange={store.setInUseColorEnd}
                    />
                    <div className="popOverBetweenTag">
                      <label>Text In Lang Button In Use Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.textInLangBtInUse}
                      onChange={store.setTextInLangBtInUse}
                    />
                  </div>
                </div>
              </Popover>
            </div>
          </div>

          {/* body */}
          <div className="body">
            <div className="backgroundStyle">
              <Button
                aria-describedby={id2}
                variant="outlined"
                style={{
                  ...buttonBStyle,
                  backgroundImage: `url(${backgroundImage})`,
                }}
                onClick={(e) =>
                  handleButtonClick(
                    buttonBStyle,
                    setButtonBStyle,
                    [
                      { style: buttonAStyle, setter: setButtonAStyle },
                      { style: buttonCStyle, setter: setButtonCStyle },
                      { style: buttonDStyle, setter: setButtonDStyle },
                      { style: buttonEStyle, setter: setButtonEStyle },
                      { style: buttonFStyle, setter: setButtonFStyle },
                      { style: buttonGStyle, setter: setButtonGStyle },
                      { style: buttonHStyle, setter: setButtonHStyle },
                    ],
                    2,
                    e
                  )
                }
              ></Button>
              <Popover
                id={id2}
                open={open2}
                anchorEl={anchorE2}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 200, left: 1260 }}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="popOverBackground">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <ImageHandler
                        onImageChange={handleBackgroundImageChange}
                      />
                    </div>
                    <div className="popOverBetweenTag">
                      <label>Background Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.background}
                      onChange={store.setBackground}
                    />
                  </div>
                </div>
              </Popover>
            </div>
            {/* ครึ่งบน */}
            <div className="formControlBox">
              <Button
                aria-describedby={id2}
                variant="outlined"
                className="verifyPasscodeBox"
                style={{
                  ...buttonGStyle,
                }}
                onClick={(e) =>
                  handleButtonClick(
                    buttonGStyle,
                    setButtonGStyle,
                    [
                      { style: buttonAStyle, setter: setButtonAStyle },
                      { style: buttonBStyle, setter: setButtonBStyle },
                      { style: buttonCStyle, setter: setButtonCStyle },
                      { style: buttonDStyle, setter: setButtonDStyle },
                      { style: buttonEStyle, setter: setButtonEStyle },
                      { style: buttonFStyle, setter: setButtonFStyle },
                    ],
                    8,
                    e
                  )
                }
              >
                <div className="verifyPasscodeBox">
                  <text
                    className="verifyPasscodeTextStyle"
                    style={{
                      color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})`,
                    }}
                  >
                    Verify passcode
                  </text>
                </div>

                <div className="selectFloorBox">
                  <text
                    className="selectFloorTextStyle"
                    style={{
                      color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})`,
                    }}
                  >
                    Select Floor
                  </text>
                  <FormControl className="formControlStyle">
                    <Select
                      value={selectedFloor}
                      onChange={handleSelectChange("floor")}
                      className="selectedStyle selectedFloor"
                      style={{
                        fontWeight: "bold",
                        borderRadius: "20px 20px 0 0",
                        backgroundColor: selectedFloor
                          ? `rgba(${store.spinnerPopupColor.r}, ${store.spinnerPopupColor.g}, ${store.spinnerPopupColor.b}, ${store.spinnerPopupColor.a})`
                          : `rgba(${store.spinnerColor.r}, ${store.spinnerColor.g}, ${store.spinnerColor.b}, ${store.spinnerColor.a})`,
                        color: `rgba(${store.inComponent.r}, ${store.inComponent.g}, ${store.inComponent.b}, ${store.inComponent.a})`,
                      }}
                    >
                      <MenuItem value="">
                        <em>⠀</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="selectResidentandUserBox">
                  <text
                    className="selectUserTextStyle"
                    style={{
                      color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})`,
                    }}
                  >
                    Select Residence
                  </text>
                  <FormControl className="formControlStyle">
                    <Select
                      value={selectedResidence}
                      onChange={handleSelectChange("residence")}
                      className="selectedStyle selectedResidence"
                      style={{
                        fontWeight: "bold",
                        backgroundColor: selectedResidence
                          ? `rgba(${store.spinnerPopupColor.r}, ${store.spinnerPopupColor.g}, ${store.spinnerPopupColor.b}, ${store.spinnerPopupColor.a})`
                          : `rgba(${store.spinnerColor.r}, ${store.spinnerColor.g}, ${store.spinnerColor.b}, ${store.spinnerColor.a})`,
                        color: `rgba(${store.inComponent.r}, ${store.inComponent.g}, ${store.inComponent.b}, ${store.inComponent.a})`,
                      }}
                    >
                      <MenuItem value="">
                        <em>⠀</em>
                      </MenuItem>
                      <MenuItem value={"101"}>101</MenuItem>
                      <MenuItem value={"102"}>102</MenuItem>
                      <MenuItem value={"103"}>103</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="selectResidentandUserBox">
                  <text
                    className="selectUserTextStyle"
                    style={{
                      color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})`,
                    }}
                  >
                    Select User
                  </text>
                  <FormControl className="formControlStyle">
                    <Select
                      value={selectedUser}
                      onChange={handleSelectChange("user")}
                      className="selectedStyle selectedUser"
                      style={{
                        fontWeight: "bold",
                        borderRadius: "0 0 20px 20px",
                        backgroundColor: selectedUser
                          ? `rgba(${store.spinnerPopupColor.r}, ${store.spinnerPopupColor.g}, ${store.spinnerPopupColor.b}, ${store.spinnerPopupColor.a})`
                          : `rgba(${store.spinnerColor.r}, ${store.spinnerColor.g}, ${store.spinnerColor.b}, ${store.spinnerColor.a})`,
                        color: `rgba(${store.inComponent.r}, ${store.inComponent.g}, ${store.inComponent.b}, ${store.inComponent.a})`,
                      }}
                      renderValue={(selected) => (
                        <div>
                          <div className="popOverBetweenTag">RESIDENT</div>
                          <div>{selected}</div>
                        </div>
                      )}
                    >
                      <MenuItem value="">
                        <em>⠀</em>
                      </MenuItem>
                      <MenuItem value="member">member</MenuItem>
                      <MenuItem value="VIP">VIP</MenuItem>
                      <MenuItem value="admin">admin</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Button>
              <Popover
                id={id8}
                open={open8}
                anchorEl={anchorE8}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 200, left: 110 }}
                onClose={handleClose8}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="popOverSelectFRU">
                  <div className="popOverMarginStyle">
                    <div className="popOverBetweenTag">
                      <label>Text On Background Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.textOnBackground}
                      onChange={store.setTextOnBackground}
                    />
                    <div className="popOverBetweenTag">
                      <label>Spinner Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.spinnerColor}
                      onChange={store.setSpinnerColor}
                    />
                    <div className="popOverBetweenTag">
                      <label>Spinner Popup Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.spinnerPopupColor}
                      onChange={store.setSpinnerPopupColor}
                    />
                    <div className="popOverBetweenTag">
                      <label>In Component Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.inComponent}
                      onChange={store.setInComponent}
                    />
                  </div>
                </div>
              </Popover>
            </div>

            {/* ครึ่งล่าง */}
            <div className="keyNumberandBottomBox">
              <KeyNumber />
              <div className="bottomBox">
                {/* Forget? Button */}
                <div className="forgetButtonBox">
                  <div className="forgetButtonBoxStyle">
                    <Button
                      variant="contained"
                      style={{
                        ...buttonCStyle,
                        background: `linear-gradient(to bottom, rgba(${store.themeColorStart.r}, ${store.themeColorStart.g}, ${store.themeColorStart.b}, ${store.themeColorStart.a}), rgba(${store.themeColorEnd.r}, ${store.themeColorEnd.g}, ${store.themeColorEnd.b}, ${store.themeColorEnd.a}))`,
                        color: `rgba(${store.textButton.r}, ${store.textButton.g}, ${store.textButton.b}, ${store.textButton.a})`,
                      }}
                      onClick={(e) =>
                        handleButtonClick(
                          buttonCStyle,
                          setButtonCStyle,
                          [
                            { style: buttonAStyle, setter: setButtonAStyle },
                            { style: buttonBStyle, setter: setButtonBStyle },
                            { style: buttonGStyle, setter: setButtonGStyle },
                            { style: buttonDStyle, setter: setButtonDStyle },
                            { style: buttonEStyle, setter: setButtonEStyle },
                            { style: buttonFStyle, setter: setButtonFStyle },
                            { style: buttonHStyle, setter: setButtonHStyle },
                          ],
                          3,
                          e
                        )
                      }
                    >
                      Forget?
                    </Button>
                    <Popover
                      id={id3}
                      open={open3}
                      anchorEl={anchorE3}
                      anchorReference="anchorPosition"
                      anchorPosition={{ top: 340, left: 110 }}
                      onClose={handleClose3}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div className="popOverChangePasscodeandForgetButton">
                        <div className="popOverMarginStyle">
                          <div className="popOverBetweenTag">
                            <label>Theme Color Start</label>
                          </div>
                          <ColorPickerTab
                            label=""
                            color={store.themeColorStart}
                            onChange={store.setThemeColorStart}
                          />
                          <div className="popOverBetweenTag">
                            <label>Theme Color End</label>
                          </div>
                          <ColorPickerTab
                            label=""
                            color={store.themeColorEnd}
                            onChange={store.setThemeColorEnd}
                          />
                          <div className="popOverBetweenTag">
                            <label>Text Button Color</label>
                          </div>
                          <ColorPickerTab
                            label=""
                            color={store.textButton}
                            onChange={store.setTextButton}
                          />
                        </div>
                      </div>
                    </Popover>
                  </div>
                </div>

                {/* Home Icon */}
                <div className="HomeIconBox">
                  <Button
                    aria-describedby={id2}
                    variant="outlined"
                    className="HomeIconButton"
                    style={{ ...buttonHStyle }}
                    onClick={(e) =>
                      handleButtonClick(
                        buttonGStyle,
                        setButtonGStyle,
                        [
                          { style: buttonAStyle, setter: setButtonAStyle },
                          { style: buttonBStyle, setter: setButtonBStyle },
                          { style: buttonCStyle, setter: setButtonCStyle },
                          { style: buttonDStyle, setter: setButtonDStyle },
                          { style: buttonEStyle, setter: setButtonEStyle },
                          { style: buttonFStyle, setter: setButtonFStyle },
                        ],
                        8,
                        e
                      )
                    }
                  >
                    <HomeIcon
                      className="homeIconStyle"
                      style={{
                        color: `rgba(${store.textOnBackground.r}, ${store.textOnBackground.g}, ${store.textOnBackground.b}, ${store.textOnBackground.a})`,
                      }}
                    />
                  </Button>
                </div>

                {/* Change passcode Button */}
                <div className="changePasscodeButtonBoxStyle">
                  <Button
                    variant="contained"
                    style={{
                      ...buttonCStyle,
                      background: `linear-gradient(to bottom, rgba(${store.themeColorStart.r}, ${store.themeColorStart.g}, ${store.themeColorStart.b}, ${store.themeColorStart.a}), rgba(${store.themeColorEnd.r}, ${store.themeColorEnd.g}, ${store.themeColorEnd.b}, ${store.themeColorEnd.a}))`,
                      color: `rgba(${store.textButton.r}, ${store.textButton.g}, ${store.textButton.b}, ${store.textButton.a})`,
                    }}
                    onClick={(e) =>
                      handleButtonClick(
                        buttonCStyle,
                        setButtonCStyle,
                        [
                          { style: buttonAStyle, setter: setButtonAStyle },
                          { style: buttonBStyle, setter: setButtonBStyle },
                          { style: buttonDStyle, setter: setButtonDStyle },
                          { style: buttonEStyle, setter: setButtonEStyle },
                          { style: buttonFStyle, setter: setButtonFStyle },
                          { style: buttonGStyle, setter: setButtonGStyle },
                          { style: buttonHStyle, setter: setButtonHStyle },
                        ],
                        4,
                        e
                      )
                    }
                  >
                    Change passcode
                  </Button>
                  <Popover
                    id={id4}
                    open={open4}
                    anchorEl={anchorE4}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 340, left: 1260 }}
                    onClose={handleClose4}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div className="popOverChangePasscodeandForgetButton">
                      <div className="popOverMarginStyle">
                        <div className="popOverBetweenTag">
                          <label>Theme Color Start</label>
                        </div>
                        <ColorPickerTab
                          label=""
                          color={store.themeColorStart}
                          onChange={store.setThemeColorStart}
                        />
                        <div className="popOverBetweenTag">
                          <label>Theme Color End</label>
                        </div>
                        <ColorPickerTab
                          label=""
                          color={store.themeColorEnd}
                          onChange={store.setThemeColorEnd}
                        />
                        <div className="popOverBetweenTag">
                          <label>Text Button Color</label>
                        </div>
                        <ColorPickerTab
                          label=""
                          color={store.textButton}
                          onChange={store.setTextButton}
                        />
                      </div>
                    </div>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default ColorPicker;