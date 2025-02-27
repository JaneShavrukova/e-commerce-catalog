import style from './BackToTop.module.scss';

export const BackToTop: React.FC = () => {
  function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={style.backToTopBlock} onClick={goToTop}>
      <span className={style.text}>Back to top</span>
      <button type="button" className={style.button}>
        <img src="img/icons/arrow-back-white.svg" alt="arrow-top" />
      </button>
    </div>
  );
};
