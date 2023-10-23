import AuthPage from '../../Template/Auth/AuthPage';
import InputForm from '../../components/input/InputForm';

export default function Masuk() {
  return (
        <div>
            <AuthPage greeting={`Masuk, dan mulai menulis!`} crossLinkText={`Belum terdaftar ?`} crossLink={`Daftar`} submitName={`Masuk`}>
              <InputForm label="E-mail" name="E-mail" type="email" placeholder="member@mail.com" />
              <InputForm label="Password" name="Password" type="password" placeholder="*****" />
            </AuthPage>
        </div>
      )
    }
