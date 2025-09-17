import { useContext } from 'react';
import { SiGoogletranslate } from 'react-icons/si';
import LocaleContext from '../contexts/LocaleContext';

function ToggleLocale() {
  const { locale, toggleLocale } = useContext(LocaleContext);
  console.log("nilai locale: ", locale);
  return (
    <button className="toggle-locale" onClick={toggleLocale}><SiGoogletranslate /></button>
  )
}

export default ToggleLocale;
