import { MouseEvent, useState } from 'react';
import { people } from '../Data/people';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  const [selected, setSelected] = useState(1);

  const handleClick = (id: number, event: MouseEvent): void => {
    event.preventDefault();
    setSelected(id);
  };

  return (
    <div className={styles.sidebar}>
      {people.map((person, index) => {
        return (
          <a
            href={` ${person.name}`}
            key={index}
            onClick={(event) => handleClick(person.id, event)}
            className={selected === person.id ? styles.active : ''}
          >
            {person.name}
          </a>
        );
      })}
    </div>
  );
};
