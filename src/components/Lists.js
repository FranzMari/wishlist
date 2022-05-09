import * as React from "react";
import lists from '../lists.json'


export default function Lists() {
  return (
    <ol>
        { lists.Lists.map(list => <li key={lists.Lists.indexOf(list)}> {list.name} </li>)}
    </ol>
  );
}
