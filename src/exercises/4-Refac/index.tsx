/**
 * 4. Refac
 *
 * - My component can be simplified.
 * - I don't want to maintain all those rows.
 * - I don't want to maintain all those states.
 * - I want my refactored component to be heavily typed using TypeScript.
 */

import { useState } from "react";

interface MemberData {
  name: string, 
  code: string
}

const Refac = () => {

  const [member, setMember] = useState<MemberData>({ name: "—", code: "—"});
  const [index, setIndex] = useState<number>();

  const members: MemberData[] = [
    {
      name: 'Guillaume', 
      code: 'ABCD'
    }, 
    {
      name: 'Josian', 
      code: '1234'
    }, 
    {
      name: 'Jules', 
      code: 'EFGH'
    }, 
    {
      name: 'Marvin', 
      code: 'IJKL'
    }, 
    {
      name: 'Valery', 
      code: '5678'
    }, 
    {
      name: 'Fadi', 
      code: 'UVWX'
    }, 
    {
      name: 'Dan', 
      code: 'QRST'
    }, 
    {
      name: 'Nicolas', 
      code: '91011'
    }, 
    {
      name: 'Emilie', 
      code: 'MNOP'
    }, 
  ];

  return (
<>
    <div>
      <h1>My Refac</h1>
      <pre>
        You clicked on: {member.name || "—"} code: {member.code || "—"} order:{index !== undefined ? index+1 : "—"}
      </pre>
      <table>
        <thead>
          <tr>
            <th>member</th>
            <th>code</th>
            <th>order</th>
          </tr>
        </thead>
        <tbody>
            { members.map ( (item, index) => {
              
              return (
                
                <tr>
                <td
              onClick={() => {
                setMember(item); 
                setIndex(index);
              }}
              >
              {item.name}
            </td>
            <td>{item.code}</td>
            <td>{index+1}</td>
          </tr>
              )
            })}

        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Number of members</td>
            <td>{members.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    </>
  );
};

export default Refac;
