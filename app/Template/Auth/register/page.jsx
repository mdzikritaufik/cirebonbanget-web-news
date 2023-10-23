import AuthPage from '../AuthPage';
import InputForm from '../../../components/input/InputForm';

export default function Daftar() {
  return (
        <div>
            <AuthPage greeting={`Daftar untuk ikut menulis !`} altAccess={`Masuk Dengan Google`}>
              <InputForm label="Nama" name="Nama" type="nama" placeholder="Tulis Nama Kamu" />
              <InputForm label="E-mail" name="E-mail" type="email" placeholder="member@mail.com" />
              <InputForm label="Password" name="Password" type="password" placeholder="*****" />
              <InputForm label="Confirm Password" name="Confirm Password" type="re-password" placeholder="*****" />
            </AuthPage>
        </div>
      )
    }
