import React from 'react';
import confLogo from '../images/badge-header.svg'

const Badge = () => {
  return (
    <div>
      <div>
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>
      <div>
        <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
        <h1>
          Ernesto <br /> Angulo
        </h1>
      </div>
      <div>
        <p>Frontend</p>
        <p>@kjldskjla</p>
      </div>
      <div>#paltzi</div>
    </div>
  );
};

export default Badge;
