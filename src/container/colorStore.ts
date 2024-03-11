import { create } from 'zustand';
import { RGBColor } from 'react-color';
import { hexToRgb } from './utils';

interface ColorStore {
    mainBackgroundColor: RGBColor;
    background: RGBColor;
    bottomBackgroundColor: RGBColor;

    inComponent: RGBColor;
    textOnMainBackground: RGBColor;
    textOnBackground: RGBColor;

    themeColorEnd: RGBColor;
    themeColorStart: RGBColor;
    textButton: RGBColor;

    idelColorEnd: RGBColor;
    idelColorStart: RGBColor;
    inUseColorStart: RGBColor;
    inUseColorEnd: RGBColor;
    textInLangBtInUse: RGBColor;
    textInLangBtIdel: RGBColor;

    spinnerColor: RGBColor;
    spinnerPopupColor: RGBColor;

    btPinColorEnd: RGBColor;
    btPinColorStart: RGBColor;
    pinInputColor: RGBColor;

    icLockerTint: RGBColor;

    setMainBackgroundColor: (color: RGBColor) => void;
    setBackground: (color: RGBColor) => void;
    setBottomBackgroundColor: (color: RGBColor) => void;

    setInComponent: (color: RGBColor) => void;
    setTextOnMainBackground:  (color: RGBColor) => void;
    setTextOnBackground: (color: RGBColor) => void;

    setThemeColorEnd: (color: RGBColor) => void;
    setThemeColorStart: (color: RGBColor) => void;
    setTextButton: (color: RGBColor) => void;

    setIdelColorEnd: (color: RGBColor) => void;
    setIdelColorStart: (color: RGBColor) => void;
    setInUseColorStart: (color: RGBColor) => void;
    setInUseColorEnd: (color: RGBColor) => void;
    setTextInLangBtInUse: (color: RGBColor) => void;
    setTextInLangBtIdel: (color: RGBColor) => void;

    setSpinnerColor: (color: RGBColor) => void;
    setSpinnerPopupColor: (color: RGBColor) => void;

    setBtPinColorEnd: (color: RGBColor) => void;
    setBtPinColorStart: (color: RGBColor) => void;
    setPinInputColor: (color: RGBColor) => void;

    setIcLockerTint: (color: RGBColor) => void;
}

export const useColorStore = create<ColorStore>((set) => ({
    mainBackgroundColor: hexToRgb('#1A1A1D'),
    background: hexToRgb('#27455E'),
    bottomBackgroundColor: hexToRgb('#87613F'),

    inComponent: hexToRgb('#FFFFFF'),
    textOnMainBackground: hexToRgb('#00FFFF'),
    textOnBackground: hexToRgb('#FFF000'),

    themeColorEnd: hexToRgb('#FFB258'),
    themeColorStart: hexToRgb('#3105AB'),
    textButton: hexToRgb('#FFFFFF'),

    idelColorEnd: hexToRgb('#808080'),
    idelColorStart: hexToRgb('#808080'),
    inUseColorStart: hexToRgb('#45A735'),
    inUseColorEnd: hexToRgb('#00FCCC'),
    textInLangBtInUse: hexToRgb('#FFFFFF'),
    textInLangBtIdel: hexToRgb('#9A999B'),

    spinnerColor: hexToRgb('#FFCCCC'),
    spinnerPopupColor: hexToRgb('#999DDD'),

    btPinColorEnd: hexToRgb('#404040'),
    btPinColorStart: hexToRgb('#0D0D0D'),
    pinInputColor: hexToRgb('#1E1E20'),

    icLockerTint: hexToRgb('#3C3B43'),


    setMainBackgroundColor: (color) => set({ mainBackgroundColor: color }),
    setBackground: (color) => set({ background: color }),
    setBottomBackgroundColor: (color) => set({ bottomBackgroundColor: color }),

    setInComponent: (color) => set({ inComponent: color }),
    setTextOnMainBackground:  (color) => set({ textOnMainBackground : color }),
    setTextOnBackground: (color) => set({ textOnBackground: color }),

    setThemeColorEnd: (color) => set({ themeColorEnd: color }),
    setThemeColorStart: (color) => set({ themeColorStart: color }),
    setTextButton: (color) => set({ textButton: color }),

    setIdelColorEnd: (color) => set({ idelColorEnd: color }),
    setIdelColorStart: (color) => set({ idelColorStart: color }),
    setInUseColorStart: (color) => set({ inUseColorStart: color }),
    setInUseColorEnd: (color) => set({ inUseColorEnd: color }),
    setTextInLangBtInUse: (color) => set({ textInLangBtInUse: color }),
    setTextInLangBtIdel: (color) => set({ textInLangBtIdel: color }),

    setSpinnerColor: (color) => set({ spinnerColor: color }),
    setSpinnerPopupColor: (color) => set({ spinnerPopupColor: color }),

    setBtPinColorEnd: (color) => set({ btPinColorEnd: color }),
    setBtPinColorStart: (color) => set({ btPinColorStart: color }),
    setPinInputColor: (color) => set({ pinInputColor: color }),

    setIcLockerTint: (color) => set({ icLockerTint: color }),
}));
