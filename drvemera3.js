/** Объявление элемента (namespace)*/ 
goog.provide("drvemera3.Plugin");
/** Объявление необходимости элемента*/
goog.require('drvemera3.view');

drvemera3.Plugin = function () { };
goog.addSingletonGetter(drvemera3.Plugin);

drvemera3.Plugin.prototype.Info = {
    // файл стилей
    css: "css/app.css",
    // файл языков
    locale: "drvemera3.locale",
    // перечень обслуживаемых типов
    guid: ["est.by:Bus.Emera3DrvClientImpl"],
    // имя дллки
    dll: "Emera3Drv",
    // имя типа Общих настроек
    sstype: "Sys.Services.Drv.Emera3SharedSetting",
    // иконка для списка (активен)
    image: 'images/emera3.png',
    // иконка для списка (не активен)
    imagedisable: 'images/emera3disable.png',
    // заголовок плагина
    title: function () { return drvemera3.locale.SR.TITLE; },
    // формы для редактирования
    forms: function (selectService) {
        var inst = drvemera3.view.getInstance();
        return inst.getForms(selectService);
    },
    // иконка выбора типа
    typeIcon: function () {
        return 'emera3Type';
    },
    // модель
    model: function () {
        return drvemera3.model.getInstance();
    },
    // заглушка
    fixture: function () {
        return drvemera3.fixture.getInstance();
    },
    // логика
    controller: function () {
        return drvemera3.controller.getInstance();
    },
    // формы для автоконфигурирования
    autoconfigForms: function (selectService) {
        return selectService.getSearchTemplate(selectService);
    },
    sharedSettings: function(selectService){
        var inst = drvemera3.view.getInstance();
        return inst.getSharedSettingsForms(selectService);
    },
	bus: "client"
 };



