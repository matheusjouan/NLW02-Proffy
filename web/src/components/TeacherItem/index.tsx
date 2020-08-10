import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  name: string;
  avatar: string;
  bio: string;
  price: string;
  subject: string;
  whatsapp: string;
  id: string;
  user: {
    id: string;
    avatar: string;
    name: string;
    bio: string;
    whatsapp: string;
  };
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function handleCreateConnection() {
    console.log('oi');

    await api.post('/connections', {
      user_id: teacher.user.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.user.avatar} alt={teacher.user.name} />
        <div>
          <strong>{teacher.user.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.user.bio}</p>

      <footer>
        <p>
          Preço/hora <strong>R$ {teacher.price}</strong>
        </p>
        <a
          onClick={handleCreateConnection}
          href={`https://wa.me/${teacher.user.whatsapp}`}
          target="_blank"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
