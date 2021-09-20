import * as S from "./Header.styles";

function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Rocketbank</S.Title>
        <a href="https://www.rocketbank.com.br/#home" target="_blank" rel="noreferrer">
          <img src="img/logo-rocket.webp" alt="rocketbank logo" />
        </a>
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
