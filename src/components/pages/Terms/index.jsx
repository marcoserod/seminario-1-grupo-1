import React from "react";
import { Box, Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

export const TermsAndConditions = () => {
  return (
    <Box padding="2rem">
      <Container sx={{ marginTop: "1rem" }} maxWidth="false">
        <Typography component="h1" variant="h4">
          Terminos y Condiciones de Mentorship
        </Typography>

        <Typography variant="h5" gutterBottom>
          Terminos de uso
        </Typography>
        <Typography variant="body1" gutterBottom>
          A menos que se especifique lo contrario, los términos de uso
          detallados en esta sección se aplican generalmente al usar este sitio
          web. Pueden aplicarse condiciones de uso o acceso únicas o adicionales
          en escenarios específicos y en tales casos se indican adicionalmente
          en este documento.
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
        >
          <ListItem>
            No existen restricciones para los Usuarios en cuanto a ser
            Consumidores o Usuarios Empresariales;
          </ListItem>
          <ListItem>
            Los usuarios deben ser reconocidos como adultos por la ley
            aplicable;
          </ListItem>
          <ListItem>
            Al utilizar este Sitio Web, los Usuarios confirman cumplir con los
            siguientes requisitos: Los menores solo pueden usar este sitio web
            bajo la supervisión de los padres o de un adulto;
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          Creacion de cuenta
        </Typography>
        <Typography variant="body1" gutterBottom>
          Para utilizar el Servicio, los Usuarios deben registrarse o crear una
          cuenta de Usuario, proporcionando todos los datos o información
          requerida de manera completa y veraz. El no hacerlo causará la
          indisponibilidad del Servicio. Los usuarios son responsables de
          mantener sus credenciales de inicio de sesión confidenciales y
          seguras.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Por este motivo, los Usuarios también están obligados a elegir
          contraseñas que cumplan con los más altos estándares de seguridad
          permitidos por este Sitio Web.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Al registrarse, los Usuarios aceptan ser completamente responsables de
          todas las actividades que ocurran bajo su nombre de usuario y
          contraseña. Los usuarios están obligados a informar de inmediato y sin
          ambigüedades al Titular a través de los datos de contacto indicados en
          este documento, si creen que su información personal, incluidas, entre
          otras, las cuentas de usuario, las credenciales de acceso o los datos
          personales, han sido violados, divulgados indebidamente o robados.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Registro de una cuenta
        </Typography>
        <Typography variant="body1" gutterBottom>
          El registro de cuentas de Usuario en este Sitio Web está sujeto a las
          condiciones que se describen a continuación. Al registrarse, los
          Usuarios aceptan cumplir con dichas condiciones.
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
        >
          <ListItem>
            No se permiten cuentas registradas por bots o cualquier otro método
            automatizado.
          </ListItem>
        </List>
        <Typography variant="h5" gutterBottom>
          Suspension de cuentas y borrado
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
        >
          <ListItem>
            El Titular se reserva el derecho, a su sola discreción, de suspender
            o eliminar en cualquier momento y sin previo aviso, las cuentas de
            Usuario que considere inapropiadas, ofensivas o en violación de
            estos Términos.
          </ListItem>
          <ListItem>
            La suspensión o eliminación de las cuentas de los Usuarios no dará
            derecho a los Usuarios a ningún reclamo de compensación, daños o
            reembolso.
          </ListItem>
          <ListItem>
            La suspensión o cancelación de cuentas por causas imputables al
            Usuario no exime al Usuario del pago de las tasas o precios
            aplicables.
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          Responsabilidad por el contenido proporcionado por usuarios
        </Typography>
        <Typography variant="body1" gutterBottom>
          Los usuarios son los únicos responsables de cualquier contenido que
          carguen, publiquen, compartan o proporcionen a través de este sitio
          web. Los usuarios reconocen y aceptan que el Titular no filtra ni
          modera dichos contenidos.
        </Typography>
        <Typography variant="body1" gutterBottom>
          No obstante, el Titular se reserva el derecho a retirar, borrar,
          bloquear o rectificar tales contenidos a su discreción y, sin previo
          aviso, denegar al Usuario que los sube el acceso a este Sitio Web:
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
        >
          <ListItem>
            si se recibe alguna queja basada en dicho contenido;
          </ListItem>
          <ListItem>
            si se recibe una notificación de infracción de los derechos de
            propiedad intelectual;
          </ListItem>
          <ListItem>por orden de una autoridad pública; o</ListItem>
          <ListItem>
            donde el Titular es consciente de que el contenido, siendo accesible
            a través de este Sitio Web, puede representar un riesgo para los
            Usuarios, terceros y/o la disponibilidad del Servicio.
          </ListItem>
        </List>
        <Typography variant="body1" gutterBottom>
          La retirada, supresión, bloqueo o rectificación de contenidos no dará
          derecho a los Usuarios que hayan facilitado dichos contenidos o que
          sean responsables de los mismos, a reclamación alguna de
          indemnización, perjuicio o reembolso.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Los usuarios aceptan eximir de responsabilidad al Titular de cualquier
          reclamo que se presente y/o daño sufrido debido al contenido que
          proporcionaron o proporcionaron a través de este sitio web.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Acceso a recursos externos
        </Typography>
        <Typography variant="body1" gutterBottom>
          A través de este Sitio Web los Usuarios pueden tener acceso a recursos
          externos proporcionados por terceros. Los usuarios reconocen y aceptan
          que el Titular no tiene control sobre dichos recursos y, por lo tanto,
          no es responsable de su contenido y disponibilidad.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Las condiciones aplicables a los recursos proporcionados por terceros,
          incluidas las aplicables a cualquier posible concesión de derechos
          sobre el contenido, resultan de los términos y condiciones de cada
          tercero o, en su defecto, de la legislación aplicable.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Uso Aceptable
        </Typography>
        <Typography variant="body1" gutterBottom>
          Este sitio web y el servicio solo se pueden usar dentro del alcance de
          lo que se proporciona, bajo estos Términos y la ley aplicable. Los
          usuarios son los únicos responsables de asegurarse de que su uso de
          este sitio web y/o el Servicio no infrinja ninguna ley, reglamento o
          derecho de terceros aplicable.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Por lo tanto, el Propietario se reserva el derecho de tomar cualquier
          medida apropiada para proteger sus intereses legítimos, incluso
          denegando a los Usuarios el acceso a este Sitio web o al Servicio,
          rescindiendo contratos, denunciando cualquier conducta indebida
          realizada a través de este Sitio web o del Servicio a las autoridades
          competentes, como autoridades judiciales. o autoridades
          administrativas - siempre que los Usuarios participen o se sospeche
          que participen en cualquiera de las siguientes actividades:
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": {
              display: "list-item",
            },
          }}
        >
          <ListItem>violar leyes, reglamentos y/o estos Términos</ListItem>
          <ListItem>infringir los derechos de terceros;</ListItem>
          <ListItem>
            perjudique considerablemente los intereses legítimos del Titular
          </ListItem>
          <ListItem>ofender al Titular o a cualquier tercero.</ListItem>
        </List>
      </Container>
    </Box>
  );
};
