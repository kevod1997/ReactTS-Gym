import Logo from "@/assets/Logo3.png";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="basis-1/2">
          <img alt="logo" src={Logo} className="ml-[-28px]" />
          <p className="my-5">
          Logra tus metas fitness en nuestro gimnasio de calidad. ¡Únete y vive una vida activa y saludable!
          </p>
          <p>© Gold's Gym Todos los derechos reservados.</p>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Horarios</h4>
          <p className="my-5">Lunes a viernes de 7 hs a 13 hs. y de 15 a 21 hs.</p>
          <p className="my-5 font-bold">Direcion</p>
          <p>Av. Pellegrini 2315</p>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contacto</h4>
          <p className="my-5">2284-269075</p>
          <p >mail@mail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
