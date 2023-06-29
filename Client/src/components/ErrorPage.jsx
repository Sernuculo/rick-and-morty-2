import errorPage from "https://i.redd.it/o6px8q59yw401.jpg";
import React from "react";
import style from './ErrorPage.moludes.css';

function ErrorPage() {
  return (
    <div className={style.container}>
      <img src={errorPage} alt="error-page" />
    </div>
  );
}

export default ErrorPage;
