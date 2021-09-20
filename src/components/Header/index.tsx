import * as S from "./Header.styles";

function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Rocketbank</S.Title>
        <a href="https://www.rocketbank.com.br/#home" target="_blank" rel="noreferrer">
          <img src="https://res.cloudinary.com/dppr8dksd/image/upload/v1632167204/logo-rocket_vzvlqb.webp" alt="rocketbank logo" />
        </a>
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
