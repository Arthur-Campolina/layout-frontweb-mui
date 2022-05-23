type Props = {
  logo: any;
};

const Logo = ({ logo }: Props) => {
  return <img width={"600px"} height={"400px"} src={logo} alt="Logo" />;
}
export default Logo;