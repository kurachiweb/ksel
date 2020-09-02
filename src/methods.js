import { elemReport, isNode, isArrayLike, invaildElemName, isElemName, arrayUndupli, spacedValueManip, spacedValueInclude } from './utls';

class Ksel {
    constructor() {
        this._root = document;
    }

    each(callBackFn) {
        if (typeof callBackFn === 'function') {
            this._elems.elems.forEach(callBackFn);
        }
    }

    filter(callBackFn) {
        if (typeof callBackFn === 'function') {
            this._elems.elems = this._elems.elems.filter(callBackFn);
        }
        return this;
    }

    // querySelectorAllなど
    setNodeRoot(node) {
        if (isNode(node)) this._root = node;
        return this;
    }

    // 要素を取得
    get(selector) {
        if (!selector) throw new SyntaxError('Empty DOM selector.');
        let nodeList = [];
        try {
            nodeList = this._root.querySelectorAll(selector);
        } catch (e) {
            throw new SyntaxError('Invaild DOM selector.');
        }
        this._elems = elemReport(nodeList, selector);
        return this;
    }

    // 要素を生成
    new(elemNames) {
        let elemNameArr = [];
        if (Array.isArray(elemNames)) {
            elemNameArr = elemNames;
        } else if (elemNames && typeof elemNames === 'string') {
            elemNameArr = [elemNames];
        }
        const newElems = elemNameArr.map(elemName => document.createElement(elemName));
        this._elems = elemReport(newElems, elemNameArr.join(', '));
        return this;
    }

    // 属性を設定
    // valueがfalseだと属性を削除
    attr(attrName, value = '') {
        let iterate;
        if (typeof value === 'function') {
            iterate = value;
        } else if (value !== false) {
            iterate = elem => elem.setAttribute(attrName, value);
        } else {
            iterate = elem => elem.removeAttribute(attrName);
        }
        this.each(iterate);
        return this;
    }

    // classを追加
    addClass(className) {
        spacedValueManip(this, 'class', className, 'add');
        return this;
    }

    // classを削除
    removeClass(className) {
        spacedValueManip(this, 'class', className, 'remove');
        return this;
    }
    
    // classを追加
    hasClass(className) {
        return spacedValueInclude(this, 'class', className);
    }

    toggleClass(className, force) {
        if (force != undefined) {
            return spacedValueManip(this, 'class', className, force ? 'add' : 'remove');
        } else {
            return spacedValueManip(this, 'class', className, 'toggle');
        }
    }

    text(nodeText) {
        if (Array.isArray(nodeText)) {
            const textArrLen = nodeText.length;
            let textArrIndex = 0;
            this.each(elem => {
                elem.textContent = nodeText[textArrIndex];
                if (textArrIndex <= textArrLen) {
                    textArrIndex = 0;
                } else {
                    textArrIndex++;
                }
            });
            return this;
        } else if (typeof nodeText === 'string') {
            this.each(elem => elem.textContent = nodeText);
            return this;
        } else {
            const textArr = [];
            this.each(elem => textArr.push(elem.textContent));
            return textArr;
        }
    }

    appendTo(targetSelector) {
        const appendElems = this._elems;
        this.get(targetSelector)._elems.elems.forEach(target => {
            appendElems.elems = appendElems.elems.map(elem => elem.cloneNode(1));
            target.append.apply(appendElems.elems);
        });
    }
}

export default Ksel;