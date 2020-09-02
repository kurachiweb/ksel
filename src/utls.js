//要素オブジェクトのラッパー
export const elemReport = (nodeList, selector) => ({
    elems: [...(isArrayLike(nodeList) ? nodeList : [])],
    selector
});

// Nodeかどうか判定
export const isNode = node => node instanceof Node;

// ArrayまたはArray-likeであるかを判定
export const isArrayLike = nodeList => (
    nodeList &&
    typeof nodeList !== 'string' &&
    nodeList[0] != null
);

// 有効なHTML/XHTML要素名であるかを判定
export const invaildElemName = /[^\w-:.]/;
export const isElemName = tagName => (
    tagName &&
    typeof tagName === 'string' &&
    !Number.isInteger(+tagName[0]) &&
    !invaildElemName.test(tagName)
);

export const arrayUndupli = arr => (
    arr.filter((value, i, target) => target.indexOf(value) === i)
);

// idとclassのための。スペース区切り属性値に対してadd,remove,has,toggleを行う
export const spacedValueManip = (thisObj, attr, value, command) => {
    let values;
    if (Array.isArray(value)) {
        values = value;
    } else if (typeof value === 'string') {
        values = [value];
    } else {
        throw new SyntaxError('invaild attribute value.');
    }
    if (values.some(value => !isElemName(value))) throw new SyntaxError('Value contains invaild data.');
    thisObj.each(elem => {
        let elemValueArr = elem.getAttribute(attr).split(' '), elemValueStr;

        if (command === 'add') {
            values.forEach(eachValue => elemValueArr.push(eachValue));
            elemValueStr = arrayUndupli(elemValueArr).join(' ');
            elem.setAttribute(attr, elemValueStr);

        } else if (command === 'remove') {
            elemValueStr = elemValueArr.filter(eachValue => (
                !values.includes(eachValue)
            )).join(' ');
            elem.setAttribute(attr, elemValueStr);

        } else if (command === 'toggle') {
            values.map(eachValue => {
                const valueIndex = elemValueArr.indexOf(eachValue);
                if (~valueIndex) {
                    elemValueArr.splice(valueIndex, 1);
                } else {
                    elemValueArr.push(eachValue);
                }
            });
            elem.setAttribute(attr, elemValueArr.join(' '));
        }
    });
    return thisObj;
};

export const spacedValueInclude = (thisObj, attr, value) => {
    let hasValue = false;
    thisObj.each(elem => {
        const elemValueArr = elem.getAttribute(attr).split(' ');
        if (!hasValue && elemValueArr.includes(value)) hasValue = true;
    });
    return hasValue;
};