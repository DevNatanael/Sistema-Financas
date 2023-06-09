/* eslint-disable react/jsx-no-target-blank */
import * as C from "./styles";

export const Footer = () => {
  return (
    <C.Container>
      <C.AreaText>
        <p>
          Copyright © 2022 | Desenvolvido por{" "}
          <a
            href="https://github.com/DevNatanael"
            target="_blank"
            style={{ color: "#1F008B", cursor: "pointer" }}
          >
            Natanael Otaviano Guedes
          </a>
        </p>
      </C.AreaText>
    </C.Container>
  );
};
