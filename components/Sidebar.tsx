import { MouseEvent } from 'react';
import { people } from '../Data/people';

import styles from './Sidebar.module.css';

interface SidebarProps {
  selected: number;
  selectedHandleClick: (id: number, event: MouseEvent) => void;
}

export const Sidebar = ({ selected, selectedHandleClick }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      {people.map((person, index) => {
        return (
          <a
            href={` ${person.name}`}
            key={index}
            onClick={(event) => selectedHandleClick(person.id, event)}
            className={selected === person.id ? styles.active : ''}
          >
            {person.name}
          </a>
        );
      })}
    </div>
  );
};
