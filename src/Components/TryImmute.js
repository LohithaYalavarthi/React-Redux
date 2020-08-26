import React from 'react'
import Immutable from 'immutable'

function TryImmute () {
  const list1 = Immutable.List([1, 2, 3])
  const list2 = Immutable.List([4, 5, 6])
  const array = [7, 8, 9]
  const list3 = list1.concat(list2, array)
  list3.push(0)
  console.log('list3', list3.toJS())
  return <div>{list3}</div>
}

export default TryImmute
