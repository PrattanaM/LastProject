import { create } from 'zustand';
import { RGBColor } from 'react-color';
import { hexToRgb } from './utils';

interface ColorStore {
    mainBackground: RGBColor;
    background: RGBColor;
    bottomBackground: RGBColor;

    textComponent: RGBColor;
    textMainBackground: RGBColor;
    textBackground: RGBColor;
    textButton: RGBColor;

    primaryButtonStart: RGBColor;
    primaryButtonEnd: RGBColor;

    secondaryButtonStart: RGBColor;
    secondaryButtonEnd: RGBColor;

    activeLanguageStart: RGBColor;
    activeLanguageEnd: RGBColor;
    activeLanguageText: RGBColor;

    inactiveLanguageStart: RGBColor;
    inactiveLanguageEnd: RGBColor;
    inactiveLanguageText: RGBColor;

    spinnerColorR: RGBColor;
    spinnerPopupColorR: RGBColor;

    buttonPinCodeStart: RGBColor;
    buttonPinCodeEnd: RGBColor;

    textPinCode: RGBColor;

    setMainBackground: (color: RGBColor) => void;
    setBackground: (color: RGBColor) => void;
    setBottomBackground: (color: RGBColor) => void;

    setTextComponent: (color: RGBColor) => void;
    setTextMainBackground: (color: RGBColor) => void;
    setTextBackground: (color: RGBColor) => void;
    setTextButton: (color: RGBColor) => void;

    setPrimaryButtonStart: (color: RGBColor) => void;
    setPrimaryButtonEnd: (color: RGBColor) => void;

    setSecondaryButtonStart: (color: RGBColor) => void;
    setSecondaryButtonEnd: (color: RGBColor) => void;

    setActiveLanguageStart: (color: RGBColor) => void;
    setActiveLanguageEnd: (color: RGBColor) => void;
    setActiveLanguageText: (color: RGBColor) => void;

    setInactiveLanguageStart: (color: RGBColor) => void;
    setInactiveLanguageEnd: (color: RGBColor) => void;
    setInactiveLanguageText: (color: RGBColor) => void;

    setSpinnerColorR: (color: RGBColor) => void;
    setSpinnerPopupColorR: (color: RGBColor) => void;

    setButtonPinCodeStart: (color: RGBColor) => void;
    setButtonPinCodeEnd: (color: RGBColor) => void;

    setTextPinCode: (color: RGBColor) => void;
}

export const useColorStore = create<ColorStore>((set) => ({
    mainBackground: hexToRgb(''),
    background: hexToRgb(''),
    bottomBackground: hexToRgb(''),

    textComponent: hexToRgb(''),
    textMainBackground: hexToRgb(''),
    textBackground: hexToRgb(''),
    textButton: hexToRgb(''),

    primaryButtonStart: hexToRgb(''),
    primaryButtonEnd: hexToRgb(''),

    secondaryButtonStart: hexToRgb(''),
    secondaryButtonEnd: hexToRgb(''),

    activeLanguageStart: hexToRgb(''),
    activeLanguageEnd: hexToRgb(''),
    activeLanguageText: hexToRgb(''),

    inactiveLanguageStart: hexToRgb(''),
    inactiveLanguageEnd: hexToRgb(''),
    inactiveLanguageText: hexToRgb(''),

    spinnerColorR: hexToRgb(''),
    spinnerPopupColorR: hexToRgb(''),

    buttonPinCodeStart: hexToRgb(''),
    buttonPinCodeEnd: hexToRgb(''),

    textPinCode: hexToRgb(''),

    setMainBackground: (color) => set({ mainBackground: color }),
    setBackground: (color) => set({ background: color }),
    setBottomBackground: (color) => set({ bottomBackground: color }),

    setTextComponent: (color) => set({ textComponent: color }),
    setTextMainBackground: (color) => set({ textMainBackground: color }),
    setTextBackground: (color) => set({ textBackground: color }),
    setTextButton: (color) => set({ textButton: color }),

    setPrimaryButtonStart: (color) => set({ primaryButtonStart: color }),
    setPrimaryButtonEnd: (color) => set({ primaryButtonEnd: color }),

    setSecondaryButtonStart: (color) => set({ secondaryButtonStart: color }),
    setSecondaryButtonEnd: (color) => set({ secondaryButtonEnd: color }),

    setActiveLanguageStart: (color) => set({ activeLanguageStart: color }),
    setActiveLanguageEnd: (color) => set({ activeLanguageEnd: color }),
    setActiveLanguageText: (color) => set({ activeLanguageText: color }),

    setInactiveLanguageStart: (color) => set({ inactiveLanguageStart: color }),
    setInactiveLanguageEnd: (color) => set({ inactiveLanguageEnd: color }),
    setInactiveLanguageText: (color) => set({ inactiveLanguageText: color }),

    setSpinnerColorR: (color) => set({ spinnerColorR: color }),
    setSpinnerPopupColorR: (color) => set({ spinnerPopupColorR: color }),

    setButtonPinCodeStart: (color) => set({ buttonPinCodeStart: color }),
    setButtonPinCodeEnd: (color) => set({ buttonPinCodeEnd: color }),

    setTextPinCode: (color) => set({ textPinCode: color }),

    updateColors: async () => {
        try {
            const response = await fetch('https://api-dev2.keyspace.tech/themes?type=locker-controller');
            const data = await response.json();
            set((state) => ({
                ...state,
                mainBackgroundColor: hexToRgb(data.mainBackgroundColor),
                background: hexToRgb(data.background),
                bottomBackgroundColor: hexToRgb(data.bottomBackgroundColor),
                textComponent: hexToRgb(data.textComponent),
                textMainBackground: hexToRgb(data.textMainBackground),
                textBackground: hexToRgb(data.textBackground),
                textButton: hexToRgb(data.textButton),
                primaryButtonStart: hexToRgb(data.primaryButtonStart),
                primaryButtonEnd: hexToRgb(data.primaryButtonEnd),
                secondaryButtonStart: hexToRgb(data.secondaryButtonStart),
                secondaryButtonEnd: hexToRgb(data.secondaryButtonEnd),
                activeLanguageStart: hexToRgb(data.activeLanguageStart),
                activeLanguageEnd: hexToRgb(data.activeLanguageEnd),
                activeLanguageText: hexToRgb(data.activeLanguageText),
                inactiveLanguageStart: hexToRgb(data.inactiveLanguageStart),
                inactiveLanguageEnd: hexToRgb(data.inactiveLanguageEnd),
                inactiveLanguageText: hexToRgb(data.inactiveLanguageText),
                spinnerColor: hexToRgb(data.spinnerColor),
                spinnerPopupColor: hexToRgb(data.spinnerPopupColor),
                buttonPinCodeStart: hexToRgb(data.buttonPinCodeStart),
                buttonPinCodeEnd: hexToRgb(data.buttonPinCodeEnd),
                textPinCode: hexToRgb(data.textPinCode),
            }));
        } catch (error) {
            console.error('Error updating colors:', error);
        }
    },
}));
