// import { ThemeData } from './types'

export interface ThemeData {
    brandId: string;
    createdAt: string;
    payLoad: { 
        LockerController: Record<string, unknown>;
    };
    projectId: string;
    title: string;
    type: string;
    updatedAt: string;
    _id: string;
}

export interface LockerControllerData {
    backgroundGroup: {
        mainBackground: string;
        background: string;
        bottomBackground: string;
    };
    background: string;
    bottomBackground : string;
    mainBackground: string;
    button: {
        primaryButton: {
            primaryButtonStart: string;
            primaryButtonEnd: string;
        };
    };
    primaryButton: {
        primaryButtonStart: string;
        primaryButtonEnd: string;
    };
    secondaryButton: {
        secondaryButtonStart: string;
        secondaryButtonEnd: string;
    };
    buttonPinCode: {
        buttonPinCodeStart: string;
    };
    spinner: {
        spinnerColor: string;
        spinnerPopupColor: string;
    };
    text: {
        textComponent: string;
        textMainBackground: string;
        textBackground: string;
    };
    textPinCode: string;
}

export interface language {
    activeLanguage: {
        activeLanguageStart: string;
        activeLanguageEnd: string;
        activeLanguageText: string;
    };
    inactiveLanguage: {
        inactiveLanguageStart: string;
        inactiveLanguageEnd: string;
    };

}