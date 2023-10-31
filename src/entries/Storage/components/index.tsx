import React from "react";

export const Storage: React.FC = () => {
  const array = [
    {
      id: 101,
      name: 'test',
      count: 120
    },
    {
      id: 1,
      name: 'test',
      count: 100
    },
    {
      id: 10,
      name: 'test',
      count: 50
    },
  ]
  return (
    <div>
      <h1>Раскладка по складам</h1>
      <div>
        {array.map(({id, name, count}) =>
          <div key={id}>
            <div>{name}</div>
            <div>{count}</div>
          </div>
        )}
      </div>
    </div>
  )
}
