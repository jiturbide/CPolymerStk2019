#Observable changes
##Setting a direct property of the element.
this.owner = 'Jane';

##Setting a subproperty of the element using a two-way data binding.
<local-dom-child name="{{hostProperty.subProperty}}"></local-dom-child>

#Unobservable changes
Setting a subproperty of an object:
this.address.street = 'Elm Street';

#Mutating an array:
this.users.push({ name: 'Maturin'});

#Mutating objects and arrays observably
// mutate an object observably
this.set('address.street', 'Half Moon Street');

// mutate an array observably
this.push('users', { name: 'Maturin'});

// Notify Polymer that the value has changed
this.notifyPath('address.street');

# Data binding
Automatic, which allows upward (target to host) and downwards (host to target) data flow. Automatic bindings use double curly brackets ({{ }}):
<my-input value="{{name}}"></my-input>

One-way, which only allows downwards data flow. Upward data flow is disabled. One-way bindings use double square brackets ([[ ]]).
<name-tag name="[[name]]"></name-tag>

* notify. A notifying property supports upward data flow. By default, properties are non-notifying, and don't support upward data flow.
* readOnly. A read-only property prevents downward data flow. By default, properties are read/write, and support downward data flow.


#Configuration	Result ==============================================

## No data flow --------------
notify: false,
readOnly: true

## One-way, downward ---------
notify: false,
readOnly: false

## One-way, upward -----------
notify: true,
readOnly: true

## Two-way -------------------
notify: true,
readOnly: false
