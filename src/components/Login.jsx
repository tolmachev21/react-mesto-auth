import SectionLogin from "./SectionLogin";


function Login ({name, onLogin}) {
  return (
    <SectionLogin name={name} onSubmit={onLogin} />

  );
};

export default Login;