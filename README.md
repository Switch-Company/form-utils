# Switch - formUtils

Convenience methods for form datas

---

## `toJSON( HTMLFormElement, Boolean )`

Return a `JSON` object containing the name and values of each field element of the form. If the form contains fields with the same name, the values of those fields will be in an array.

### Parameters

* `HTMLFormElement` - the form element when want the data from
* `Boolean` - Whether or not limit the object to string values. Filter out file inputs.

## `toQuery( HTMLFormElement )`

Retrun a query string without the leading `?`.

## `hasFile( HTMLForElement )`

Return true if the form has at least one file input that is not empty.
