/** Объявление элемента (namespace)*/ 
goog.provide('drvemera3.controller');
goog.require('drvemera3.model');

drvemera3.controller = function () { 
    //base.driver(this, this.toString);
};
goog.addSingletonGetter(drvemera3.controller);

/**
* Обертка над элементом
*/
drvemera3.controller.prototype.WrapItem = function (item) {
};


/**
* Подготовка при отправке
*/
drvemera3.controller.prototype.CleanItem = function (item) {
};
/**
* Вернуть признак On/Off по логике
*/
drvemera3.controller.prototype.toOnOff = function (value) {
    if (value == true) {
        return "on";
    }
    return "off";
}

/**
* Вернуть строковое представление объекта
* @param item {object} текущий обект для которого нужно описание
*/
drvemera3.controller.prototype.toString = function () {
    var ctl = drvemera3.controller.getInstance();
    var str = "" + this.Address;
    if (this.IsAutoconfig != true) {
        //str +=    ", " + ctl.toOnOff(this.EnblTimeCorr)
                //+ ", " + ctl.toOnOff(this.Enbl3min)
                //+ ", " + ctl.toOnOff(this.EnblEvents);
                //+ ", " + ctl.toOnOff(this.EnblIm);    
    }
    return str;

};