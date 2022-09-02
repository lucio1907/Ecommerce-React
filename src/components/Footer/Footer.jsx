import {
  ContainerFooter,
  ContainerGitHub,
  ContainerSocials,
  FollowUs,
  H4,
  PhraseContainer,
  Socials,
} from "./stylesFooter";
import { Logo, Span } from "../Header/stylesNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import useAppContext from "../../hooks/useAppContext";

const Footer = () => {
  const { spinner } = useAppContext();
  return (
    <>
      {!spinner && (
        <ContainerFooter>
          <PhraseContainer>
            <H4>All Around the World</H4>
          </PhraseContainer>
          <ContainerSocials>
            <FollowUs>Follow us!</FollowUs>
            <Socials>
              <a href="https://www.facebook.com/" target="_BLANK" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl md:text-4xl mt-2 hover:scale-125 transition-all duration-300"
                />
              </a>
              <a href="https://twitter.com/" target="_BLANK" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl md:text-4xl mt-2 hover:scale-125 transition-all duration-300"
                />
              </a>
              <a href="https://www.instagram.com/" target="_BLANK" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl md:text-4xl mt-2 hover:scale-125 transition-all duration-300"
                />
              </a>
              <a href="https://www.youtube.com/" target="_BLANK" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-2xl md:text-4xl mt-2 hover:scale-125 transition-all duration-300"
                />
              </a>
            </Socials>
          </ContainerSocials>
          <Logo>
            <a href="#">Co|Clothes</a>
            <Span>E-commerce</Span>
          </Logo>
          <ContainerGitHub>
            <a
              href="https://github.com/lucio1907"
              target="_BLANK"
              rel="noreferrer"
              className="text-black hover:text-indigo-600 transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="mr-1 text-4xl md:text-5xl"
              />
            </a>
          </ContainerGitHub>
        </ContainerFooter>
      )}
    </>
  );
};

export default Footer;
