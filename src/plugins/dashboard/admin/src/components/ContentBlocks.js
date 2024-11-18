import React, { useEffect } from "react";
// @ts-ignore
import { useHistory } from "react-router-dom";
// @ts-ignore
import { Flex, Typography } from "@strapi/design-system";
import { useIntl } from "react-intl";

const ContentBlocks = () => {
  const { formatMessage } = useIntl();
  const { push } = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      push("/content-manager");
    }, 3000); // Redireciona após 3 segundos
    return () => clearTimeout(timer);
  }, [push]);

  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      padding={5}
      height="100vh"
    >
      <Typography variant="alpha" as="h1">
        {formatMessage({
          id: "dashboard.welcome",
          defaultMessage: "Bem-vindo",
        })}
      </Typography>
      <Typography variant="beta" as="p">
        {formatMessage({
          id: "dashboard.redirecting",
          defaultMessage: "Redirecionando para o gerenciador de conteúdos...",
        })}
      </Typography>
    </Flex>
  );
};

export default ContentBlocks;
