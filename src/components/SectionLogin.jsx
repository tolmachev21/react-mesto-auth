import { Link } from "react-router-dom";

function SectionLogin({ name, children, onSubmit }) {
  return (
    <section className="login page__login">
      <h2 className="login__title">{name === 'signup' ? 'Регистрация' : 'Вход'}</h2>
      <form name={name} onSubmit={onSubmit}>
        {children}  
      </form>
      {name === 'signup' && <p className="login__subtitle">Уже зарегистрированы? <Link to={'/sign-in'} className="login__subtitle-link">Войти</Link></p>}
    </section>
  );
};

export default SectionLogin;