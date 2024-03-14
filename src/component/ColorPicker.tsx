import React, { useState, useEffect } from "react";
import { useColorStore } from "../container/colorStore";
import ColorPickerTab from "../container/ColorPickerTab";
import CurrentDate from "../container/DayTime";
import ImageHandler from "../container/ImageHandler";
import KeyNumber from "../container/KeyNumber";
import "../styles/ColorPickerStyle.css";
import { ButtonStyle, styleMainBackgroundColorButton, styleBackgroundColorButton, styleForgetButton, styleTHButton, styleENButton, styleDateTextButton, styleFormControlBox, styleHomeIconButton, } from "../styles/ButtonStyle";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Paper, Button, FormControl, MenuItem, Popover } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import getTokens from '../utils/getTokens';
import { ColorPickerProps } from "../types/types";
import { ThemeData } from '../types/types';
import { hexToRgb } from "../container/utils";
import { RGBColor } from "react-color";

const ColorPicker: React.FC<ColorPickerProps> = ({ themesData }) => {

  const [themeDataRGBA, setThemeDataRGBA] = useState({
    mainBackground: hexToRgb(themesData.payLoad.LockerController.backgroundGroup.header),
    backgroundD: hexToRgb(themesData.payLoad.LockerController.backgroundGroup.body),
    bottomBackground: hexToRgb(themesData.payLoad.LockerController.backgroundGroup.footer),

    textComponent: hexToRgb(themesData.payLoad.LockerController.text.component),
    textMainBackground: hexToRgb(themesData.payLoad.LockerController.text.header),
    textBackground: hexToRgb(themesData.payLoad.LockerController.text.footer),
    textButton: hexToRgb(themesData.payLoad.LockerController.text.button),

    primaryButtonStart: hexToRgb(themesData.payLoad.LockerController.button.primaryButton.start),
    primaryButtonEnd: hexToRgb(themesData.payLoad.LockerController.button.primaryButton.end),

    secondaryButtonStart: hexToRgb(themesData.payLoad.LockerController.button.secondaryButton.start),
    secondaryButtonEnd: hexToRgb(themesData.payLoad.LockerController.button.secondaryButton.end),

    activeLanguageStart: hexToRgb(themesData.payLoad.LockerController.language.activeLanguage.start),
    activeLanguageEnd: hexToRgb(themesData.payLoad.LockerController.language.activeLanguage.end),
    activeLanguageText: hexToRgb(themesData.payLoad.LockerController.language.activeLanguage.text),

    inactiveLanguageStart: hexToRgb(themesData.payLoad.LockerController.language.inactiveLanguage.start),
    inactiveLanguageEnd: hexToRgb(themesData.payLoad.LockerController.language.inactiveLanguage.end),
    inactiveLanguageText: hexToRgb(themesData.payLoad.LockerController.language.inactiveLanguage.text),

    spinnerColorR: hexToRgb(themesData.payLoad.LockerController.spinner.color),
    spinnerPopupColorR: hexToRgb(themesData.payLoad.LockerController.spinner.popupColor),
    buttonPinCodeStart: hexToRgb(themesData.payLoad.LockerController.buttonPinCode.start),
    buttonPinCodeEnd: hexToRgb(themesData.payLoad.LockerController.buttonPinCode.end),
    textPinCode: hexToRgb(themesData.payLoad.LockerController.textPinCode),
  });

  const store = useColorStore((state) => ({
    mainBackground: state.mainBackground,
    background: state.background,
    bottomBackground: state.bottomBackground,
    textComponent: state.textComponent,
    textMainBackground: state.textMainBackground,
    textBackground: state.textBackground,
    textButton: state.textButton,
    primaryButtonStart: state.primaryButtonStart,
    primaryButtonEnd: state.primaryButtonEnd,
    secondaryButtonStart: state.secondaryButtonStart,
    secondaryButtonEnd: state.secondaryButtonEnd,
    activeLanguageStart: state.activeLanguageStart,
    activeLanguageEnd: state.activeLanguageEnd,
    activeLanguageText: state.activeLanguageText,
    inactiveLanguageStart: state.inactiveLanguageStart,
    inactiveLanguageEnd: state.inactiveLanguageEnd,
    inactiveLanguageText: state.inactiveLanguageText,
    spinnerColorR: state.spinnerColorR,
    spinnerPopupColorR: state.spinnerPopupColorR,
    buttonPinCodeStart: state.buttonPinCodeStart,
    buttonPinCodeEnd: state.buttonPinCodeEnd,
    textPinCode: state.textPinCode,

    setMainBackground: state.setMainBackground,
    setBackground: state.setBackground,
    setBottomBackground: state.setBottomBackground,

    setTextComponent: state.setTextComponent,
    setTextMainBackground: state.setTextMainBackground,
    setTextBackground: state.setTextBackground,
    setTextButton: state.setTextButton,

    setPrimaryButtonStart: state.setPrimaryButtonStart,
    setPrimaryButtonEnd: state.setPrimaryButtonEnd,

    setSecondaryButtonStart: state.setSecondaryButtonStart,
    setSecondaryButtonEnd: state.setSecondaryButtonEnd,

    setActiveLanguageStart: state.setActiveLanguageStart,
    setActiveLanguageEnd: state.setActiveLanguageEnd,
    setActiveLanguageText: state.setActiveLanguageText,

    setInactiveLanguageStart: state.setInactiveLanguageStart,
    setInactiveLanguageEnd: state.setInactiveLanguageEnd,
    setInactiveLanguageText: state.setInactiveLanguageText,

    setSpinnerColorR: state.setSpinnerColorR,
    setSpinnerPopupColorR: state.setSpinnerPopupColorR,

    setButtonPinCodeStart: state.setButtonPinCodeStart,
    setButtonPinCodeEnd: state.setButtonPinCodeEnd,

    setTextPinCode: state.setTextPinCode,
  }));

  useEffect(() => {
    store.setMainBackground(themeDataRGBA.mainBackground);
    store.setBackground(themeDataRGBA.backgroundD);
    store.setBottomBackground(themeDataRGBA.bottomBackground);
    store.setTextComponent(themeDataRGBA.textComponent);
    store.setTextMainBackground(themeDataRGBA.textMainBackground);
    store.setTextBackground(themeDataRGBA.textBackground);
    store.setTextButton(themeDataRGBA.textButton);
    store.setPrimaryButtonStart(themeDataRGBA.primaryButtonStart);
    store.setPrimaryButtonEnd(themeDataRGBA.primaryButtonEnd);
    store.setSecondaryButtonStart(themeDataRGBA.secondaryButtonStart);
    store.setSecondaryButtonEnd(themeDataRGBA.secondaryButtonEnd);
    store.setActiveLanguageStart(themeDataRGBA.activeLanguageStart);
    store.setActiveLanguageEnd(themeDataRGBA.activeLanguageEnd);
    store.setActiveLanguageText(themeDataRGBA.activeLanguageText);
    store.setInactiveLanguageStart(themeDataRGBA.inactiveLanguageStart);
    store.setInactiveLanguageEnd(themeDataRGBA.inactiveLanguageEnd);
    store.setInactiveLanguageText(themeDataRGBA.inactiveLanguageText);
    store.setSpinnerColorR(themeDataRGBA.spinnerColorR);
    store.setSpinnerPopupColorR(themeDataRGBA.spinnerPopupColorR);
    store.setButtonPinCodeStart(themeDataRGBA.buttonPinCodeStart);
    store.setButtonPinCodeEnd(themeDataRGBA.buttonPinCodeEnd);
    store.setTextPinCode(themeDataRGBA.textPinCode);
  }, [themeDataRGBA]);

  const handleColorChange = (color: RGBColor) => {
    store.setBackground(color);
  };

  const [selectedFloor, setSelectedFloor] = useState<string>("");
  const [selectedResidence, setSelectedResidence] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string>("member");
  const [buttonAStyle, setButtonAStyle] = useState<ButtonStyle>(styleMainBackgroundColorButton);
  const [buttonBStyle, setButtonBStyle] = useState<ButtonStyle>(styleBackgroundColorButton);
  const [buttonCStyle, setButtonCStyle] = useState<ButtonStyle>(styleForgetButton);
  const [buttonDStyle, setButtonDStyle] = useState<ButtonStyle>(styleTHButton);
  const [buttonEStyle, setButtonEStyle] = useState<ButtonStyle>(styleENButton);
  const [buttonFStyle, setButtonFStyle] = useState<ButtonStyle>(styleDateTextButton);
  const [buttonGStyle, setButtonGStyle] = useState<ButtonStyle>(styleFormControlBox);
  const [buttonHStyle, setButtonHStyle] = useState<ButtonStyle>(styleHomeIconButton);
  const [anchorE1, setAnchorE1] = useState<HTMLButtonElement | null>(null);
  const [anchorE2, setAnchorE2] = useState<HTMLButtonElement | null>(null);
  const [anchorE3, setAnchorE3] = useState<HTMLButtonElement | null>(null);
  const [anchorE4, setAnchorE4] = useState<HTMLButtonElement | null>(null);
  const [anchorE5, setAnchorE5] = useState<HTMLButtonElement | null>(null);
  const [anchorE6, setAnchorE6] = useState<HTMLButtonElement | null>(null);
  const [anchorE7, setAnchorE7] = useState<HTMLButtonElement | null>(null);
  const [anchorE8, setAnchorE8] = useState<HTMLButtonElement | null>(null);

  const setButtonStyles = [setButtonAStyle, setButtonBStyle, setButtonCStyle, setButtonDStyle, setButtonEStyle, setButtonFStyle, setButtonGStyle, setButtonHStyle];

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
    console.log(themesData)
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
            backgroundColor: `rgba(
              ${store.background.r}, ${store.background.g},
              ${store.background.b}, ${store.background.a})`,
          }}
        >
          <div
            className="header"
            style={{
              backgroundColor: `rgba(
                ${store.mainBackground.r}, ${store.mainBackground.g}, 
                ${store.mainBackground.b}, ${store.mainBackground.a})`,
            }}
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
                  color: `rgba(${store.textMainBackground.r}, ${store.textMainBackground.g}, ${store.textMainBackground.b}, ${store.textMainBackground.a})`,
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
                      color={store.textMainBackground}
                      onChange={store.setTextMainBackground}
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
                      color={store.mainBackground}
                      onChange={store.setMainBackground}
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
                  background: `linear-gradient(to top, rgba(
                    ${store.inactiveLanguageStart.r}, ${store.inactiveLanguageStart.g}, 
                    ${store.inactiveLanguageStart.b}, ${store.inactiveLanguageStart.a}), 
                  rgba(
                    ${store.inactiveLanguageEnd.r}, ${store.inactiveLanguageEnd.g}, 
                    ${store.inactiveLanguageEnd.b}, ${store.inactiveLanguageEnd.a}))`,
                  color: `rgba(${store.inactiveLanguageText.r}, ${store.inactiveLanguageText.g}, ${store.inactiveLanguageText.b}, ${store.inactiveLanguageText.a})`,
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
                      color={store.inactiveLanguageEnd}
                      onChange={store.setInactiveLanguageEnd}
                    />
                    <div className="popOverBetweenTag">
                      <label>Idel Color Start</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.inactiveLanguageStart}
                      onChange={store.setInactiveLanguageStart}
                    />
                    <div className="popOverBetweenTag">
                      <label>Text In Lang Button Idel Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.inactiveLanguageText}
                      onChange={store.setInactiveLanguageText}
                    />
                  </div>
                </div>
              </Popover>

              <Button
                aria-describedby={id6}
                variant="outlined"
                style={{
                  ...buttonEStyle,
                  background:
                    `linear-gradient(to top, rgba(
                    ${store.activeLanguageStart.r}, ${store.activeLanguageStart.g}, 
                    ${store.activeLanguageStart.b}, ${store.activeLanguageStart.a}), 
                  rgba(
                    ${store.activeLanguageEnd.r}, ${store.activeLanguageEnd.g}, 
                    ${store.activeLanguageEnd.b}, ${store.activeLanguageEnd.a}))`,
                  color: `rgba(
                    ${store.activeLanguageText.r}, ${store.activeLanguageText.g}, 
                    ${store.activeLanguageText.b}, ${store.activeLanguageText.a})`,
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
                      color={store.activeLanguageStart}
                      onChange={store.setActiveLanguageStart}
                    />
                    <div className="popOverBetweenTag">
                      <label>In Use Color End</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.activeLanguageEnd}
                      onChange={store.setActiveLanguageEnd}
                    />
                    <div className="popOverBetweenTag">
                      <label>Text In Lang Button In Use Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.activeLanguageText}
                      onChange={store.setActiveLanguageText}
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
                      color: `rgba(
                        ${store.textBackground.r}, ${store.textBackground.g}, 
                        ${store.textBackground.b}, ${store.textBackground.a})`,
                    }}
                  >
                    Verify passcode
                  </text>
                </div>

                <div className="selectFloorBox">
                  <text
                    className="selectFloorTextStyle"
                    style={{
                      color: `rgba(
                        ${store.textBackground.r}, ${store.textBackground.g}, 
                        ${store.textBackground.b}, ${store.textBackground.a})`,
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
                        backgroundColor: selectedResidence
                          ? `rgba(${store.spinnerPopupColorR.r}, ${store.spinnerPopupColorR.g}, ${store.spinnerPopupColorR.b}, ${store.spinnerPopupColorR.a})`
                          : `rgba(${store.spinnerColorR.r}, ${store.spinnerColorR.g}, ${store.spinnerColorR.b}, ${store.spinnerColorR.a})`,
                        color: `rgba(${store.textComponent.r}, ${store.textComponent.g}, ${store.textComponent.b}, ${store.textComponent.a})`,
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
                      color: `rgba(
                        ${store.textBackground.r}, ${store.textBackground.g}, 
                        ${store.textBackground.b}, ${store.textBackground.a})`,
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
                          ? `rgba(${store.spinnerPopupColorR.r}, ${store.spinnerPopupColorR.g}, ${store.spinnerPopupColorR.b}, ${store.spinnerPopupColorR.a})`
                          : `rgba(${store.spinnerColorR.r}, ${store.spinnerColorR.g}, ${store.spinnerColorR.b}, ${store.spinnerColorR.a})`,
                        color: `rgba(${store.textComponent.r}, ${store.textComponent.g}, ${store.textComponent.b}, ${store.textComponent.a})`,
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
                      color: `rgba(
                        ${store.textBackground.r}, ${store.textBackground.g}, 
                        ${store.textBackground.b}, ${store.textBackground.a})`,
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
                          ? `rgba(${store.spinnerPopupColorR.r}, ${store.spinnerPopupColorR.g}, ${store.spinnerPopupColorR.b}, ${store.spinnerPopupColorR.a})`
                          : `rgba(${store.spinnerColorR.r}, ${store.spinnerColorR.g}, ${store.spinnerColorR.b}, ${store.spinnerColorR.a})`,
                        color: `rgba(${store.textComponent.r}, ${store.textComponent.g}, ${store.textComponent.b}, ${store.textComponent.a})`,
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
                      color={store.textBackground}
                      onChange={store.setTextBackground}
                    />
                    <div className="popOverBetweenTag">
                      <label>Spinner Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.spinnerColorR}
                      onChange={store.setSpinnerColorR}
                    />
                    <div className="popOverBetweenTag">
                      <label>Spinner Popup Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.spinnerPopupColorR}
                      onChange={store.setSpinnerPopupColorR}
                    />
                    <div className="popOverBetweenTag">
                      <label>In Component Color</label>
                    </div>
                    <ColorPickerTab
                      label=""
                      color={store.textComponent}
                      onChange={store.setTextComponent}
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
                        background: `linear-gradient(to bottom, rgba(${store.primaryButtonStart.r}, ${store.primaryButtonStart.g}, ${store.primaryButtonStart.b}, ${store.primaryButtonStart.a}), 
                        rgba(${store.primaryButtonEnd.r}, ${store.primaryButtonEnd.g}, ${store.primaryButtonEnd.b}, ${store.primaryButtonEnd.a}))`,
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
                            color={store.primaryButtonStart}
                            onChange={store.setPrimaryButtonStart}
                          />
                          <div className="popOverBetweenTag">
                            <label>Theme Color End</label>
                          </div>
                          <ColorPickerTab
                            label=""
                            color={store.primaryButtonEnd}
                            onChange={store.setPrimaryButtonEnd}
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
                        color: `rgba(${store.textBackground.r}, ${store.textBackground.g}, ${store.textBackground.b}, ${store.textBackground.a})`,
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
                      background: `linear-gradient(to bottom, rgba(${store.secondaryButtonStart.r}, ${store.secondaryButtonStart.g}, ${store.secondaryButtonStart.b}, ${store.secondaryButtonStart.a}), 
                      rgba(${store.secondaryButtonEnd.r}, ${store.secondaryButtonEnd.g}, ${store.secondaryButtonEnd.b}, ${store.secondaryButtonEnd.a}))`,
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
                          color={store.secondaryButtonStart}
                          onChange={store.setSecondaryButtonStart}
                        />
                        <div className="popOverBetweenTag">
                          <label>Theme Color End</label>
                        </div>
                        <ColorPickerTab
                          label=""
                          color={store.secondaryButtonEnd}
                          onChange={store.setSecondaryButtonEnd}
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