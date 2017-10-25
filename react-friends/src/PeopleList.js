import React from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
  return (
    <div>
      {props.people.sort((a, b) => a.last_name.localeCompare(b.last_name)).map((person => {
        return (
          <div key={person.id} className='peopleBlock'>
            <span>{`${person.first_name} ${person.last_name}`}</span>
            <a className='email' href={`mailto:${person.email}`}>{person.email}</a>
          </div>
        );
      }))}
    </div>
  );
}