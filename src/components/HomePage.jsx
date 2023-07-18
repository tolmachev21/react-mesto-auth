import { useContext } from 'react';
import Card from './Card.jsx';

import CurrentUserContext from '../contexts/CurrentUserContext.js';

function HomePage(props) {

  
  const currentUser = useContext(CurrentUserContext);

  return(
  <>
    <section className="profile">
      <button className="profile__avatar-button" onClick={props.onEditAvatar} type="button">
        <img className="profile__avatar" src={currentUser.avatar ? currentUser.avatar : '#'} alt="Аватар профиля"></img>
      </button>
      <div className="profile__info">
        <h1 className="profile__name">{currentUser.name ? currentUser.name : ''}</h1>
        <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Редактировать профиль"></button>
        <p className="profile__job">{currentUser.about ? currentUser.about : ''}</p>
      </div>
      <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Добавить картинку"></button>
    </section>

    <section className="places" aria-label="Сетка с картинками">
      {props.cards.map((data) => {
        return (
          <Card card={data} key={data._id} onCardClick={props.onCardClick} onDeleteClick={props.onDeleteClick} />
        )
      })}
    </section>
  </>
  );
};

export default HomePage;