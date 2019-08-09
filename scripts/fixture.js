/** Объявление элемента (namespace)*/ 
goog.provide('drvemera3.fixture');
goog.require('goog.array');
/** ожидаемые данные по пользователям*/
drvemera3.fixture = function () {
    
};
goog.addSingletonGetter(drvemera3.fixture);

/**
* Болванка на создание нового объекта для автоконфига, 
* обязательно заполнить все возможные поля
* @param mode {bool} true= просто взять объект для создания, false= для построения mapping
*/
drvemera3.fixture.prototype.autoconfigInit = function (mode) {
    var obj = {
        Address: "1-255"
    }
    return obj;
};

drvemera3.fixture.prototype.getShared = function () {
    drvemera3.fixture.initEnums();
    return goog.json.serialize({
        "EnblCounterTariff1": true,
        "EnblCounterTariff2": true,
        "EnblCounterTariff3": true,
        "EnblCounterTariff4": true,
        "EnblCounterTariff5": true,
        "EnblCounterTariff6": true,
        "EnblCounterTariff7": true,
        "EnblCounterTariff8": true,
        "Enbl30min": true,

        "EnblTimeCorr": true,        
        "EnblEvents": false,
        "EnblIm": false,        
        
        "Arch": 0,
        "Im": 0
    });
};
drvemera3.fixture.prototype.initShared = function (mode) {
    var obj = {
        Id: 0,
        Name: "Setting Emera3",
        SettingShared: {
            Body: this.getShared()
        },
        TypeGuid: drvemera3.Plugin.getInstance().Info.guid[0]
    };
    return obj;
};

/**
* Болванка на создание нового объекта, обязательно заполнить все
* возможные поля
* @param mode {bool} true= просто взять объект для создания, false= для построения mapping
*/
drvemera3.fixture.prototype.init = function (mode) 
{
    drvemera3.fixture.initEnums();
    var obj = {
        Id:{ IdInt: 100100 },
        Active: true,                             
        DisplayName: "EMera3",        
        SettingContent: {
            Body: "{\"Address\":1,\"Psw\":\"\"}"
        },
        SettingShared: {
            Body: this.getShared()
        },
        TypeGuid: drvemera3.Plugin.getInstance().Info.guid[0]
    };
	return obj;
};


/**
* Зарегистрировать Enum c локализованными полями.
* Регистрация должна проходить через функцию, т.к. в чистом fixture
* ничего не известно про локаль.
* Регистрация проходит только если енума нет в объекте
*/
drvemera3.fixture.initEnums = function () {
    // зарегистрировать enum, как "drvsem2.EqSchMode"
    base.ENUMS.reg(
        // объект в котром регистрируем Enum
        drvemera,
        // имя регистрируемого Enum
        "EmeraProtectLevel",
        // �?нициализация Enum
        {
            None: [2, drvemera3.locale.SR.PL_NONE],
            Base: [0, drvemera3.locale.SR.PL_BASE]
        });
}


    