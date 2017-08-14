# camel-case-props
a small utility recursive function which returns a new object with all props camel cased
Is your api returning snakeCase props and you want to use camelCase? Look no further.

# usage

```javascript
const camelCaseProps = require('camel-case-props')
camelCaseProps({some_snake_case_prop: 'aaa_bbb', nested: {a_b: 'c'}}) // {someSnakeCaseProp: null, nested: {aB:c}}
```

