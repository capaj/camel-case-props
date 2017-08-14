import test from 'ava'
import camelCaseProps from './camel-case-props'

test('it should camelCase all props', t => {
  t.snapshot(camelCaseProps({some_snake_case_prop: 'aaa_bbb'}))
  t.snapshot(camelCaseProps([{some_snake_case_prop: 'aa_bbb'}]))
})

test('it should not camelCase', t => {  // it would be perf costly to iterate these kind of properties and in the real world, one should not use these anyway
  const someArrayWithAnObjectOnAStringNamedProp = []
  someArrayWithAnObjectOnAStringNamedProp['a'] = {a_b: 1}
  t.snapshot(someArrayWithAnObjectOnAStringNamedProp)
})
