# ksel
JavaScript library which DOM manipulation. Inspire from jQuery and D3.js.

## Document
kselObj.get(selector: string): kselObj
``` js
ksel.get('.gum');
ksel.get('input[type=text]');
```

kselObj.new(elemName?: string | array): kselObj
``` js
ksel.new('div');
ksel.new(['h2', 'p']);
```

kselObj.attr(attrName: string, value?: string | function | boolean): kselObj
``` js
ksel.get('.form_input').attr('value');  // get
ksel.get('.form_input').attr('value', 'grow up');  // set
ksel.get('.form_input').attr('value', (d, i) => data[i]);  // set
ksel.get('.form_input').attr('value', false);  // delete
```

kselObj.addClass(className: string | array): kselObj
``` js
ksel.get('#nav').addClass('l_in');
ksel.get('#nav').addClass(['grow', 'up']);
```

kselObj.removeClass(className: string | array): kselObj
``` js
ksel.get('#nav').removeClass('covid');
ksel.get('#nav').removeClass(['juke', 'box']);
```

kselObj.hasClass(className: string): kselObj
``` js
ksel.get('#nav').hasClass('open');
ksel.get('#nav').hasClass(['cloud', 'storage']);
```

kselObj.toggleClass(className: string | array): kselObj
``` js
ksel.get('#nav').toggleClass('expand');
ksel.get('#nav').toggleClass(['mole', 'crocodile']);
```

kselObj.text(nodeText?: string | array): kselObj or array
``` js
ksel.get('.gum').text();  // get
ksel.get('.gum').text('grow up');  // set
```

kselObj.appendTo(nodeText: string): kselObj or array
``` js
ksel.new('p').text('grow up! grow up!').appendTo('.cool_table td');
```