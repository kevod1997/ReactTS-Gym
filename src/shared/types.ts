export enum SelectedPage {
  Home = "home",
  Beneficios = "beneficios",
  Instalaciones = "instalaciones",
  Contactanos = "contactanos",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name?: string;
  description?: string;
  image: string;
}
