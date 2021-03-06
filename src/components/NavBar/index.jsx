import buttonClasses from "../Button/builder";

import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation();
    return (
        <nav className="pt-4 pb-4 pl-9 pr-9
                        flex flex-row justify-between items-center
                        bg-gray-100 dark:bg-gray-900">

            {/* Logo */}
            <div className="lg:basis-0 lg:grow flex">
                <a href="/">
                    <svg className="fill-blue dark:fill-green" height="48" width="48" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.85 12.2C54.4 10.875 53.125 10 51.7 10C51.625 10 51.55 10 51.475 10H49L48.225 7.575C47.875 6.075 46.525 5 45 5C43.475 5 42.125 6.075 41.775 7.6L41 10H38.55C38.475 10 38.4 10 38.325 10C36.9 10 35.625 10.875 35.175 12.2C34.7 13.6 35.275 15.125 36.575 15.9L38.75 17.2L37.75 20.3C37.175 21.75 37.65 23.425 38.875 24.35C39.45 24.775 40.15 25 40.825 25C41.6 25 42.35 24.725 42.975 24.2L45 22.45L47.025 24.2C47.65 24.725 48.4 25 49.175 25C49.85 25 50.55 24.775 51.125 24.35C52.375 23.425 52.825 21.75 52.25 20.3L51.275 17.2L53.45 15.9C54.725 15.125 55.3 13.6 54.85 12.2ZM45 17.5C43.625 17.5 42.5 16.375 42.5 15C42.5 13.625 43.625 12.5 45 12.5C46.375 12.5 47.5 13.625 47.5 15C47.5 16.375 46.375 17.5 45 17.5Z"/>
                        <path d="M33.725 26.275C32.65 25.2 31.375 24.45 30 23.95V20H27.5V23.45C27.225 23.425 26.925 23.375 26.65 23.375C24.1 23.375 21.525 24.35 19.575 26.3C19.275 26.6 18.825 27.05 18.325 27.55L15 26.3C11.1 24.925 6.8 26.975 5.425 30.85C4.75 32.725 4.85 34.775 5.725 36.575C6.3 37.775 7.175 38.75 8.225 39.475C7.275 42.85 8.075 46.6 10.725 49.25C12.675 51.2 15.225 52.175 17.8 52.175C18.725 52.175 19.625 52 20.525 51.75C21.25 52.8 22.225 53.675 23.425 54.25C24.45 54.75 25.525 55 26.625 55C27.475 55 28.325 54.85 29.15 54.575C33.05 53.2 35.1 48.9 33.7 44.95L32.475 41.7C32.975 41.2 33.425 40.75 33.725 40.45C35.9 38.275 36.825 35.35 36.575 32.525H40V30.025H36.025C35.55 28.65 34.8 27.375 33.725 26.275ZM18.95 47.05C18.575 47.15 18.2 47.2 17.8 47.2C16.475 47.2 15.2 46.675 14.275 45.725C13.325 44.775 12.8 43.525 12.8 42.2C12.8 41.8 12.875 41.4 12.95 41.025C13.3 41.05 13.65 41.1 14 41.1C16.125 41.1 18.2 40.6 20.1 39.9C19.3 42.125 18.75 44.575 18.95 47.05ZM11.675 35.725C11.05 35.5 10.55 35.05 10.25 34.45C9.95 33.85 9.925 33.175 10.15 32.55C10.625 31.25 12.05 30.575 13.3 31.025L21.2 34C18.325 35.5 14.625 36.775 11.675 35.725ZM27.475 49.85C26.85 50.075 26.175 50.05 25.575 49.75C24.975 49.475 24.525 48.95 24.3 48.325C23.25 45.375 24.525 41.7 26.05 38.825L29 46.65C29.45 47.95 28.775 49.4 27.475 49.85ZM30.5 36.5L28.975 32.475C28.975 32.45 28.95 32.425 28.925 32.4C28.875 32.3 28.825 32.2 28.775 32.1C28.725 32 28.675 31.925 28.6 31.825C28.525 31.75 28.45 31.675 28.375 31.6C28.3 31.525 28.225 31.45 28.15 31.375C28.075 31.3 27.975 31.25 27.875 31.2C27.775 31.15 27.7 31.075 27.575 31.05C27.55 31.05 27.525 31.025 27.5 31L23.5 29.5C24.4 28.775 25.475 28.35 26.65 28.35C27.975 28.35 29.25 28.875 30.175 29.825C32 31.65 32.1 34.525 30.5 36.5Z"/>
                    </svg>
                </a>
            </div>

            {/* Primary naviation links */}
            <div className="list-none
                            hidden lg:flex flex-row gap-8">
                <a href="/contribute">{t('navbar.contribute')}</a>
                <a href="https://discord.com">{t('navbar.need_help')}</a>
                <a href="/team">{t('navbar.team')}</a>
                <a href="https://github.com/frequential/flora">{t('navbar.source')}</a>
            </div>

            <div className="lg:basis-0 lg:grow flex flex-row-reverse items-center gap-4">
                {/* Menu for mobile */}
                <div className="lg:hidden inline-block
                                mt-auto mb-auto">
                    <button onClick={MobileMenuToggle}><i className="material-icons menu"></i></button>
                </div>

                {/* Call-to-action */}
                <div>
                    <a href="https://discord.com"><button className={buttonClasses({type: 'accent'})}>{t('commons.cta')}</button></a>
                </div>
            </div>

            <MobileNavBar/>
        </nav>
    );
};

const MobileNavBar = () => (
    <div className="flex flex-col gap-8 fixed top-0 right-0 backdrop-contrast-50
                    h-full w-4/5 p-8
                    bg-gray-300 dark:bg-gray-700
                    translate-x-full lg:translate-x-full transition-transform
                    mobile-nav-bar z-50">

        {/* Logo */}
        <div className="flex flex-row justify-between">
            <a href="/"><h1>Flora</h1></a>

            <div className="mt-auto mb-auto">
                <button onClick={MobileMenuToggle}><i className="material-icons close"></i></button>
            </div>
        </div>

        {/* Primary naviation links */}
        <div className="list-none
                        flex flex-col gap-8">
            <a href="/contribute">Contribute</a>
            <a href="https://discord.com/">Need help?</a>
            <a href="/team">Our team</a>
            <a href="https://github.com/frequential/flora">Source code</a>
        </div>
        
        {/* Call-to-action */}
        <div className="mt-auto">
            <a href="https://discord.com"><button className={buttonClasses({type: 'accent'})}>Add to Discord</button></a>
        </div>
    </div>
)

const MobileMenuToggle = () => {
    const MENU = document.querySelector(".mobile-nav-bar");

    MENU.classList.toggle("translate-x-full");
}

export default NavBar;