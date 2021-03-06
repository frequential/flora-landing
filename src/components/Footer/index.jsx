import buttonClasses from "../Button/builder";

import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Footer = () => {
    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <footer className="pt-14 pb-14 pl-9 pr-9 
                           flex flex-col justify-between 
                           bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">

            <div className="flex md:flex-row flex-col">
                <div className="flex flex-col">

                    <div className="hidden md:inline-block">
                        <h3>{t('commons.slogan_full')}</h3>
                    </div>

                    <div className="flex flex-row justify-between gap-2 md:mr-auto">

                        <div className="relative">
                            <div id="languages" className="hidden flex-col absolute bottom-full
                                            p-1 mb-2 w-full rounded-lg 
                                            text-black bg-gray-200 dark:bg-gray-700 dark:text-gray-300
                                            shadow-inner-component dark:shadow-inner-dark-component">
                                    <button onClick={() => changeLanguage('en-US')}>English</button>
                                    <button onClick={() => changeLanguage('es-ES')}>Español</button>
                                    <button onClick={() => changeLanguage('ca-ES')}>Català</button>
                            </div>
                            <button className={buttonClasses({type: 'dropdown'})} onClick={
                                () => ["flex", "hidden"].map(v => document.querySelector("#languages").classList.toggle(v))
                            }>{t('commons.language')}</button>
                        </div>

                        <div className="relative">
                            <div id="themes" className="hidden flex-col absolute bottom-full
                                            p-1 mb-2 w-full rounded-lg 
                                            text-black bg-gray-200 dark:bg-gray-700 dark:text-gray-300
                                            shadow-inner-component dark:shadow-inner-dark-component">
                                    <button onClick={setDark}>Dark</button>
                                    <button onClick={setLight}>Light</button>
                                    <button onClick={setSystem}>System</button>
                            </div>
                            <button className={buttonClasses({type: 'dropdown'})} onClick={
                                () => ["flex", "hidden"].map(v => document.querySelector("#themes").classList.toggle(v))
                            }>{t('commons.theme')}</button>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row gap-8 ml-auto
                                text-right">
                    <div>
                        <div>
                            <h4>{t('footer.product')}</h4>
                        </div>
                        <div className="flex flex-col">
                            <ul className="list-">
                                <li><a href="https://discord.com">{t('commons.cta')}</a></li>
                                <li><a href="/#features">{t('commons.learn_more')}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>{t('footer.policies')}</h4>
                        </div>
                        <div className="flex flex-col">
                            <ul>
                                <li><a href="/privacy">{t('footer.privacy')}</a></li>
                                <li><a href="/purchases">{t('footer.purchases')}</a></li>
                                <li><a href="/cookies">{t('footer.cookies')}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h6>
                    <a href="https://getflora.cat">Flora Landing</a> © 2022 by <a href="https://github.com/frequential">Jasper Lutz Severino</a> is licensed under CC <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1">BY-SA 4.0</a> 
                </h6>
            </div>
        </footer>
    );
};

const setDark = () => {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
}

const setLight = () => {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
}

const setSystem = () => {
    localStorage.removeItem('theme')

    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        document.documentElement.classList.add('dark')
    else
        document.documentElement.classList.remove('dark')
}

export default Footer;