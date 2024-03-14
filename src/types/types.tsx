export interface ThemeData {
    brandId: string;
    createdAt: string;
    payLoad: { 
        LockerController: LockerControllerData;
    };
    projectId: string;
    title: string ;
    type: string;
    updatedAt: string;
    _id: string ;
}

export interface LockerControllerData {
    backgroundGroup: {
        header: string;
        body: string;
        footer: string;
    };
    text: {
        header: string;
        footer: string;
        component: string;
        button: string;
    };
    button: {
        primaryButton: {
            start: string;
            end: string;
        };
        secondaryButton: {
            start: string;
            end: string;
        };
    };
    language: {
        activeLanguage: {
            start: string;
            end: string;
            text: string;
        };
        inactiveLanguage: {
            start: string;
            end: string;
            text: string;
        }
    }
    spinner: {
        color: string;
        popupColor: string;
    };
    
    buttonPinCode: {
        start: string;
        end: string;
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
export interface ColorPickerProps {
    themesData: ThemeData;
  }