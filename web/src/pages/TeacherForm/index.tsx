import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [biografia, setBiografia] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post('/classes', {
        name,
        avatar,
        whatsapp,
        bio: biografia,
        subject,
        price: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro Realizado');

        history.push('/');
      })
      .catch(() => {
        alert(`Erro`);
      });
  }

  function setScheduletemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((item, index) => {
      if (index === position) {
        return { ...item, [field]: value };
      }

      return item;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que voce quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome Completo"
              name="name"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={e => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={e => {
                setWhatsapp(e.target.value);
              }}
            />

            <TextArea
              label="Biografia"
              name="bio"
              value={biografia}
              onChange={e => {
                setBiografia(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label="Matéria"
              name="subject"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Ciência', label: 'Ciência' },
                { value: 'Física', label: 'Física' },
                { value: 'Química', label: 'Química' },
                { value: 'Biologia', label: 'Biologia' },
              ]}
              value={subject}
              onChange={e => {
                setSubject(e.target.value);
              }}
            />
            <Input
              label="Custo da sua aula por hora"
              name="cost"
              value={cost}
              onChange={e => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((item, index) => {
              return (
                <div key={item.week_day} className="schedule-item">
                  <Select
                    label="Dia da semana"
                    name="week_day"
                    value={item.week_day}
                    onChange={e =>
                      setScheduletemValue(index, 'week_day', e.target.value)
                    }
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />

                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={item.from}
                    onChange={e =>
                      setScheduletemValue(index, 'from', e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={item.to}
                    onChange={e =>
                      setScheduletemValue(index, 'to', e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
