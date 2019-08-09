/** Объявление элемента (namespace)*/ 
goog.provide('drvemera3.model');
/** Объявление необходимости элемента*/
goog.require('drvemera3.fixture');

/**
 * Библиотека для работы с группами пользователями 
*/
drvemera3.model = function () {
    this._ex = goog.data.exchange.getInstance();
};
goog.addSingletonGetter(drvemera3.model);

/**
* Канал обмена.
*/
drvemera3.model.prototype._ex = null;
/**
* Сохранить настройки
*/
drvemera3.model.prototype.saveSetting = function (context, item) {
	var saveBusContext = config.databusplug.model.getInstance().saveBusContext(context, item);
    appmodel.getInstance().saveSetting(saveBusContext, item);
};
/** 
* Загрузить настройки
* @param context контекст
* @param item объект
*/
drvemera3.model.prototype.loadSetting = function (
    context,
    item) {
    try {
        if (item.IsAutoconfig == true) {
            context.run(item);
            return;
        }
       	var instance = config.databusplug.model.getInstance();
		instance.loadBus(context,item);


    } catch (err) {
        alert(err);
        context.run(item);
    }
};

/** 
* Загрузить настройки для списка
* @param context контекст
* @param item объект
*/
drvemera3.model.prototype.loadSettingForList = function (
    context,
    item) {
    appmodel.getInstance().loadSetting(context,item);
};